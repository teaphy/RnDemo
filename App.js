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
// let LoginView = require('./loginView');
import LoopImageView from './views/LoopImageView'
import ListViewDemo from './views/ListViewDemo'
import ShareView from './views/ShareDemo'
import CarView from './views/CarView'
// 添加本地数据


export default class App extends Component {
	render() {
		return (

		    <CarView/>

		);
	}
}
