import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'

import { createStore, compose } from 'redux';

import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';

import rootReducer from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';

const Store = (initialState) => {
  const enhancers = compose(
    window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  );
  return createStore(rootReducer, initialState, enhancers);
}

const StoreInstance = Store({});

ReactDOM.render((
  <Provider store={StoreInstance}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

serviceWorker.unregister();
