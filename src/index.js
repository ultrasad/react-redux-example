import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './header';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'

import rootReducer from './reducers';

import * as serviceWorker from './serviceWorker';

/*
const myLogger = (store) => (next) => (action) => {
    console.log('log action store...' + store);
    next(action);
}
*/

const store = createStore(rootReducer, {}, applyMiddleware(logger));

const MyApp = () => (
    <Provider store={store}>
      <Header />
      <App />
    </Provider>
)

ReactDOM.render(<MyApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();