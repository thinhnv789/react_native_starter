import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    shouldComponentUpdate(nextProps, nextStates) {
        if (nextProps.title !== this.props.title || nextProps.backIcon !== this.props.backIcon) {
            return true;
        }
        return false;
    }

    onBackTo = (screenIndex) => {
        this.props.backTo(screenIndex);
    }

    render() {
        const { title, backIcon } = this.props;

        return (
            <View style={styles.container}>
                {
                    backIcon &&
                    <TouchableOpacity
                        style={styles.backItem}
                        onPress={() => this.onBackTo(0)} >
                        <Icon size={20} name={backIcon} style={styles.iconColor} />
                    </TouchableOpacity>
                }
                <Text style={styles.title}>{title}</Text>
            </View>
        )
    }
}

Header.defaultProps = {
    title: 'Default',
    backIcon: 'md-arrow-back',
    backTo: () => {}
}

export default Header;