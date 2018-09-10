import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

const initialState = {
 counter: 0
}

const rootReducer = (state = initialState, action) => {

 if (action.type === 'INCREMENT') {
   return {
     // counter: state.counter + 1
     ...state,
     counter: state.counter + 1
   }
 } else if (action.type === 'ADD') {
   return {
     // counter: state.counter + action.value
     ...state,
     counter: state.counter + action.value
   }
 }

 return state
}

const store = createStore(rootReducer)
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
