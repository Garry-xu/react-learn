/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Button, Text, View} from 'react-native';

type Props = {};
export default class Home extends Component<Props> {
  static navigationOptions = {
    title: '首页'
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Home</Text>
        <Button onPress={() => { navigation.navigate("forumPage", {name: '动态'})}} title={'Go To forumPage'}/>
        <Button onPress={() => { navigation.navigate("MessagePage")}} title={'Go To MessagePage'}/>
        <Button onPress={() => { navigation.navigate("Friends", { mode: 'Devio'})}} title={'Go To Friends'}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'red',
    margin: 10,
  }
});
