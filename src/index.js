import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

const state = {
  counter: 0,
  logs: [],
};

const middlewares = [

];

const enhancers = [
  applyMiddleware(...middlewares),
];

// If Redux DevTools Extension is installed use it, otherwise use Redux compose
/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
/* eslint-enable */


const countReducer = (state = 0, action) => {
  switch(action.type){
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;
    default: return state;
  }
};


// const logsReducer = (state = 0, action) => {
//   switch(action.type){
//     case 'INCREMENT': return state + 1;
//     case 'DECREMENT': return state - 1;
//     default: return state;
//   }
// };

const rootReducer = combineReducers({
  counter: countReducer,
});

const store = createStore(
  rootReducer,
  {},
  composeEnhancers(...enhancers)
);
// const store = createStore(rootReducer);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
