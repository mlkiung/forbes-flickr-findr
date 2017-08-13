import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
// import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
// import { hasSearchHappened } from '../utils'

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      createLogger({ collapsed: true })
    )
  )
)

// store.subscribe(() => hasSearchHappened())

export default store
