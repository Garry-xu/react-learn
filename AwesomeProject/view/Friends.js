/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, Button, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class Friends extends Component<Props> {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Friends</Text>
        <Button
          onPress={() => {
            navigation.goBack();
          }}
          title={'Go Back'}
        />
        <Button
          onPress={() => {
            navigation.navigate("MyAccount");
          }}
          title={'MyAccount'}
        />
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
