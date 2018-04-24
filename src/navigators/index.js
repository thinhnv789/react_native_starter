import React from 'react';

import DefaultNavigator from './DefaultNavigator';
import {
    HomeScreen,
    ProfileScreen
} from './../containers';

class AppNavigator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
           
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
            },
        ];
        this.tabActive = 0;
    }

    render() {
        const { theme } = this.props;
        const { tabActive } = this.state;

        switch(theme) {
            case 1:
                break;
            default:
                return (
                    <DefaultNavigator
                        tabList={this.tabList}
                        tabActive={this.tabActive}
                    />
                )
        }
    }
}

export default AppNavigator;