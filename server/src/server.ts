import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'
const app = fastify()

app.register(cors, {
  origin: true, // Tds urls front-end poderam acessar o back-end
})
app.register(memoriesRoutes)
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server rodando em localhost:3333 👌')
  })
