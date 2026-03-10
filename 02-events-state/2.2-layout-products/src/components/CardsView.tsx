import type { Product } from '../types/types'
import { ShopCard } from './ShopCard'

interface CardsViewProps {
  cards: Product[]
}

export function CardsView({ cards }: CardsViewProps) {
  return (
    <div className="cards-view">
      {cards.map((card) => (
        <ShopCard key={card.name} product={card} />
      ))}
    </div>
  )
}