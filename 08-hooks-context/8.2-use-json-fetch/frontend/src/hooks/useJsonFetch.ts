import { useState, useEffect, useRef } from 'react'

export default function useJsonFetch(url: string, opts: RequestInit = {}) {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  const optionsRef = useRef(opts)

  useEffect(() => {
    let isMounted = true

    const fetchData = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(url, optionsRef.current)

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`)
        }

        const jsonData = await response.json()

        if (isMounted) {
          setData(jsonData)
        }
      } catch (e) {
        if (isMounted) {
          setError(e instanceof Error ? e : new Error(String(e)))
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchData()

    return () => {
      isMounted = false
    }
  }, [url])
  return [data, loading, error] as const
}