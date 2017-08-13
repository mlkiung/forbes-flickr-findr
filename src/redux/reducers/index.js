import {combineReducers} from 'redux'
import search from './search'
import images from './images'
// import store from '../store'

const rootReducer = combineReducers({ search, images })

export default rootReducer
