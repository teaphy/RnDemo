import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image,
    ListView,
    TouchableOpacity,
    Alert
} from 'react-native';

let Dimensions = require("Dimensions");
let {wScreen} = Dimensions.get('window');

class ListViewDemo extends React.Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            // 设置DataSource
            wineDataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2,
            })
        };
    }

    componentWillMount() {
        // 添加本地数据
        let wines = require('../data/Wine');
        this.setState({
            wineDataSource: this.state.wineDataSource.cloneWithRows(wines)
        });
    }

    render() {
        return (
            <View>
                <ListView
                    dataSource={this.state.wineDataSource}
                    renderRow={this.renderWineCell.bind(this)}
                />
            </View>
        );
    }

    renderWineCell(rowData, sectionId, rowId, highlightRow) {
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => console.log(`点击了 ${rowId}行`)}
            >
                <View style={styles.cellContainer}>
                    <Image

                        source={{uri: rowData.image}}
                        style={styles.imageWineStyle}
                    />

                    <View style={styles.descContainer}>
                        <Text style={styles.wineNameStyle}>
                            {rowData.name}
                        </Text>
                        <Text style={styles.moneyStyle}>
                            ￥{rowData.money}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({

    cellContainer: {
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#F2F2F2',
        padding: 9,

        flexDirection: 'row',
    },
    imageWineStyle: {
        width: 60,
        height: 60,
    },

    descContainer: {
        justifyContent: 'center',
        marginLeft: 8,
    },
    wineNameStyle: {
        width: wScreen - 120,
    },
    moneyStyle: {
        color: 'red',
    }
});

export default ListViewDemo;