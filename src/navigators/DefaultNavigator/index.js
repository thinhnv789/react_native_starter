import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';

import Header from './Header';
import BottomBar from './BottomBar';

import styles from './styles';

class DefaultNavigator extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tabActive: this.props.tabActive || 0
    };
  }

  onTabClick = (tabIndex) => {
    this.setState({
      tabActive: tabIndex
    });
  }

  backTo = (screenIndex) => {
    this.setState({
      tabActive: screenIndex
    });
  }

  render() {
    const { tabList } = this.props;
    const { tabActive } = this.state;
    let currentTab = {};
    try {
      currentTab = tabList[tabActive];
    } catch (e) {

    }
    
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      }}>
        <View style={styles.header}>
          {
            currentTab && currentTab.header &&
            <Header
              title={currentTab.header.title}
              backIcon={currentTab.header.backIcon}
              backTo={this.backTo}
            />
          }
        </View>
        {
          currentTab && currentTab.component &&
          <View style={styles.container}>
            { currentTab.component }
          </View>
        }
        <View style={styles.footer}>
          <BottomBar
            tabList={tabList}
            tabActive={tabActive}
            onTabClick={this.onTabClick}
          />
        </View>
      </View>
    );
  }
}

DefaultNavigator.defaultProps = {
  tabList: [
    {
      title: 'Bottom Tab1'
    }
  ],
  tabActive: 0
}

export default DefaultNavigator;
