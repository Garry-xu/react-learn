/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import FlatlistDemo from './view/FlatlistDemo'
import SwipeableFlatlistDemo from './view/SwipeableFlatlistDemo'
import SectionListDemo from './view/SectionListDemo'
import {name as appName} from './app.json';
import { createStackNavigator, createAppContainer } from 'react-navigation'
const AppRoot = createStackNavigator({
  App: {
    screen: App,
  },
  FlatlistDemo: {
    screen: FlatlistDemo,
    navigationOptions: {
      title: 'FlatlistDemo'
    }
  },
  SwipeableFlatlistDemo: {
    screen: SwipeableFlatlistDemo,
    navigationOptions: {
      title: 'SwipeableFlatlistDemo'
    }
  },
  SectionListDemo: {
    screen: SectionListDemo,
    navigationOptions: {
      title: 'SectionListDemo'
    }
  }
})
const AppView = createAppContainer(AppRoot)
AppRegistry.registerComponent(appName, () => AppView);
