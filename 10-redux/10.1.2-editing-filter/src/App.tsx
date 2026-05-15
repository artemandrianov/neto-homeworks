import AddItemForm from './components/AddItemForm'
import ItemList from './components/ItemList'
import Filter from './components/Filter'

export function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Управление услугами</h1>
      <Filter />
      <AddItemForm />
      <hr />
      <ItemList />
    </div>
  )
}