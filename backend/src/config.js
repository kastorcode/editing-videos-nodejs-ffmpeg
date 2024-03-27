export const FFMPEG_FLAGS = [
  '-i', 'pipe:0',
  '-f', 'mp4',
  '-vcodec', 'h264',
  '-acodec', 'aac',
  '-movflags', 'frag_keyframe+empty_moov+default_base_moof',
  '-b:v', '1500k',
  '-maxrate', '1500k',
  '-bufsize', '1000k',
  '-f', 'mp4',
  '-vf', 'drawtext=fontfile=Ubuntu:text=<kastor.code/>:x=w-tw-13:y=13:fontsize=13:fontcolor=#000000:alpha=0.5',
  'pipe:1'
]

export const HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': '*'
}

export const PORT = 3000

export const VIDEO_NAME = 'output.mp4'