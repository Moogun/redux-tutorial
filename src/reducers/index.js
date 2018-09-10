const initialState = {
 counter: 0,
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

export default rootReducer
