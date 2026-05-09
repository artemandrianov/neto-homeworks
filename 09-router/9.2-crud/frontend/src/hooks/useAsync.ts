import { useState, useEffect, useCallback } from 'react';

type AsyncState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success', data: T }
  | { status: 'error', error: string }

export function useAsync<T>(fn: () => Promise<T>, deps: unknown[] = []) {
  const [state, setState] = useState<AsyncState<T>>({ status: 'idle' })

  const run = useCallback(async () => {
    setState({ status: 'loading' })
    try {
      const data = await fn()
      setState({ status: 'success', data })
    } catch (e) {
      setState({ status: 'error', error: (e as Error).message })
    }
  }, deps)

  useEffect(() => { run() }, [run])

  return { state, refetch: run }
}
