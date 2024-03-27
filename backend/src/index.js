import { createServer } from 'node:http'

import { HEADERS, PORT } from './config.js'
import ffmpeg from './ffmpeg.js'


createServer((request, response) => {
  if (request.method === 'OPTIONS') {
    response.writeHead(204, HEADERS)
    response.end()
    return
  }
  ffmpeg(request, response)
})
  .listen(PORT, () => console.log(`server is running at ${PORT}`))