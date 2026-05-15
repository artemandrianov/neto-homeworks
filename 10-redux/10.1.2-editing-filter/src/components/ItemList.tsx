import { useSelector } from 'react-redux'
import Item from './Item'
import type { Item as ItemType } from '../types/types'

export default function ItemList() {
  const { items, filter } = useSelector((state: any) => state.list)

  const filteredItems = items.filter((item: ItemType) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <ul>
      {filteredItems.map((el: ItemType) => (
        <Item key={el.id} element={el} />
      ))}
    </ul>
  )
}