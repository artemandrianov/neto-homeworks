import type { Product } from '../types/types'
import { ShopItem } from './ShopItem'

interface ListViewProps {
  items: Product[]
}

export function ListView({ items }: ListViewProps) {
  return (
    <div className="list-view">
      {items.map((item, index) => (
        <ShopItem key={index} item={item} />
      ))}
    </div>
  )
}