import type { Product } from '../types/types'

export const ADD_PRODUCT = 'ADD_PRODUCT'

export const addProduct = (product: Omit<Product, 'id'>) => ({
  type: ADD_PRODUCT,
  payload: product,
})