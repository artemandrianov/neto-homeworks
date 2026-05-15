import { ProductList } from './components/ProductList'

export function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Приглядитесь к этим предложениям</h1>
      <ProductList />
    </div>
  )
}