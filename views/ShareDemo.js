import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    ListView,
    Image,
    Text
} from 'react-native';

let Dimensions = require('Dimensions');
let {wScreen} = Dimensions.get('window');
// 设置一些常量
// 列数
const cols = 3;
const wCell = 100;
const lMargin = (wScreen - cols * wCell) / (cols + 1);
const tMargin = 25;

class ShareDemo extends React.Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            shareDataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            })
        };
    }

    componentWillMount() {
        let shareData = require('../data/ShareData');
        this.setState({
            shareDataSource: this.state.shareDataSource.cloneWithRows(shareData.data)
        });
    }

    render() {
        return (
            <View>
                <ListView
                    dataSource={this.state.shareDataSource}
                    renderRow={this.renderCell.bind(this)}
                    contentContainerStyle={styles.listViewStyle}
                />
            </View>
        );
    }

    renderCell(rowData) {
        return (
            <View style={styles.cellContainer}>
                <Image
                    source={{uri: rowData.icon}}
                    style={styles.shareImageStyle}
                />
                <Text>
                    {rowData.title}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    listViewStyle: {
        // 设置主轴方向
        flexDirection: 'row',
        // 设置多行显示
        flexWrap: 'wrap',
    },
    cellContainer: {
        width: wCell,
        marginLeft: lMargin,
        marginTop: tMargin,
        // 设置侧轴居中
        alignItems: 'center',

    },
    shareImageStyle: {
        width: 72,
        height: 72,
    }
});

export default ShareDemo;