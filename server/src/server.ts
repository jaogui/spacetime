import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

app.get('/users', async () => {
  const users = await prisma.user.findMany()

  return users
})
// Inicializando Server na porta 3333
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server rodando em localhost:3333 👌')
  })
