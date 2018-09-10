import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './reducers'

const store = createStore(rootReducer)
console.log(store.getState());

store.subscribe( () => {
 console.log('[subscription]', store.getState())
})

store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'ADD', value: 10})
store.dispatch({type: 'ADD_TODO', text: 'Hello there'})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
