import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

import {StackNavigator, TabNavigator} from 'react-navigation'

// 首页
export default class NewsHome extends React.Component {

    static navigationOptions = {
        header: null,
    };

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
                    onPress={() => {
                        this.props.navigation.navigate('Test2');
                        alert('首页')
                    }}
                >
                    首页
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({});


