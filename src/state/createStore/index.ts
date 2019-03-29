import { createStore, applyMiddleware, compose, Action } from 'redux';
import { createLogger } from 'redux-logger';

// todo: IMPORT REDUCES

// todo: IMPORT EPICS

const loggerOptions = { duration: true };
// View action logging in browser console
const logger = createLogger(loggerOptions);

const middleware: any[] = [];

const store = createStore();
