import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { rootReducer } from './reducers';

// View action logging in browser console

let middleware: any[] = [];

if (process.env.NODE_ENV === 'dev') {
  const loggerOptions = { duration: true };
  middleware = [...middleware, createLogger(loggerOptions)];
}

export const store = createStore(rootReducer, applyMiddleware(...middleware));
