import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Text
} from 'react-native';


class SecondView extends React.Component {

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
                    Second
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({});

export default SecondView;