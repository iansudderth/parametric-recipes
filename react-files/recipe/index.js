import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import App from './App';
import ReduxPromise from 'redux-promise'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


const Boiler = () => (
		<Provider
			store={createStoreWithMiddleware(reducers)}
		>
			<App />
		</Provider>
	);




export default Boiler
