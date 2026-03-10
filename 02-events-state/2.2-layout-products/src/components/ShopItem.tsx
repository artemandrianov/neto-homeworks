import type { Product } from '../types/types'

interface ShopItemProps {
  item: Product
}

export function ShopItem({ item }: ShopItemProps) {
  return (
    <div className="shop-item">
      <img src={item.img} className="shop-item-img" alt={item.name} />
      <h3 className="shop-item-title">{item.name}</h3>
      <p className="shop-item-color">{item.color}</p>
      <p className="shop-item-price">${item.price}</p>
      <button className="add-to-cart-btn">ADD TO CART</button>
    </div>
  )
}