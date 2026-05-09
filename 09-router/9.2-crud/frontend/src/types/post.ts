export interface Post {
  id: number
  content: string
  created: number
}

export type PostDraft = Pick<Post, 'content'>
