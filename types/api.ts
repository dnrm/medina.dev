export interface EmailRequest {
  address: string
  emailContent: string
}

export interface EmailResponse {
  message?: any
  error?: any
}

export interface SpotifyTrack {
  isPlaying: boolean
  album?: string
  albumImageUrl?: string
  artist?: string
  songUrl?: string
  title?: string
}
