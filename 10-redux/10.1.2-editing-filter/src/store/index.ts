import { legacy_createStore as createStore, combineReducers } from 'redux'
import itemReducer from '../reducers/itemReducer'

const rootReducer = combineReducers({
  list: itemReducer
})

const store = createStore(rootReducer)

export default store