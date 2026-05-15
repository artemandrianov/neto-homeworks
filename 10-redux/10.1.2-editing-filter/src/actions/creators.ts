import { ADD_ITEM, UPDATE_ITEM, REMOVE_ITEM, SET_EDIT_ITEM, CANCEL_EDIT, CHANGE_FILTER } from './types'

export const addItem = (name: string, price: number) => ({
  type: ADD_ITEM,
  payload: { name, price }
})
  
export const updateItem = (id: number, name: string, price: number) => ({
  type: UPDATE_ITEM,
  payload: { id, name, price }
})

export const removeItem = (id: number) => ({
  type: REMOVE_ITEM,
  payload: id
})

export const setEditItem = (id: number) => ({
  type: SET_EDIT_ITEM,
  payload: id
})

export const cancelEdit = () => ({
  type: CANCEL_EDIT
})

export const changeFilter = (filterText: string) => ({
  type: CHANGE_FILTER,
  payload: filterText
})