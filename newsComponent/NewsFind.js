import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image,
} from 'react-native';

// 发现
class NewsFind extends React.Component {

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
                <Text>
                    发现
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({});

export default NewsFind;