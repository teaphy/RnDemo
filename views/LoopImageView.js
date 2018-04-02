import React, {Component} from 'react'
import {
	View,
	StyleSheet,
	Text,
	Image,
	TextInput,
	Button,
} from 'react-native'

let Dimensions = require('Dimensions');
let wScreen = Dimensions.get('window').width;

let imgDatas = require('./jsons/LoopImageData');

export default class LoopImageView extends Component{

	render() {
		
		return (
			<View style={styles.container}>
				<Text>
					LoopImageView
				</Text>
			</View>
		);
	}
	

}

const styles = StyleSheet.create({

});
