import React from 'react';
import {render} from 'react-dom'
import {Provider} from 'react-redux'
// import { createStore, applyMiddleware } from 'redux'
// import {composeWithDevTools} from 'redux-devtools-extension'
// import createLogger from 'redux-logger'
import './index.css';
// import rootReducer from './redux/reducers'
import App from './App';
// import search from './redux/reducers/search'
import store from './redux/store'
import registerServiceWorker from './registerServiceWorker';

// let store = createStore(
//   rootReducer,
//   composeWithDevTools(
//     applyMiddleware(
//       createLogger({ collapsed: true })
//     )
//   )
// )

render (
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root')
)

registerServiceWorker();
