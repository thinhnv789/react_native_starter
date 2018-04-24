import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

import styles from './styles';

class BottomBar extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextStates) {
        if (nextProps.tabActive !== this.props.tabActive) {
            return true;
        }
        return false;
    }

    onTabClick = (tabIndex) => {
        if (tabIndex !== this.props.tabActive) {
            this.props.onTabClick(tabIndex);
        }
    }

    render() {
        const { tabList, tabActive } = this.props;
        let tabEls = [];
        
        try {
            for (let i=0; i<tabList.length; i++) {
                let tab = tabList[i];

                if (i === tabActive) {
                    tabEls.push(
                        <TouchableOpacity
                            key={`tab_${i}`}
                            style={styles.tabItemActive}
                            onPress={() => this.onTabClick(i)} >
                            <Text>{tab.title}</Text>
                        </TouchableOpacity>
                    )
                } else {
                    tabEls.push(
                        <TouchableOpacity
                            key={`tab_${i}`}
                            style={styles.tabItem}
                            onPress={() => this.onTabClick(i)} >
                            <Text>{tab.title}</Text>
                        </TouchableOpacity>
                    )
                }
            }
        } catch (e) {
            console.log(e);
        }

        return (
            <View style={styles.container}>
                { tabEls }
            </View>
        )
    }
}

BottomBar.defaultProps = {
    tabList: [
        {
            title: 'Bottom Tab1'
        }
    ],
    tabActive: 0,
    onTabClick: () => {console.log('default tab click')}
}

export default BottomBar;