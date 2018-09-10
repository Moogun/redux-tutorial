import { combineReducers } from 'redux'
import counter from './counter'
import addTodo from './addTodo'

const rootReducer = combineReducers({
  counter,
  addTodo
})

export default rootReducer
