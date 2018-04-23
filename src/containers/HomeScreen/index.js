import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';

import styles from './styles';
import { getHomeMenu } from './../../actions/home';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { getHomeMenu } = this.props;

    getHomeMenu();
  }

  render() {
    const { homeMenu } = this.props;

    return (
      <View style={styles.container}>
        <Text>{ homeMenu ? homeMenu.test : 'Home Screen'}</Text>
        <Button
          title="Go to Profile"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  title: 'Home',
  header: null
};

const mapStateToProps = (state) => {
  return {
    homeMenu: state.homeMenu
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getHomeMenu:  bindActionCreators(getHomeMenu, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);