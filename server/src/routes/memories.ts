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
  app.post('/memories', async () => {})
  // Atualiza Memoria
  app.put('/memories:id', async () => {})
  // Remove MemorIa
  app.delete('/memories:id', async () => {})
}
