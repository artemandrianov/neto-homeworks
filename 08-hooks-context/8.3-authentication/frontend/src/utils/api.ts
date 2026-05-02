export const apiRequest = async <T>(
  endpoint: string, 
  method: string, 
  body: any = null, 
  token: string | null = null
): Promise<T> => {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' }
  if (token) headers['Authorization'] = `Bearer ${token}`

  const response = await fetch(import.meta.env.VITE_BASE_URL + endpoint, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null
  })

  if (response.status === 401) {
    throw new Error('Unauthorized')
  }

  if (!response.ok) throw new Error('API Error')
  return response.json()
}