import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function memoriesRoutes(app: FastifyInstance) {
  // Antes de executar as querys ele verifica se o user está identificado
  app.addHook('preHandler', async (request) => {
    await request.jwtVerify()
  })
  app.get('/memories', async (request) => {
    // Busca todas memorias de um usuário identificado
    const memories = await prisma.memoryPost.findMany({
      where: {
        userId: request.user.sub,
      },
      orderBy: {
        createAt: 'asc',
      },
    })
    return memories.map((memory) => {
      return {
        id: memory.id,
        imgUrl: memory.imgUrl,
        excerpt: memory.contentText.substring(0, 115).concat('...'),
      }
    })
  })

  // Busca Memorias pelo id
  app.get('/memories:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })
    const { id } = paramsSchema.parse(request.params)
    const memory = await prisma.memoryPost.findUniqueOrThrow({
      where: {
        id,
      },
    })
    // Verifica se a memoria é publica e compara id do user com id do user lsogado p/ barrar esse acesso.
    if (!memory.isPublic && memory.id !== request.user.sub) {
      return reply.status(401).send()
    }
    return memory
  })

  // Cria Memoria
  app.post('/memories', async (request) => {
    console.log(request.user)
    const bodySchema = z.object({
      contentText: z.string(),
      imgUrl: z.string(),
      isPublic: z.coerce.boolean().default(false),
    })
    const { contentText, imgUrl, isPublic } = bodySchema.parse(request.body)
    const memory = await prisma.memoryPost
      .create({
        data: {
          contentText,
          imgUrl,
          isPublic,
          userId: request.user.sub,
        },
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
    return memory
  })

  // Atualiza Memoria pelo ID
  app.put('/memories:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })
    const { id } = paramsSchema.parse(request.params)

    const bodySchema = z.object({
      contentText: z.string(),
      imgUrl: z.string(),
      isPublic: z.coerce.boolean().default(false),
    })

    const { contentText, imgUrl, isPublic } = bodySchema.parse(request.body)

    let memory = await prisma.memoryPost.findUniqueOrThrow({
      where: {
        id,
      },
    })

    if (memory.userId !== request.user.sub) {
      return reply.status(401).send()
    }

    memory = await prisma.memoryPost.update({
      where: {
        id,
      },
      data: {
        contentText,
        imgUrl,
        isPublic,
      },
    })
    return memory
  })

  // Remove Memoria pelo ID
  app.delete('/memories:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })
    const { id } = paramsSchema.parse(request.params)

    const memory = await prisma.memoryPost.findUniqueOrThrow({
      where: {
        id,
      },
    })

    if (memory.userId !== request.user.sub) {
      return reply.status(401).send()
    }

    await prisma.memoryPost.delete({
      where: {
        id,
      },
    })
  })
}
