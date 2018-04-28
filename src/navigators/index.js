import React from 'react';
import { AsyncStorage } from 'react-native';

import UnAuthNavigator from './UnAuthNatigator';
import DefaultNavigator from './DefaultNavigator';
import {
    HomeScreen,
    ProfileScreen
} from './../containers';

class AppNavigator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false
        };

        this.tabList = [
            {
                title: 'Home',
                header: {
                    title: 'Home',
                    backIcon: null//'md-arrow-back'
                },
                component: <HomeScreen/>
            },
            {
                title: 'Profile',
                header: {
                    title: 'Profile',
                    backIcon: 'md-arrow-back'
                },
                component: <ProfileScreen/>
            }
        ];
        this.tabActive = 0;
    }

    async componentDidMount() {
        let isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
        
        if (isLoggedIn) {
            this.setState({
                isLoggedIn: true
            })
        }
    }

    setUserLogin = (value) => {
        this.setState({
            isLoggedIn: true
        });
    }

    logout = () => {
        this.setState({
            isLoggedIn: false
        });
        AsyncStorage.removeItem('isLoggedIn');
    }

    render() {
        const { theme } = this.props;
        const { tabActive, isLoggedIn } = this.state;

        /**
         * Navigator for user is logged in
         */
        if (isLoggedIn) {
            switch(theme) {
                case 1:
                    break;
                default:
                    return (
                        <DefaultNavigator
                            tabList={this.tabList}
                            tabActive={this.tabActive}
                            logout={this.logout}
                        />
                    )
            }
        } else {
            /**
             * Navigator for user isn't logged in
             */
            switch(theme) {
                default:
                    return (
                        <UnAuthNavigator
                            setUserLogin={this.setUserLogin}
                        />
                    )
            }
        }
    }
}

AppNavigator.defaultProps = {
    theme: 0
}

export default AppNavigator;