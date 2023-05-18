import 'dotenv/config'
import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'
const app = fastify()

app.register(cors, {
  origin: true, // Tds urls front-end poderam acessar o back-end
})
app.register(memoriesRoutes)
app.register(authRoutes)
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server rodando em localhost:3333 👌')
  })
