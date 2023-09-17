import fastify from "fastify"

const APP_PORT = 3333

const app = fastify()

app.get('/', () => {
  return 'Olá'
})

app.listen({
  port: APP_PORT,
}).then(() => {
  console.log("Server is running on port", APP_PORT)
})