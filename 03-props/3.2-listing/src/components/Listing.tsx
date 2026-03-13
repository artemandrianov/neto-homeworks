interface MainImage {
  url_570xN: string
}

export interface ListingItem {
  listing_id: number
  url: string
  MainImage?: MainImage
  title?: string
  currency_code?: string
  price?: string
  quantity?: number
}

interface ListingProps {
  items?: ListingItem[]
}

export const Listing = ({ items = [] }: ListingProps) => {
  return (
    <div className="item-list">
      {items.map((item) => {
        if (!item.listing_id || !item.MainImage || !item.title) {
          return null
        }

        const {
          listing_id,
          url,
          MainImage,
          title,
          currency_code,
          price,
          quantity = 0,
        } = item

        const displayTitle = title.length > 50
          ? `${title.substring(0, 50)}...`
          : title

        let displayPrice: string
        if (currency_code === 'USD') {
          displayPrice = `$${price}`
        } else if (currency_code === 'EUR') {
          displayPrice = `€${price}`
        } else {
          displayPrice = `${price} ${currency_code}`
        }

        let quantityClass: string
        if (quantity <= 10) {
          quantityClass = 'level-low'
        } else if (quantity <= 20) {
          quantityClass = 'level-medium'
        } else {
          quantityClass = 'level-high'
        }

        return (
          <div className="item" key={listing_id}>
            <div className="item-image">
              <a href={url}>
                <img src={MainImage.url_570xN} alt={displayTitle} />
              </a>
            </div>
            <div className="item-details">
              <p className="item-title">{displayTitle}</p>
              <p className="item-price">{displayPrice}</p>
              <p className={`item-quantity ${quantityClass}`}>{quantity} left</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}