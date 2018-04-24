import React from 'react';
import { View, Text, Button } from 'react-native';

import styles from './styles';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { title } = this.props;

        return (
            <View style={styles.container}>
                <Text>{title}</Text>
            </View>
        )
    }
}

Header.defaultProps = {
    title: 'Default',
    component: null
}

export default Header;