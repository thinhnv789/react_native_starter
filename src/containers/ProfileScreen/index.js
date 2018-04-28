import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import styles from './styles';

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    console.log('profile screen did mount');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Profile Screen</Text>
      </View>
    );
  }
}

ProfileScreen.navigationOptions = {
  title: 'Profile'
};

export default ProfileScreen