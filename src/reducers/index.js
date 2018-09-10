import { combineReducers } from 'redux'

const initialState = {
 counter: 0,
 todos: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        // counter: state.counter + 1
        ...state,
        counter: state.counter + 1
      }
    case 'ADD':
      return {
        // counter: state.counter + action.value
        ...state,
        counter: state.counter + action.value
      }
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text
          }
        ]
      })
    default:
      return state

  }
}

export default rootReducer
