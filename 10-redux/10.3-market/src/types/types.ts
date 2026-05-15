export type Product = {
  id: number
  title: string
  price: number
  oldPrice?: number
  imageUrl: string
}

export interface CatalogState {
  items: Product[]
}