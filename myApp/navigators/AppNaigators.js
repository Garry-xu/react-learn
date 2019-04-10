import {
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createDrawerNavigator,
  DrawerItems,
  SafeAreaView,
  createSwitchNavigator
} from "react-navigation";
import React from 'react';
import {Platform, StyleSheet, Button, Text, ScrollView } from 'react-native';
import Home from '../view/Home'
import MessagePage from '../view/MessagePage'
import MyAccount from '../view/MyAccount'
import Friends from '../view/Friends'
import forumPage from '../view/forumPage'
import login from '../view/login'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// import servicePage from '../view/servicePage'
const AppStack = createStackNavigator(
  { 
    home: {
      screen: Home
    },
    forumPage: {
      screen: forumPage
    }
  }
);
const AuthStack = createStackNavigator(
  {
    login: {
      screen: login
    }
  },
  {
    navigationOptions: {
    }
  }
);
export default createSwitchNavigator(
  {
    // AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  }
)
const DrawerNav = createDrawerNavigator(
  {
    MessagePage: {
      screen: MessagePage,
      navigationOptions: {
        drawerLabel: '收藏',
        drawerIcon: ({focused, tintColor}) => (
          <MaterialCommunityIconsIcon name={`folder-multiple${focused ? '' : '-outline'}`} size={24} color={tintColor}/>
        )
      }
    },
    Friends: {
      screen: Friends,
      navigationOptions: {
        drawerLabel: '我的',
        drawerIcon: ({focused, tintColor}) => (
          <MaterialCommunityIconsIcon name={`account-circle${focused ? '' : '-outline'}`} size={24} color={tintColor}/>
        )
      }
    }
  },
  {
    initialRouteName: 'MessagePage',
    contentOptions: {
      activeTintColor: '#e91e63',
      showIcon: true,
    },
    
    contentComponent: (props) => (
      <ScrollView style={{backgroundColor: '#f5f5f5',flex: 1}}>
        <SafeAreaView forceInset={{top: 'always', horizontal: 'never'}}>
          <DrawerItems {...props} />
        </SafeAreaView>
      </ScrollView>
    )
  }
)

const AppTopNavigator = createMaterialTopTabNavigator(
  {
    MyAccount: {
      screen: MyAccount,
      navigationOptions: {
        tabBarLabel: 'All'
      }
    },
    MessagePage: {
      screen: MessagePage,
      navigationOptions: {
        tabBarLabel: 'Ios'
      }
    },
    forumPage: {
      screen: forumPage,
      navigationOptions: {
        tabBarLabel: 'react'
      }
    },
    Friends: {
      screen: Friends,
      navigationOptions: {
        tabBarLabel: 'react native'
      }
    }
  },
  {
    tabBarOptions: {
      tabStyle: {
        minWidth: 50
      },
      upperCaseLabel: false, // 是否使标签大写 默认为 true
      scrollEnabled: true, // 默认滚动 
      style: {
        backgroundColor: '#678' // tabbar 背景色
      },
      indicatorStyle: {
        height: 2,
        backgroundColor: 'white'
      }, // 便签指示器的样式
      labelStyle: {
        fontSize: 13,
        marginTop: 6,
        marginBottom: 6
      },// 文字的样式
    }
  }
)
const AppBottomNavigator = createBottomTabNavigator(
  {
    MyAccount: {
      screen: MyAccount,
      navigationOptions: {
        tabBarLabel: '最热',
        tabBarIcon: ({tintColor, focused}) => (
          <MaterialCommunityIconsIcon name={`home-variant${focused ? '' : '-outline'}`} size={24} color={tintColor}/>
        )
      }
    },
    MessagePage: {
      screen: MessagePage,
      navigationOptions: {
        tabBarLabel: '趋势',
        tabBarIcon: ({tintColor, focused}) => (
          <MaterialCommunityIconsIcon name={`comment-multiple${focused ? '' : '-outline'}`} size={24} color={tintColor}/>
        )
      }
    },
    forumPage: {
      screen: forumPage,
      navigationOptions: {
        tabBarLabel: '收藏',
        tabBarIcon: ({tintColor, focused}) => (
          <MaterialCommunityIconsIcon name={`folder-multiple${focused ? '' : '-outline'}`} size={24} color={tintColor}/>
        )
      }
    },
    Friends: {
      screen: Friends,
      navigationOptions: {
        tabBarLabel: '我的',
        tabBarIcon: ({tintColor, focused}) => (
          <MaterialCommunityIconsIcon name={`account-circle${focused ? '' : '-outline'}`} size={24} color={tintColor}/>
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: '#3cb034',
      inactiveTintColor: '#333',
      showIcon: true,
      style: {
        backgroundColor: '#f5f5f5',
        
      },
      labelStyle: {
        fontSize: 12
      },
      indicatorStyle: {
        height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
      }
    }
  }
)
export const AppStackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    headerTitleStyle: {
      flex:1, textAlign: 'center'
    },
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
  },
  Bottom: {
    screen: AppBottomNavigator,
    navigationOptions: {
      title: 'AppBottomNavigator',
    }
  },
  Top: {
    screen: AppTopNavigator,
    navigationOptions: {
      title: 'AppTopNavigator',
    }
  },
  DrawerNav: {
    screen: DrawerNav,
    navigationOptions: {
      title: 'DrawerNav',
    }
  }
})
const styles = StyleSheet.create({
  tabBarIconStyle: {
     width: 30,
     height: 30,
     fontSize: 20
  },
});
