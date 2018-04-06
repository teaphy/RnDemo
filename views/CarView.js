import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    ListView,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';

let carData = require('../data/Car');

class CarView extends React.Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource: new ListView.DataSource({
                // 获取组数据
                getSectionHeaderData: (dataBlob, sectionId) => dataBlob[sectionId],
                // 获取行数据
                getRowData: (dataBlob, sectionId, rowID) => dataBlob[sectionId + ":" + rowID],
                rowHasChanged: (row1, row2) => row1 !== row2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2
            }),
        };
    }

    render() {
        return (
            <View>
                <View style={styles.titleBarContainer}>
                    <Text style={styles.fontTitleStyle}>
                        Car品牌展示
                    </Text>
                </View>
                <ListView
                    // 用于设置小节标题(section header)是否具有粘性。
                    // 值得注意的是，此设置在水平模式下无效，此属性在ios中模式开启，在Android平台中默认关闭
                    stickySectionHeadersEnabled = {true}
                    // 一个子视图下标的数组，用于决定在滚动之后固定在屏幕顶端的元素，例如，stickyHeaderIndices={[0]}
                    // 会让第一个元素固定在滚动视图的顶端。
                    stickyHeaderIndices={[0]}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderCarCell.bind(this)}
                    // 渲染一个粘性标题，使用 stickySectionHeadersEnable来决定是否启用其粘性特性
                    renderSectionHeader={this._renderBrandCell.bind(this)}
                />
            </View>
        );
    }

    // 执行一些操作
    componentDidMount() {
        //  1. 获取数据数组
        let data = carData.data;

        let dataBlob = {};

        let sectionIds = [];
        let rowIds = [];
        let cars = [];

        // 遍历
        for (let i = 0; i < data.length; i++) {
            // 1. 设置组内容
            dataBlob[i] = data[i].title;
            // 2. 设置组号
            sectionIds.push(i);

            rowIds[i] = [];

            // 取出每组中的内容
            cars = data[i].cars;

            // 设置每行的内容
            for (let j = 0; j < cars.length; j++) {

                // 取出行号
                rowIds[i].push(j);
                // 将每行的内容放到dataBlob
                dataBlob[i + ":" + j] = cars[j];
            }
        }

        // 更新状态机
        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIds, rowIds)
        });
    }

    // 渲染 每行的内容
    _renderCarCell(rowData) {
        return (
            <View style={styles.carCellContainer}>
                <Image
                    source={{uri: rowData.icon}}
                    style={styles.carImageStyle}
                />

                <Text style={styles.fontCarStyle}>
                    {rowData.name}
                </Text>
            </View>
        );

    }

    // 渲染 每组header的内容
    _renderBrandCell(sectionData) {
        return (
            <View style={styles.brandCellContainer}>
                <Text style={styles.fontBrandStyle}>
                    {sectionData}
                </Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    titleBarContainer: {
      height: 48,
      backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
    },
    brandCellContainer: {
        justifyContent: 'center',
        backgroundColor: '#e8e8e8',
        height: 24,
        paddingLeft: 10,
    },

    carCellContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },

    fontTitleStyle: {
        fontSize: 14,
        color: 'white'
    },

    carImageStyle: {
        width: 50,
        height: 50,
    },

   fontCarStyle: {
    fontSize: 14,
       color: '#666666',
       marginLeft: 8
   },

    fontBrandStyle: {
        color: 'red',
        fontSize: 16,
    }
});

export default CarView;