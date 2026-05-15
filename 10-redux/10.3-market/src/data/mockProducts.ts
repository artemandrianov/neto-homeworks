import type { CatalogState } from '../types/types'

export const mockProducts: CatalogState['items'] = [
  {
    id: 1,
    title: 'Ирригатор B.Well WI-911',
    price: 2019,
    oldPrice: 2770,
    imageUrl: 'https://loremflickr.com/200/200/irrigator'
  },
  {
    id: 2,
    title: 'Конструктор LEGO Hidden Side',
    price: 5690,
    oldPrice: 5966,
    imageUrl: 'https://loremflickr.com/200/200/lego'
  },
  {
    id: 3,
    title: 'Ирригатор B.Well WI-912',
    price: 2719,
    oldPrice: 2990,
    imageUrl: 'https://loremflickr.com/200/200/dental'
  },
  {
    id: 4,
    title: 'Ирригатор B.Well WI-911 Compact',
    price: 2689,
    imageUrl: 'https://loremflickr.com/200/200/health'
  },
  {
    id: 5,
    title: 'Конструктор LEGO City 60228',
    price: 4795,
    imageUrl: 'https://loremflickr.com/200/200/toy'
  }
]