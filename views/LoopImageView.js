import React, {Component} from 'react'
import {
	View,
	StyleSheet,
	Text,
	Image,
	TextInput,
	Button,
	ScrollView,
} from 'react-native';

let Dimensions = require('Dimensions');
let wScreen = Dimensions.get('window').width;

let imgsData = require('../data/LoopImageData');

export default class LoopImageView extends Component{

	render() {
		//
		return (
			<View style={styles.container}>
				<ScrollView
					ref = "scrollView"
					showsHorizontalScrollIndicator={false}
					pagingEnabled={true}
					horizontal={true}>
					{LoopImageView.renderLoopImageView()}
				</ScrollView>
				
			</View>
		);
	}
	static renderLoopImageView(){
		let views = [];
		
		for (let i = 0; i < imgsData.data.length; i++) {
			let {img, title} = imgsData.data[i];
			views.push(
				<View key={i}>
					<Image source={{uri: img}} style={styles.loopImgStyle}/>
				</View>
			);
		}
		return views;
	}
}

const styles = StyleSheet.create({
	loopImgStyle: {
		width:wScreen,
		height:120,
	}
});
