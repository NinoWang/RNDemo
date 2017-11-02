import React, { Component,PropTypes } from 'react';
import { Platform, StyleSheet, View, Text, PixelRatio } from 'react-native';
import NavigationBar from '../tools/SimpleNavigationBar'
import RNDetail from '../Components/RNDetail'
import NavigatorDemo from '../Components/NavigatorDemo'

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
var ScreenScale = Dimensions.get('window').scale;

//关键代码
var {
    NativeModules
  } = require('react-native');
  var RNBridgeModule = NativeModules.PushNative;
  var TestController = NativeModules.TestController;
export default class TextInputDemo extends Component {
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
            <View style = {styles.flex} >
                {Platform.OS === 'ios' && <NavigationBar
                title={this.state.name}
                showTab
                backOnPress={this.navPop.bind(this)}
                />}
                <View style = {styles.container} >
                    <View style = {[styles.background, styles.green]} >
                        <Text 
                        onPress={this.pushToRN.bind(this)}
                        style = {[styles.item]}>跳转至RN页面
                        </Text>
                    </View>
                    <View  style = {[styles.background, styles.cyan]}>
                        <Text 
                            style = {[styles.item]} 
                            onPress={()=>RNBridgeModule.RNOpenVC('测试')}>跳转至原生页面
                        </Text>
                    </View>
                </View>
            </View>
                
        )
    }

    pushToRN() {
        const {navigator} = this.props
        if(navigator) {
            navigator.push({
                name: 'RNDetail',
                component: RNDetail,
                
            })
        }
    }

    navPop() {
        const {navigator} = this.props
        if(navigator) {
            navigator.pop()
        }
    }
}

const styles = StyleSheet.create ({
    flex: {
        flex:1,
    },
    container:{
        height:100,
        alignItems:'center',
    },
    background: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        height:40,
        width:150,
        marginTop:20,
        borderRadius:4,
    },
    item: {
        fontSize:14,
        textAlign:'center',
    },
    green: {
        backgroundColor:'green',
    },
    cyan: {
        backgroundColor:'cyan',
    },
    

})

// export default RNDetail 