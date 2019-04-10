/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>你好</Text>
        <Text style={styles.welcome}>你好</Text>
        <Text style={styles.welcome}>你好</Text>
        <Text style={styles.welcome}>你好</Text>
        {/* <Text style={styles.instructions}>To get started, edit App.js</Text> */}
        {/* <Text style={styles.instructions}>{instructions}</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 500,
    backgroundColor: '#e5e5e5',
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    flex: 1,
    backgroundColor: 'red',
    margin: 10,
  },
  instructions: {
    flex: 0,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
