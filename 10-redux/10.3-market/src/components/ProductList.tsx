import { useSelector } from 'react-redux'
import type { RootState } from '../store/index'
import './ProductList.css'

export const ProductList = () => {
  const products = useSelector((state: RootState) => state.catalog.items)

  return (
    <div className="product-list">
      {products.map(item => {
        const discount =
          item.oldPrice
            ? Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100)
            : null

        return (
          <div key={item.id} className="product-card">
            {discount && <div className="discount-badge">-{discount}%</div>}

            <img
              src={item.imageUrl}
              alt={item.title}
              className="product-image"
            />

            <div className="price-row">
              <span className="price">{item.price} ₽</span>
              {item.oldPrice && (
                <span className="old-price">{item.oldPrice} ₽</span>
              )}
            </div>

            <div className="product-title">{item.title}</div>
          </div>
        )
      })}
    </div>
  )
}