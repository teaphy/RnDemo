import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image,
    TextInput,
    Button,
    ScrollView,
} from 'react-native';


let Dimensions = require('Dimensions');
let wScreen = Dimensions.get('window').width;

let imgsData = require('../data/LoopImageData');

const LOOP_SCROLL = 'loopScroll';

export default class LoopImageView extends Component {

    static defaultProps = {
        // 指定时间间隔为1000ms，滚动LoopView
        duration: 1000,
    };

    // 构造
    constructor(props) {
        super(props);
        let timerLoop = null;
        // 初始状态
        this.state = {
            // 当前页
            currentPage: 0,
        };
        this.startTimer = this.startTimer.bind(this)
    }

    render() {
        //
        return (
            <View style={styles.container}>
                <ScrollView
                    ref={svLoop => this.svLoop = svLoop}
                    // 去掉滚动条
                    showsHorizontalScrollIndicator={false}
                    // 设在分页滚动
                    pagingEnabled={true}
                    onMomentumScrollEnd={(e) => this.onScrollAnimationEnd(e)}
                    // 设在滚动方向为水平
                    horizontal={true}
                    style={styles.scrollStyle}
                >

                    {this.renderLoopImageView()}
                </ScrollView>

                <View style={styles.indicatorContainerStyle}>
                    {this.renderIndicatorView()}
                </View>
            </View>
        );
    }

    // 处理一些复杂的操作
    componentDidMount() {
        // 开启定时器`
        this.startTimer()
    }

    // 释放资源
    componentWillUnmount() {
        clearInterval(this.timerLoop);
    }

    // 开启定时器
    startTimer() {

        // 图片的个数
        let imgCount = imgsData.data.length;
        this.timerLoop = setInterval(
            () => {

                // 临时缓存当前图片的页数
                let activePage = 0;

                // 设置滚动图片的页数
                if ((this.state.currentPage + 1) >= imgCount) {
                    activePage = 0;
                } else {
                    activePage = this.state.currentPage + 1;
                }

                // 设置状态机
                this.setState({
                    currentPage: activePage,
                });

                // 获取当前的滚动量
                let offsetX = activePage * wScreen;
                // 将ScrollView滚动到相应的偏移量
                this.svLoop.scrollResponderScrollTo({x:offsetX, y:0, animated:true});

            }, this.props.duration);
    }

    // 返回所有的图片
    renderLoopImageView() {
        let views = [];

        for (let i = 0; i < imgsData.data.length; i++) {

            let {img, title} = imgsData.data[i];
            views.push(
                <View key={i}>
                    <Image source={{uri: img}} style={styles.loopImgStyle}/>
                </View>
            );
        }
        return views;
    }

    renderIndicatorView() {
        let indicatorViews = [];
        // 生成指示器
        for (let i = 0; i < imgsData.data.length; i++) {
            // 设置指示器的颜色
            let style = (this.state.currentPage === i) ? {color: 'orange'} : {color: 'white'};
            indicatorViews.push(
                <Text key={i} style={[{fontSize: 25}, style]}>
                    &bull;
                </Text>
            )
        }
        return indicatorViews
    }

    // 当滚动一帧后,更新current
    onScrollAnimationEnd(e) {
        console.log("onScrollAnimationEnd");
        // 1. 获取当前scrollView的滚动量
        let xOffset = e.nativeEvent.contentOffset.x;
        // 2. 获取当前帧的位置
        let currentIndex = Math.floor(xOffset / wScreen);
        // 3. 重置状态机 重绘UI
        this.setState({
            currentPage: currentIndex,
        });
    }
}

const styles = StyleSheet.create({
    loopImgStyle: {
        width: wScreen,
        height: 160,
    },
    scrollStyle: {
        width: wScreen,
        height: 160,
    },
    indicatorContainerStyle: {
        width: wScreen,
        height: 36,

        // 设置背景颜色
        backgroundColor: 'rgba(0, 0, 0, 0.4)',

        // 定位位置
        position: 'absolute',
        bottom: 0,

        // 设置主轴方向
        flexDirection: 'row',
        // 设置侧轴方向
        alignItems: 'center',
    }
});
