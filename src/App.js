import React, {Component} from 'react';
import { Provider } from 'react-redux';

import AppNavigator from './navigators';
import store from './store';
import { HomeScreen } from './containers';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    );
  }
}