import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function memoriesRoutes(app: FastifyInstance) {
  // Busca Memorias
  app.get('/memories', async () => {
    const memories = await prisma.memoryPost.findMany({
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
  app.get('/memories:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })
    const { id } = paramsSchema.parse(request.params)
    const memory = await prisma.memoryPost.findUniqueOrThrow({
      where: {
        id,
      },
    })
    return memory
  })
  // Cria Memoria
  app.post('/memories', async (request) => {
    const bodySchema = z.object({
      contentText: z.string(),
      imgUrl: z.string(),
      isPublic: z.coerce.boolean().default(false),
    })
    const { contentText, imgUrl, isPublic } = bodySchema.parse(request.body)

    const memory = await prisma.memoryPost.create({
      data: {
        contentText,
        imgUrl,
        isPublic,
        userId: '95b6406a-461c-47e4-b0a7-8dd37921ecbb',
      },
    })
    return memory
  })

  // Atualiza Memoria
  app.put('/memories:id', async (request) => {
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

    const memory = await prisma.memoryPost.update({
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
  // Remove MemorIa
  app.delete('/memories:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })
    const { id } = paramsSchema.parse(request.params)
    await prisma.memoryPost.delete({
      where: {
        id,
      },
    })
  })
}
