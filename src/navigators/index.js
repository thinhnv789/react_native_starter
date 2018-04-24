import React from 'react';

import DefaultNavigator from './DefaultNavigator';
import {
    HomeScreen,
    ProfileScreen
} from './../containers';

class AppNavigator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.tabList = [
            {
                title: 'Home',
                header: {
                    component: null,
                    title: 'Home'
                },
                component: <HomeScreen/>
            },
            {
                title: 'Profile',
                header: {
                    component: null,
                    title: 'Profile'
                },
                component: <ProfileScreen/>
            },
        ]
    }

    render() {
        const { theme } = this.props;
        switch(theme) {
            case 1:
                break;
            default:
                return (
                    <DefaultNavigator
                        tabList={this.tabList}
                        tabActive={0}
                    />
                )
        }
    }
}

export default AppNavigator;