const search  = (state = [], action) => {
  switch (action.type) {
    case 'NEW_SEARCH':
      return [
        ...state, {
          searchTerm: action.searchTerm
        }
      ]
    // case 'TOGGLE_TODO':
    //   return state.map(todo => (todo.id === action.id)
    //     ? {
    //       ...todo,
    //       completed: !todo.completed
    //     }
    //     : todo)
    default:
      return state
  }
}

export default search
