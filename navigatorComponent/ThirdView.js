import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Text
} from 'react-native';


class ThirdView extends React.Component {

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
                    Third
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({});

export default ThirdView;