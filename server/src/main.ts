import express from 'express'
import IssuesRouter from './routes/IssuesRouter'
import cors from 'cors'

const server = express()
const PORT = 3100

// Use body parser
server.use(express.json())

// CORS
server.use(cors())

server.use('/', IssuesRouter)

// For any other route than defined above, send 404 Not found
server.use('/*', (req, res) => {
  res.status(404).json({
    success: false,
    msg: 'Not found!'
  })
})

server.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT} in ${process.env.NODE_ENV.toUpperCase()} mode.`)
})