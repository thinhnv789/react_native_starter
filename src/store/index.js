import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import AppReducer from './../reducers';

const store = createStore(
    AppReducer,
    applyMiddleware(thunk, logger)
);
export default store;