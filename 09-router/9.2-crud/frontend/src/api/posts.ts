import type { Post } from '../types/post'

const BASE = 'http://localhost:7070'

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  // 204 No Content
  if (res.status === 204) return undefined as T
  return res.json() as Promise<T>
}

export const postsApi = {
  list: (): Promise<Post[]> =>
    request<Post[]>('/posts'),

  get: (id: number): Promise<{ post: Post }> =>
    request<{ post: Post }>(`/posts/${id}`),

  create: (content: string): Promise<void> =>
    request<void>('/posts', {
      method: 'POST',
      body: JSON.stringify({ id: 0, content }),
    }),

  update: (id: number, content: string): Promise<void> =>
    request<void>(`/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ id, content }),
    }),

  remove: (id: number): Promise<void> =>
    request<void>(`/posts/${id}`, { method: 'DELETE' }),
}
