import React from "react";
import {Image} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import NewsFind from "./NewsFind";
import NewsHome from "./NewsHome"
import NewsMessage from "./NewsMessage";
import NewsMine from "./NewsMine";


let IconHomeNormal = require('../imgs/ic_home_normal.png');
let IconHomeSelected = require('../imgs/ic_home_selected.png');
let IconFindNormal = require('../imgs/ic_find_normal.png');
let IconFindSelected = require('../imgs/ic_find_selected.png');
let IconMessageNormal = require('../imgs/ic_message_normal.png');
let IconMessageSelected = require('../imgs/ic_message_selected.png');
let IconMineNormal = require('../imgs/ic_mine_normal.png');
let IconMineSelected = require('../imgs/ic_mine_selected.png');

const MainTabNavigator = TabNavigator(
    {
        NewsHome: {
            screen: NewsHome,
            navigationOptions: {
                tabBarLabel: '首页',
                //
                tabBarIcon: (({focused, tintColor}) => {
                    return (
                        <Image
                            source={focused? IconHomeSelected : IconHomeNormal}
                            style={{width: 22, height:22}}
                        />
                    );
                }),
            }
        },
        NewsFind: {
            screen: NewsFind,
            navigationOptions: {
                tabBarLabel: '发现',
                tabBarIcon: (({focused, tintColor}) => {
                    return (
                        <Image
                            source={focused? IconFindSelected : IconFindNormal}
                            style={{width: 22, height:22}}
                        />
                    );
                }),
            }

        },
        NewsMessage: {
            screen: NewsMessage,
            navigationOptions: {
                tabBarLabel: '消息',
                tabBarIcon: (({focused, tintColor}) => {
                    return (
                        <Image
                            source={focused? IconMessageSelected : IconMessageNormal}
                            style={{width: 22, height:22}}
                        />
                    );
                }),
            }
        },
        NewsMine: {
            screen: NewsMine,
            navigationOptions: {
                tabBarLabel: '我的',
                tabBarIcon: (({focused, tintColor}) => {
                    return (
                        <Image
                            source={focused? IconMineSelected : IconMineNormal}
                            style={{width: 22, height:22}}
                        />
                    );
                }),
            }
        }
    },
    {
        // 用来设置默认路由
        initialRouteName: 'NewsHome',
        // 设置TabBar位置
        tabBarPosition: 'bottom',
        lazy: true, // 是否懒加载
        scrollEnabled: false,
        // 用来设置tab切换使用华东操作
        swipeEnabled: false,
        // 改变标签时是否执行动画
        animationEnabled: false,
        //  配置标签栏
        tabBarOptions: {
            // 活动选项卡的标签和图标颜色。
            activeTintColor: '#d81e06',
            // 非活动选项卡的标签和图标颜色。
            inactiveTintColor: '#666666',
            // 是否显示标签图标，默认为false。
            showIcon: true,
            iconStyle: {
            },
            // 标签标签的样式对象
            labelStyle: {
                fontSize: 12,
                margin: 0,
            },

            // 选项卡的样式对象
            tabStyle: {
                marginTop: -5,
            },
            // 标签栏的样式对象
            style: {
                backgroundColor: 'white',
                height: 48,
            },
            // 选项卡指示符的样式对象（选项卡底部的行）
            indicatorStyle: {
                //  设置 tab indicator的颜色
                backgroundColor: "#00000000"
            }
        }
    }
);

const NewsNavigator = StackNavigator(
    {
        // 将TabNavigator包裹在StackNavigator里面可以保证跳转页面的时候隐藏tabbar
        MainTabNavigator: {
            screen: MainTabNavigator,
        },

        //  将需要跳转的页面注册在这里，全局才可以跳转

    },
    {
        initialRouteName: 'MainTabNavigator',
    }
);

export default NewsNavigator;