/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    ListView
} from 'react-native';


// import LoginView from './views/loginView'
/// 登录页面Demo
// let LoginView = require('./loginView');
// ScrollView - 轮播图Demo
import LoopImageView from './views/LoopImageView'
// ListView Demo
import ListViewDemo from './views/ListViewDemo'
// ListView - 九宫格 Demo
import ShareView from './views/ShareDemo'
// ListView - Sticky Demo
import CarView from './views/CarView'
// 新闻 Demo
import NewsNavigator from './newsComponent/NavigatorRouter'
// 添加本地数据


export default class App extends Component {
	render() {
		return (

		    <NewsNavigator/>

		);
	}
}
