import React from 'react';

import {
    LoginScreen
} from './../../containers';

class UnAuthNavigator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    setUserLogin = (value) => {
        this.props.setUserLogin(value);
    }

    render() {
        return (
            <LoginScreen
                setUserLogin={this.setUserLogin}
            />
        )
    }
}

export default UnAuthNavigator;