import useJsonFetch from "../hooks/useJsonFetch"

export const DataComponent = () => {
  const [data, loading, error] = useJsonFetch(import.meta.env.VITE_DATA_URL)

  return (
    <div>
      <h3>Data Component (Success)</h3>
      {loading && <p>Loading...</p>}
      {data && <p>Response: {data.status}</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  )
}