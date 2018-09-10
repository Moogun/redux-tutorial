const addTodo = (state = {todos: []}, action) => {
  switch (action.type) {
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

export default addTodo
