const initialState = []

const images = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_IMAGES':
      return { ...state, images: action.imgUrls }
    default:
      return state
  }
}

export default images
