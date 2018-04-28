import React from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-native-swiper';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';

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
    let swiperIndex = this.swiper.state.index;

    this.swiper.scrollBy(tabIndex - swiperIndex);
  }

  backTo = (screenIndex) => {
    this.setState({
      tabActive: screenIndex
    });
  }

  onMomentumScrollEnd = (e, state, context) => {
    this.setState({
      tabActive: state.index
    });
  }

  render() {
    const { tabList } = this.props;
    const { tabActive } = this.state;
    let screens = [];
    let currentTab = {};

    try {
      currentTab = tabList[tabActive];
    } catch (e) {

    }
    
    for (let i=0; i<tabList.length; i++) {
      if (i == tabActive) {
        screens.push(
          <View key={i} style={styles.container}>
            { currentTab.component }
          </View>
        )
      } else {
        screens.push(
          <View key={i}>
            {/* <Text>{tabList[i].header.title}</Text> */}
          </View>
        )
      }
    }
    
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#F5FCFF',
      }}>
        {
          currentTab && currentTab.header &&
          <View style={styles.header}>
            <Header
              title={currentTab.header.title}
              backIcon={currentTab.header.backIcon}
              backTo={this.backTo}
            />
          </View>
        }
        <Swiper
          ref={(swiper) => {this.swiper = swiper}}
          loop={false}
          showsPagination={false}
          index={tabActive}
          onMomentumScrollEnd ={this.onMomentumScrollEnd}>
            { screens }
        </Swiper>
        <View>
          <Button title='Logout' onPress={() => this.props.logout()} />
        </View>
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
