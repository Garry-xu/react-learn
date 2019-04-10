/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, RefreshControl, ActivityIndicator, SwipeableFlatList,TouchableHighlight, SectionList} from 'react-native';
import ArrayList from '../utils/ArrayList'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
type Props = {};
let count = 0;

const CITYNAME = [
  { title: 'Title1', data: ['item1', 'item2','item3', 'item4','item5', 'item6','item7', 'item8'] },
  { title: 'Title2', data: ['item3', 'item4'] },
  { title: 'Title3', data: ['item5', 'item6'] },
]
export default class SectionListDemo extends Component<Props> {
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
  _renderSectionHeader({section}) {
    return <View style={styles.sectionHeader}>
      <Text style={styles.text}>{JSON.stringify(section.title)}</Text>
    </View>
  }
  render() {
    return (
      <View style={styles.container}>
        <SectionList 
          sections={this.state.dataArray}
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
          renderSectionHeader={(data) => this._renderSectionHeader(data)}
          ItemSeparatorComponent={() =><View style={styles.separator} />}
          // renderQuickActions={() => this.genQuickActions()}
          // maxSwipeDistance={60}
          // bounceFirstRowOnMount={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
  item: {
    height: 80,
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
  },
  sectionHeader: {
    height: 50,
    backgroundColor: '#93ebbe',
    alignItems: 'center',
    justifyContent: 'center'
  },
  separator: {
    height: 1,
    backgroundColor: 'gray',
    flex: 1
  }
});
