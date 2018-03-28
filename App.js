/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

let Dimensions = require('Dimensions')
let width = Dimensions.get('window').width

let cols = 3
let wItem = 100
let leftM = (width - wItem * cols) / (cols + 1) 

// 解析json
let bags = require('./bags.json')

export default class App extends Component {


  renderAllBagView(){
    let bagViews = []
    for(let i = 0; i < bags.data.length; i++) {
      let {iconUrl, title} = bags.data[i]

      let imgReq =
      console.log(`iconUrl: ${iconUrl}`)
      console.log(`imgReq: ${imgReq}`)
      // 将view添加到数组
      bagViews.push(
        <View  key = {i} style={styles.bagContainer}>
          <Image  source={  require( './imgs/shoutibao.png') }  style={styles.bagImg}/>
          <Text style={styles.bagTitle}>
            {title}
          </Text> 
        </View>
      )
    }

    // 返回Views
    return bagViews
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderAllBagView()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
   
  },
  bagContainer: {
    width: wItem,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    marginLeft: leftM,
    marginTop: leftM,
  },
  bagImg: {
    width: 80,
    height: 80
  
  },

  bagTitle: {

  }

});
