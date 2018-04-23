import { combineReducers } from 'redux';

import { homeMenu } from './HomeReducer';

const appReducer = combineReducers({
  homeMenu
});

export default appReducer;