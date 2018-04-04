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

export default class LoopImageView extends Component {
	
	static defaultProps = {
	
	};
	
	// 构造
	constructor(props) {
		super(props);
		// 初始状态
		this.state = {
			// 当前页
			currentPage: 0,
		};
	}
	
	// 返回所有的图片
	renderLoopImageView() {
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
	
	renderIndicatorView() {
		let indicatorViews = [];
		// 生成指示器
		for (let i = 0; i < imgsData.data.length; i++) {
			// 设置指示器的颜色
			let style = (this.state.currentPage === i) ? {color: 'orange'} : {color: 'white'};
			indicatorViews.push(
				<Text key={i} style={[{fontSize: 25}, style]}>
					&bull;
				</Text>
			)
		}
		return indicatorViews
	}
	
	// 当滚动一帧后,更新current
	onScrollAnimationEnd(e) {
		console.log("onScrollAnimationEnd");
		
		// 获取当前scrollView的滚动量
		let xOffset = e.nativeEvent.contentOffset.x;
		// 获取当前帧的位置
		const currentIndex = Math.floor(xOffset / wScreen);
		console.log(`currentIndex: ${currentIndex}`);
		// 设置状态量,重绘
		this.setState({
			currentPage: currentIndex,
		});
		console.log(`currentPage: ${this.state.currentPage}`);
	}
	
	
	render() {
		//
		return (
			<View style={styles.container}>
				<ScrollView
					ref="scrollView"
					// 去掉滚动条
					showsHorizontalScrollIndicator={false}
					// 设在分页滚动
					pagingEnabled={true}
					onMomentumScrollEnd={(e) =>this.onScrollAnimationEnd(e)}
					// 设在滚动方向为水平
					horizontal={true}>
					
					{this.renderLoopImageView()}
				</ScrollView>
				
				<View style={styles.indicatorContainerStyle}>
					{this.renderIndicatorView()}
				</View>
			</View>
		);
	}
	
	
}

const styles = StyleSheet.create({
	loopImgStyle: {
		width: wScreen,
		height: 120,
	},
	indicatorContainerStyle: {
		width: wScreen,
		height: 36,
		
		// 设置背景颜色
		backgroundColor: 'rgba(0, 0, 0, 0.4)',
		
		// 定位位置
		position: 'absolute',
		bottom: 0,
		
		// 设置主轴方向
		flexDirection: 'row',
		// 设置侧轴方向
		alignItems: 'center',
	}
});
