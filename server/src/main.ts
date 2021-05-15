import express from 'express'

const server = express()
const PORT = 3100

server.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT} in ${process.env.NODE_ENV.toUpperCase()} mode.`)
})