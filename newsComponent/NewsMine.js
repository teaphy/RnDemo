import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

// 我的
class NewsMine extends React.Component {

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
                    我的
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({});

export default NewsMine;