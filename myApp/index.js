/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import { createAppContainer } from "react-navigation";
// AppStackNavigator
import AppNavigator from './navigators/AppNaigators'
import {name as appName} from './app.json';
const AppNavigatorContainer = createAppContainer(AppNavigator)
AppRegistry.registerComponent(appName, () => AppNavigatorContainer);
