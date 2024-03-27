import { spawn } from 'node:child_process'
import { createReadStream } from 'node:fs'
import { dirname, join } from 'node:path'

import { FFMPEG_FLAGS, VIDEO_NAME } from './config.js'


const { pathname } = new URL(import.meta.url)
const __dirname = dirname(pathname)


/**
 * @param {IncomingMessage} request 
 * @param {ServerResponse<IncomingMessage>} response 
 */
export default function ffmpeg (request, response) {
  response.writeHead(200, {
    'Content-Type': 'video/mp4'
  })
  const ffmpegProcess = spawn('ffmpeg', FFMPEG_FLAGS, {
    stdio: ['pipe', 'pipe', 'pipe']
  })
  createReadStream(join(__dirname, '..', 'videos', VIDEO_NAME))
    .pipe(ffmpegProcess.stdin)
  ffmpegProcess.stderr.on('data', chunk => console.error(chunk.toString()))
  ffmpegProcess.stdout.pipe(response)
  request.on('close', () => {
    ffmpegProcess.stdin.destroy()
    ffmpegProcess.stdout.destroy()
    console.log('client disconnected', ffmpegProcess.kill())
  })
}