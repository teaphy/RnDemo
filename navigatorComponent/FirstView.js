import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
    Button
} from 'react-native';

import { StackNavigator } from 'react-navigation';

class FirstView extends React.Component {


    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }


    render() {
        return (
            <View>
                <Text>第一个View</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({});

export default FirstView;