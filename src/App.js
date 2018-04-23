import React, {Component} from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import AppWithNavigationState from './navigators/AppNavigator';
import store from './store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}