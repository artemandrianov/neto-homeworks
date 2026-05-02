import useJsonFetch from "../hooks/useJsonFetch"

export const LoadingComponent = () => {
  const [data, loading, error] = useJsonFetch(import.meta.env.VITE_LOADING_URL)

  return (
    <div>
      <h3>Loading Component (5 sec delay)</h3>
      {loading ? (
        <p style={{ fontWeight: 'bold' }}>🔄 Загрузка данных...</p>
      ) : (
        data && <p>Done! Status: {data.status}</p>
      )}
      {error && <p>Error: {error.message}</p>}
    </div>
  )
}
