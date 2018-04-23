import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import {
  HomeScreen,
  ProfileScreen
} from './../containers';

export const AppNavigatorStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Profile: {
      screen: ProfileScreen
    }
  },
  {
    initialRouteName: 'Home',
  }
);

class AppNavigator extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {};
  }
  render() {
    return (
      <AppNavigatorStack/>
    );
  }
}

export default AppNavigator;
