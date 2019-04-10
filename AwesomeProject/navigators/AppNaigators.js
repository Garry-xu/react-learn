import {createStackNavigator} from "react-navigation";
import React from 'react';
import { Button, Text } from 'react-native';
import Home from '../view/Home'
import MessagePage from '../view/MessagePage'
import MyAccount from '../view/MyAccount'
import Friends from '../view/Friends'
import forumPage from '../view/forumPage'
// import servicePage from '../view/servicePage'
export const AppStackNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  forumPage: {
    screen: forumPage,
    navigationOptions:({navigation})=>({
      title: `${navigation.state.params.name} 页面`,
      headerTitleStyle: {
        flex:1, textAlign: 'center'
      },
      headerRight: (
        <Button title={'设置'}/>
      ),
      headerBackTitle: 'A much too lon',
      headerTruncatedBackTitle: `to A`,
    })
  },
  MessagePage: {
    screen: MessagePage,
    navigationOptions: { // 静态配置
      title: '消息页面',
      headerTitleStyle: {
        flex:1, textAlign: 'center'
      },
      headerBackTitle: 'A much too lon',
      headerTruncatedBackTitle: `to A`,
      headerRight: (
        <Text></Text>
      ),
    }
  },
  Friends: {
    screen: Friends,
    navigationOptions: (props) => {
      const { navigation } = props;
      const { state, setParams } = navigation;
      const {params} = state
      return {
        title: params.title ? params.title : '好友列表',
        headerRight: (
          <Button
            title={params.mode === 'edit' ? '保存' : '编辑'}
            onPress={() => setParams({mode: params.mode === 'edit' ? '' : 'edit'})}
          />
        ),
        headerTitleStyle: {
          flex:1, textAlign: 'center'
        }
      }
    }
  },
  MyAccount: {
    screen: MyAccount,
    navigationOptions: {
      title: '我的账户',
      headerTitleStyle: {
        flex:1, textAlign: 'center'
      },
      headerRight: (
        <Text></Text>
      ),
    }
  }
})
