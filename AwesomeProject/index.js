/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import { createAppContainer } from "react-navigation";
import { AppStackNavigator} from './navigators/AppNaigators'
import {name as appName} from './app.json'
const AppNavigatorContainer = createAppContainer(AppStackNavigator)
AppRegistry.registerComponent(appName, () => AppNavigatorContainer)