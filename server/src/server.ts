import fastify from "fastify"

import { getAllPromptsRoute } from "./routes/getAllPrompts"
import { uploadVideoRoute } from "./routes/uploadVideo"

const APP_PORT = 3333

const app = fastify()

app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)

app.listen({
  port: APP_PORT,
}).then(() => {
  console.log("Server is running on port", APP_PORT)
})