const counter = (state = {counter: 0}, action) => {
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

    default:
      return state
  }
}


export default counter
