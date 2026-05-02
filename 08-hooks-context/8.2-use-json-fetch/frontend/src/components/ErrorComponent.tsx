import useJsonFetch from "../hooks/useJsonFetch"

export const ErrorComponent = () => {
  const [data, loading, error] = useJsonFetch(import.meta.env.VITE_ERROR_URL)

  return (
    <div>
      <h3>Error Component (500)</h3>
      {loading && <p>Loading...</p>}
      {data && <p>Response: {data.status}</p>}
      {error && <p style={{ color: 'red' }}>{error.message}</p>}
    </div>
  )
}