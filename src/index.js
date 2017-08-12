import React from 'react';
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import './index.css';
import flickrFindr from './redux/reducers'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(flickrFindr)

render (
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root')
)

registerServiceWorker();
