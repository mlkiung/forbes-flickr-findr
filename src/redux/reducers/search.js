// import store from '../store'

const initialState = {}

const search = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_SEARCH':
      return { ...state, searchTerm: action.searchTerm }
    default:
      return state
  }
}

export default search
