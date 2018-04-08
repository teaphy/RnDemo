import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Navigator,
    Text,
} from 'react-native';

import { StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation';


import FirstView from './FirstView'
import SecondView from "./SecondView";
import ThirdView from "./ThirdView";

class NavMainView extends React.Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }


    render() {
        return (
            <View>
                <Text
                    onPress={() => this.props.navigation.navigate('NewsTab')}>
                    新闻主页
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({});

const NewsTab = TabNavigator(
    {
        FirstView: {
            screen: FirstView,
            navigationOptions: {
                title: '首页',
                toolBarLabel: '首页'
            }
        },
        SecondView: {
            screen: SecondView,
            navigationOptions: {
                title: '发现',
                toolBarLabel: '发现'
            }
        },
        ThirdView: {
            screen: ThirdView,
            navigationOptions: {
                title: '新闻',
                toolBarLabel: '新闻'
            }
        }
    }, {
        tabBarPosition: 'bottom',
        lazy: true, // 是否懒加载
        initialRouteName: 'FirstView',
        // tabBarOptions: {
        //     showIcon: true,
        //     pressOpacity: 0.8,
        //     style: {
        //         height: 45,
        //         backgroundColor: '#ffffff',
        //         zIndex: 0,
        //         position: 'relative'
        //     },
        //     labelStyle: {
        //         fontSize: 11,
        //         paddingVertical: 0,
        //         marginTop: -4
        //     },
        //     iconStyle: {
        //         marginTop: -3
        //     },
        //     tabStyle: {
        //         backgroundColor: 'rgb(230,69,51)',
        //     },
        // }
    }
);

export default NewsNavigator = StackNavigator({
    NavMain: {
        screen: NavMainView
    },
    FirstView: {
        screen: FirstView,
    },
    SecondView: {
        screen: SecondView
    },
    ThirdView: {
        screen: ThirdView
    },
    NewsTab: {
        screen: NewsTab
    }
})