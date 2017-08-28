import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';
import App from './App';

const store = createStore(reducers, composeWithDevTools(applyMiddleware()));

const Boiler = () =>
  (<div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>);

export default Boiler;
