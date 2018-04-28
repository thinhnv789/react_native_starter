import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { ToastAndroid, View, Text, Button } from 'react-native';

import { getHomeMenu } from './../../actions/home';
import { getLogout } from './../../actions/auth';

import styles from './styles';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { getHomeMenu } = this.props;
  
    getHomeMenu();
    
    // const socket = io('http://192.168.42.51:8008');
    // socket.on('connect', function(){
    //   console.log('socket connected')
    // });
    // socket.on('event', function(data){});
    // socket.on('disconnect', function(){
    //   console.log('socket disconnected')
    // });
  }

  logout = async () => {
    const { getLogout } = this.props;
    let logoutResult = await getLogout();
    console.log('logoutResult', logoutResult);
  }

  render() {
    const { homeMenu } = this.props;

    return (
      <View style={styles.container}>
        <Text>{ homeMenu ? homeMenu.test : 'Home Screen'}</Text>
        <Button title='Logout' onPress={() => this.logout()} />
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
    getHomeMenu:  bindActionCreators(getHomeMenu, dispatch),
    getLogout:  bindActionCreators(getLogout, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);