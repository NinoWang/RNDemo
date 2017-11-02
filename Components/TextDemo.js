import React, { Component,PropTypes } from 'react';
import { Platform, StyleSheet, View, Text, PixelRatio, } from 'react-native';
import NavigationBar from '../Components/SimpleNavigationBar'
import Header from '../Components/TextHeader'

export default class TextDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            name:null,
        }
    }
    componentDidMount() {
        //这里获取从主页传递过来的参数
        this.setState({
            id: this.props.id,
            name:this.props.name,
        });
    }

    render() {
        return (
            <View style = {styles.flex}>
                <Header navigator={this.props.navigator}/>
                <List title = '白日依山尽'></List>
                <List title = '黄河入海流'></List>
                <List title = '欲穷千里目'></List>
                <List title = '更上一层楼'></List>
                <ImportantNews news = {[
                    '日照香炉生紫烟，遥看瀑布挂前川。飞流直下三千尺，疑是银河落九天。',
                    '日照香炉生紫烟，遥看瀑布挂前川。飞流直下三千尺，疑是银河落九天。',
                    '日照香炉生紫烟，遥看瀑布挂前川。飞流直下三千尺，疑是银河落九天。',
                    '日照香炉生紫烟，遥看瀑布挂前川。飞流直下三千尺，疑是银河落九天。',
                ]}/>
            </View>
        )
    }
}

export class List extends Component {
    render() {
        return (
            <View style = {styles.listItem}>
                <Text style = {styles.listItemFont}>{this.props.title}</Text>
            </View>
        )
    }
}

export class ImportantNews extends Component {
    show(title) {
        alert(title)
    }
    render() {
        var news = []
        for(var i in this.props.news) {
            var text = (
                <Text 
                onPress = {this.show.bind(this,this.props.news[i])}
                numberOfLines = {2}
                style = {styles.newsItem}>
                {this.props.news[i]}
                </Text>
            )
            news.push(text)
        }
        return (
            <View style = {styles.flex}>
                <Text style = {styles.newsTitle}>今日要闻</Text>
                {news}
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    flex: {
        flex:1,
    },
    center: {
        justifyContent:'center',
        alignItems:'center',
    },
    listItem: {
        height:40,
        marginLeft:10,
        marginRight:10,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
        justifyContent:'center'
    },
    listItemFont: {
        fontSize:16,
    },
    newsTitle: {
        fontSize:17,
        fontWeight:'bold',
        color:'#CD101C',
        marginLeft:10,
        marginTop:15
    },
    newsItem: {
        marginLeft:10,
        marginRight:10,
        fontSize:15,
        lineHeight:25,
    }
    

})