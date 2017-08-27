import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import App from './App';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const Boiler = () =>
  (<div>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
    </Provider>
  </div>);

export default Boiler;
