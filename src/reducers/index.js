import { combineReducers } from 'redux';

import { apiError } from './CommonReducer';
import { login } from './AuthReducer';
import { homeMenu } from './HomeReducer';

const appReducer = combineReducers({
  apiError,
  login,
  homeMenu
});

export default appReducer;