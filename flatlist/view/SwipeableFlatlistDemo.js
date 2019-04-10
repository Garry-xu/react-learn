/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, RefreshControl, ActivityIndicator, SwipeableFlatList,TouchableHighlight} from 'react-native';
import ArrayList from '../utils/ArrayList'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
type Props = {};
let count = 0;
const CITYNAME = ['北京1', '上海2', '广州3','北京4', '上海5', '广州6','北京7', '上海8', '广州9','北京10', '上海11', '广州12']
export default class SwipeableFlatlistDemo extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      dataArray: CITYNAME
    }
  }
  loadData(refreshing) {
    if(refreshing) {
      this.setState({
        isLoading: true,
      })
    }
    setTimeout(() => {
      let dataArray = []
      if(refreshing) {
        // dataArray.push(this.state.dataArray)
        for(let i = this.state.dataArray.length - 1; i >= 0; i--) {
          dataArray.push(this.state.dataArray[i])
        }
      } else {
        dataArray = this.state.dataArray.concat(CITYNAME)
      }
      this.setState({
        dataArray: dataArray,
        isLoading: false
      })
    },2000)
  }
  _renderItem(data) {
    return <View style={styles.item}>
      <Text style={styles.text}>{data.item}</Text>
    </View>
  }
  genIndicator(){
    // style={styles.indicatorContainer}
    return <View style={styles.indicatorContainer}>
    <ActivityIndicator style={styles.indicator} color={'red'} size={'large'}  animating={true}/>
    <Text>加载更多...</Text>
  </View>
  }
  genQuickActions () {
    return <View style={styles.quickContainer}>
      <TouchableHighlight onPress={() => {alert('确认删除？')}}>
        <View style={styles.quick}>
          <Text style={styles.text}>删除</Text>
        </View>
      </TouchableHighlight>
    </View>
  }
  render() {
    return (
      <View style={styles.container}>
        <SwipeableFlatList 
          data={this.state.dataArray}
          renderItem={(data) => this._renderItem(data) }
          // refreshing= {this.state.isLoading}
          // onRefresh={() => {
          //   this.loadData();
          // }}
          refreshControl= {
            <RefreshControl
              title={'Loading'}
              tintColor={'orange'}
              colors= {['red']}
              refreshing= {this.state.isLoading}
              onRefresh={() => {
                this.loadData(true);
              }}
            />
          }
          ListFooterComponent={()=> this.genIndicator()}
          onEndReached= {() => {
            this.loadData()
          }}
          renderQuickActions={() => this.genQuickActions()}
          maxSwipeDistance={60}
          bounceFirstRowOnMount={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#169',
    height: 100,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 20
  },
  indicator: {
    color: 'red',
    margin: 10
  },
  quickContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 15,
    marginBottom: 15
  },
  quick: {
    backgroundColor: 'red',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 10,
    width: 200
  },
  indicatorContainer: {
    alignItems: 'center'
  }
});
