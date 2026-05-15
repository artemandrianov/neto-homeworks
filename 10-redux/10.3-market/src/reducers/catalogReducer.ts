import { ADD_PRODUCT } from '../actions/creators'
import type { CatalogState } from '../types/types'
import { mockProducts } from '../data/mockProducts'

const initialState: CatalogState = {
  items: mockProducts,
}

export default function catalogReducer(
  state = initialState,
  action: any
): CatalogState {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        items: [
          ...state.items,
          { id: Date.now(), ...action.payload }
        ]
      }

    default:
      return state
  }
}