import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ToastAndroid, AsyncStorage, StyleSheet, View, Text, TextInput, Button } from 'react-native';

import { postLogin } from './../../actions/auth';

import styles from './styles';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    console.log('login did mount');
  }

  onSubmitLogin = async () => {
    const { postLogin } = this.props;
    const { userName, password } = this.state;

    let loginResult = await postLogin({userName: userName, password: password});
    
    if (loginResult && loginResult.success) {
      AsyncStorage.setItem('isLoggedIn', '1');
      AsyncStorage.setItem('login_token', loginResult.data.token, err => {
        console.log('err', err);
      });
      this.props.setUserLogin(true);
    } else if (loginResult.message) {
      ToastAndroid.showWithGravityAndOffset(
        loginResult.message,
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
        0,
        -300
      );
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <TextInput
          style={{flexDirection: 'row', alignSelf: 'stretch', height: 40}}
          placeholder="Type UserName"
          onChangeText={(userName) => this.setState({userName})}
        />
        <TextInput
          style={{flexDirection: 'row', alignSelf: 'stretch', height: 40}}
          placeholder="Type Password"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({password})}
        />
        <Button
          title='Submit'
          onPress={() => this.onSubmitLogin()}/>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postLogin:  bindActionCreators(postLogin, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);