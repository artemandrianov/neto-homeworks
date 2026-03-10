import type { Product } from '../types/types'

interface ShopCardProps {
  product: Product
}

export function ShopCard({ product }: ShopCardProps) {
  return (
    <div className="shop-card">
      <img src={product.img} className="shop-card-img" alt={product.name} />
      <h3 className="shop-card-title">{product.name}</h3>
      <p className="shop-card-color">{product.color}</p>
      <p className="shop-card-price">${product.price}</p>
      <button className="add-to-cart-btn">ADD TO CART</button>
    </div>
  )
}