import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

// 消息
class NewsMessage extends React.Component {

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
                    消息
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({});

export default NewsMessage;