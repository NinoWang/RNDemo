import React, { Component,PropTypes } from 'react';
import { Platform, StyleSheet, View, Text, PixelRatio, TouchableOpacity, TouchableHighlight, Image, Dimensions } from 'react-native';

import { Navigator } from 'react-native-deprecated-custom-components'

const {width} = Dimensions.get('window')
let margintop = Dimensions.get('window').width === 320 ? 0 : Dimensions.get('window').width === 375 ? -1 : Dimensions.get('window').width === 414 ? 0 : -1
let marginleft = Dimensions.get('window').width === 414 ? 10 : 2

// var Dimensions = require('Dimensions');
var ScreenScale = Dimensions.get('window').scale;
export default class Header extends Component {
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
                <TouchableOpacity activeOpacity={0.8} onPress={()=>{this.pressButton()}} style={styles.action}>
                    <Image style={styles.imgBtn} source={require('../img/ios_back.png')}/>
                </TouchableOpacity>
                <Text style = {styles.font}>
                    <Text style = {styles.font_1}>网易</Text>
                    <Text style = {styles.font_2}>新闻</Text>
                    <Text>有态度°</Text>
                </Text>
            </View>
        )
    } 

    pressButton() {  
        const {navigator} = this.props
        if (navigator) {
            navigator.pop();  
        }  
    }
}


var styles = StyleSheet.create ({
    flex:{
        marginTop:25,
        height:50,
        borderBottomWidth:3/PixelRatio.get(),
        alignItems:'center',
        flexDirection:'row',
    },
    action: {
        height: 40,
        width: 50,
        marginTop: margintop,
        marginLeft: marginleft,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'red'
    },
    imgBtn: {
        width: 24,
        height: 24,
      },
    font: {
        marginLeft:49 + marginleft,
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center',
        // backgroundColor:'green',
        
    },
    font_1: {
        color:'#CD1D1C',
    },
    font_2: {
        color:'#FFF',
        backgroundColor:'#CD1D1C',
    }

}) 