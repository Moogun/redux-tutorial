const redux = require('redux')
const { createStore } = redux

// const store = createStore()
// const rootReducer = (state, action) => {}
// console.log(store.getState());

const initialState = {
 counter: 0
}

const rootReducer = (state = initialState, action) => {

 if (action.type === 'INCREMENT') {
   return {
     // counter: state.counter + 1
     ...state,
     counter: state.counter + 1
   }
 } else if (action.type === 'ADD') {
   return {
     // counter: state.counter + action.value
     ...state,
     counter: state.counter + action.value
   }
 }

 return state
}

const store = createStore(rootReducer)
console.log(store.getState());

store.subscribe( () => {
 console.log('[subscription]', store.getState())
})

store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'ADD', value: 10})
console.log(store.getState())

// store.subscribe( () => {
//   console.log('[subscription]', store.getState())
// })
