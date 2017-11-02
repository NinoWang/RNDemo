/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import HomePage from './Components/HomePage'
import RNDetail from './Components/RNDetail'

import { Navigator } from 'react-native-deprecated-custom-components'
console.disableYellowBox = true
export default class RNDemo extends Component {
  render() {
    let defaultName = 'HomePage';
    let defaultComponent = HomePage
    return (
      <Navigator
        initialRoute={{ name: defaultName, component: defaultComponent }}
        configureScene={(route) => {
          return Navigator.SceneConfigs.PushFromRight;
        }}
        renderScene={(route, navigator) => {
          let Component = route.component;
          return <Component {...route.params} navigator={navigator} />
        }} />
      )
  }
}

AppRegistry.registerComponent('RNDemo', () => RNDemo);

AppRegistry.registerComponent('RNDetail', () => RNDetail)