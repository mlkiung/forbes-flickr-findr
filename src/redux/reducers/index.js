import { combineReducers } from 'redux'
import search from './search'
import images from './images'

const rootReducer = combineReducers({ search, images })

export default rootReducer
