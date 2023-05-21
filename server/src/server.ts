import 'dotenv/config'
import fastify from 'fastify'
import jwt from '@fastify/jwt'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'
import multipart from '@fastify/multipart'
import { uploadRoutes } from './routes/upload'
import { resolve } from 'node:path'
const app = fastify()

app.register(multipart)

app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})

app.register(cors, {
  origin: true, // Tds urls front-end poderam acessar o back-end
})
app.register(jwt, {
  secret: 'spacetime',
})

app.register(uploadRoutes)
app.register(memoriesRoutes)
app.register(authRoutes)
app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('Server rodando em localhost:3333 👌')
  })
