import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import AppReducer from './../reducers';
import { middleware } from './../utils/redux';

const store = createStore(
    AppReducer,
    applyMiddleware(middleware, thunk, logger)
);
export default store;