import { legacy_createStore as createStore, combineReducers } from 'redux'
import catalogReducer from '../reducers/catalogReducer'

const rootReducer = combineReducers({
  catalog: catalogReducer,
})

const store = createStore(rootReducer)

export default store
export type RootState = ReturnType<typeof rootReducer>