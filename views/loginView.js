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

export default class LoginView extends Component{

	render() {
		
		return (
			<View style={styles.container}>
				<Image
					source={require('../imgs/icon_head.png')}
					style={styles.imageHeadStyle} />
				
				<View style={styles.accountContainer}>
					<TextInput style={styles.accountInputStyle} placeholder={'请输入账号'}/>
					<TextInput style={styles.accountInputStyle} placeholder={'请输入密码'} secureTextEntry={true}/>
				</View>
				
				<View style={styles.loginBtnContainer}>
					<Text style={{color: 'white', fontSize: 16}}>
						登录
					</Text>
				</View>
				
				<View style={styles.settingContainer}>
					<Text>
						无法登录
					</Text>
					
					<Text>
						注册
					</Text>
				</View>
				
				<View style={styles.loginOtherContainer}>
					<Text>
						其他登录
					</Text>
					
					<Image source={ require('../imgs/icon_qq.png') } style={styles.imageLoginStyle}/>
					<Image source={ require('../imgs/icon_wx.png') } style={styles.imageLoginStyle}/>
					<Image source={ require('../imgs/icon_wx.png') } style={styles.imageLoginStyle}/>
				</View>
			</View>
		);
	}
	

}

const styles = StyleSheet.create({
	container: {
		flex:1,
		alignItems:'center',
		backgroundColor: "#dddddd"
	},
	
	imageHeadStyle: {
		width: 60,
		height: 60,
		marginTop: 40,
		marginBottom: 20,
		borderRadius:30,
		borderColor:'white',
		borderWidth: 1,
	},
	
	accountContainer: {
		
		marginLeft: 20,
		marginRight: 20,
		width: wScreen - 40,
	},
	
	accountInputStyle: {
		marginBottom: 1,
		backgroundColor: 'white',
	},
	
	loginBtnContainer: {
		backgroundColor: 'blue',
		marginLeft: 20,
		marginRight: 20,
		width: wScreen - 40,
		marginTop: 10,
		borderRadius: 6,
		height: 36,
		justifyContent:'center',
		alignItems:'center'
	},
	
	settingContainer: {
		marginLeft: 20,
		marginRight: 20,
		width: wScreen - 40,
		marginTop: 15,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	
	loginOtherContainer: {
		width: wScreen - 40,
		position: 'absolute',
		bottom: 10,
		flexDirection: 'row',
		alignItems: 'center'
	},
	
	imageLoginStyle: {
		width: 36,
		height: 36,
		marginLeft: 8,
		borderRadius:6,
	}
});
