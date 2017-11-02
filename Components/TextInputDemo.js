import React, { Component,PropTypes } from 'react';
import { Platform, StyleSheet, View, Text, PixelRatio, TextInput, TouchableHighlight, Image, Alert} from 'react-native';
import NavigationBar from '../tools/SimpleNavigationBar'
import theme from '../tools/theme'

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
var ScreenScale = Dimensions.get('window').scale;

var reg = /^1[3|4|5|7|8][0-9]{9}$/;
export default class TextInputDemo extends Component {
    constructor(props) {
        super(props);
        this.onLoginButton = this.onLoginButton.bind(this)
        this.onCloseBtn = this.onCloseBtn.bind(this)

        this.state = {
            account:'',
            password:'',
        }
    }

    render() {
        return (
            <View style = {{flex:1}}>
                <Image style = {styles.backgroundImg} source = {require('../img/background.png')} >
                    <View style = {styles.container}>
                        <Text style = {styles.welcome}>欢迎来到爱燃烧</Text>
                        <View style = {[styles.textInputView, styles.phoneView]}>
                            <TextInput
                                placeholder = '请输入手机号或者邮箱'
                                placeholderTextColor = "lightgray"
                                style = {styles.textInput}
                                onChangeText={(text) => this.state.account = text}>
                            </TextInput>
                        </View>
                        <View style = {styles.lineView}/>

                        <View style = {[styles.textInputView, styles.passwordView]}>
                            <TextInput 
                                placeholder = '输入密码，不少于8位'
                                placeholderTextColor = "lightgray"
                                password = {true}
                                style = {styles.textInput}
                                onChangeText={(text) => this.state.password = text}>
                            </TextInput>
                        </View>
                        <View style = {styles.lineView}/>

                        <TouchableHighlight style = {styles.loginBtn} onPress={this.onLoginButton}>
                            <Text style = {styles.loginTitle}>登录</Text>
                        </TouchableHighlight>
                        <View style = {styles.registerContainer}>
                            <TouchableHighlight style = {styles.registerBtn} onPress={this.onRegisterBtn}>
                                <Text style = {styles.registerTitle}>注册</Text>
                            </TouchableHighlight>
                            <TouchableHighlight style = {styles.resetPasswordBtn} onPress={this.onResetBtn}>
                                <Text style = {styles.resetPasswordTitle}>重设密码</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <TouchableHighlight style = {styles.closeBtn} onPress={this.onCloseBtn}>
                            <Text style = {styles.closeTitle}>随便看看</Text>
                    </TouchableHighlight>
                    
                </Image>
                
            </View>
                
        )
    }
// actions
    onLoginButton() {
        if(!theme.isPhoneNumber(this.state.account) && !theme.isEmail(this.state.account)) {
            alert('请输入正确的手机号或邮箱')
        } else if(this.state.password.length < 8) {
            alert('请输入8位以上的密码')
        }else {
            Alert.alert('登录成功', '',
            [
                {
                    text: '好的', onPress: () => {this.props.closeModal()}
                },
            ],
            {cancelable: false},
        )
        }
        
    }

    onRegisterBtn() {
        alert('注册是假的')
    }

    onResetBtn() {
        alert('重设密码也是假的')
    }

    onCloseBtn() {
        this.props.closeModal()
    }
}

const styles = StyleSheet.create ({
    backgroundImg: {
        flex:1,
        width:null,
        height:null
    },
    container: {
        marginTop:84,
        paddingLeft:40,
        paddingRight:40
    },
    welcome: {
        fontSize:30,
        backgroundColor:'rgba(0, 0, 0, 0)',
        color:'white',
    },
    textInputView: {
        height:50,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        flexDirection: 'column',
        justifyContent: 'center',
        
    },
    phoneView: {
        marginTop: 40,
    },
    passwordView: {
        marginTop:20
    },
    lineView: {
        backgroundColor:'lightgray',
        height: 1,
    },
    textInput: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        height:45,
        color:'white',
        fontSize:16,
    },
    loginBtn: {
        marginTop:20,
        height:50,
        backgroundColor: theme.themeColor,
        justifyContent: 'center', 
        alignItems:"center",
        borderRadius:25,
    },
    loginTitle: {
        fontSize:17,
        color:'white'
    },
    registerContainer: {
        flexDirection:'row',
        paddingTop:12,
        justifyContent:'space-between',
    },
    registerBtn: {
        width:50,
        color:'lightgray'
    },
    registerTitle: {
        fontSize:16,
        color:theme.themeColor,
    },
    resetPasswordBtn: {
        width:80
    },
    resetPasswordTitle: {
        fontSize:16,
        color:'lightgray',
        textAlign:'right'
    },
    closeBtn: {
        position: 'absolute', 
        bottom: 40, 
        alignSelf:'center'
    },
    closeTitle: {
        color:'lightgray',
        fontSize:15,
    },

})