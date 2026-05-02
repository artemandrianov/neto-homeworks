export interface UserProfile {
  id: string
  name: string
  avatar: string
}

export interface NewsItem {
  id: string
  title: string
  image: string
  content: string
}

export interface AuthResponse {
  token: string
}