import React, { Component,PropTypes } from 'react';
import { Platform, StyleSheet, View, Text, PixelRatio } from 'react-native';
import NavigationBar from '../Components/SimpleNavigationBar'

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
var ScreenScale = Dimensions.get('window').scale;
export default class ViewDemo extends Component {
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
                {Platform.OS === 'ios' && <NavigationBar
                title={this.state.name}
                showTab
                backOnPress={this.navPop.bind(this)}
                />}
                <View style = {styles.container}>
                        <View style = {[styles.item, styles.center]}>
                            <Text style = {styles.font}>酒店</Text>
                        </View>
                        <View style = {[styles.item,styles.lineLeftRight]}>
                            <View style = {[styles.flex, styles.center, styles.lineCenter]}>
                                <Text style = {styles.font}>海外酒店</Text>
                            </View>
                            <View style = {[styles.flex, styles.center]}>
                                <Text style = {styles.font}>特惠酒店</Text>
                            </View>
                        </View>
                        <View style = {styles.item}>
                            <View style = {[styles.flex, styles.center, styles.lineCenter]}>
                                <Text style = {styles.font}>团购</Text>
                            </View>
                            <View style = {[styles.flex, styles.center]}>
                                <Text style = {styles.font}>客栈·公寓</Text>
                            </View>
                        </View>
                    </View>
            </View>
                
        )
    }

    navPop() {
        const {navigator} = this.props
        if(navigator) {
            navigator.pop()
        }
    }
}

const styles = StyleSheet.create ({
    big: {
        flex:1,
        height:ScreenHeight - 64,
    },
    container: {
        borderWidth:1,
        borderColor:'red',
        flexDirection:'row',
        marginTop:5,
        marginLeft:5,
        marginRight:5,
        height:84,
        borderRadius:5,
        padding:2,
        backgroundColor:'#FF0067',

    },
    item: {
        flex:1,
        height:80,
    },
    flex:{
        flex:1,
    },
    center: {
        justifyContent:'center',
        alignItems:'center'
    },
    font: {
        color:'#fff',
        fontSize:16,
        fontWeight:'bold',
    },
    lineLeftRight: {
        borderLeftWidth:1/PixelRatio.get(),
        borderRightWidth:1/PixelRatio.get(),
        borderColor:'#fff',
    },
    lineCenter: {
        borderBottomWidth:1/PixelRatio.get(),
        borderColor:'#fff',
    }
    

})