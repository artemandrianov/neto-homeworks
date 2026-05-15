import { ADD_ITEM, UPDATE_ITEM, REMOVE_ITEM, SET_EDIT_ITEM, CANCEL_EDIT, CHANGE_FILTER } from '../actions/types'
import type { Item } from '../types/types'

interface State {
  items: Item[]
  editingId: number | null
  filter: string
}

const initialState: State = {
  items: [
    { id: 1, name: 'Замена стекла', price: 21000 },
    { id: 2, name: 'Замена дисплея', price: 25000 },
  ],
  editingId: null,
  filter: ''
}

export default function itemReducer(state = initialState, action: any): State {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, { id: Date.now(), ...action.payload }]
      }

    case UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id ? { ...action.payload } : item
        ),
        editingId: null
      }

    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),

        editingId: state.editingId === action.payload ? null : state.editingId
      }

    case SET_EDIT_ITEM:
      return { ...state, editingId: action.payload }

    case CANCEL_EDIT:
      return { ...state, editingId: null }

    case CHANGE_FILTER:
      return { ...state, filter: action.payload }

    default:
      return state
  }
}