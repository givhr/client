import { rootReducer } from './reducers';
import { createLogger } from 'redux-logger';
import { createStore as reduxCreateStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// View action logging in browser console

let middleware: any[] = [];
let composeEnhancer = compose;

if (process.env.NODE_ENV === 'dev') {
  composeEnhancer = composeWithDevTools({});
  const loggerOptions = { duration: true };
  middleware = [...middleware, createLogger(loggerOptions)];
}

const createStore = () => reduxCreateStore(rootReducer, composeEnhancer(applyMiddleware(...middleware)));
export default createStore;
