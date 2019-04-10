/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform,TextInput, Button, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class Friends extends Component<Props> {
  render() {
    const { navigation } = this.props;
    const { state, setParams} = navigation
    const {params} = state
    const showText = params && params.mode === 'edit' ? '正在编辑' : '编辑完成'
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Friends</Text>
        <Text style={styles.welcome}>{showText}</Text>
        <TextInput
          style={{height: 40, marginTop: 10,borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => {
            setParams({title: text})
          }}
        />
        {/* <Button
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
        /> */}
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
