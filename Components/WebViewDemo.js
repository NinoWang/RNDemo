import React, { Component,PropTypes } from 'react';
import { Platform, StyleSheet, View, Text, PixelRatio, WebView } from 'react-native';
import NavigationBar from '../tools/SimpleNavigationBar'
import RNDetail from '../Components/RNDetail'
import NavigatorDemo from '../Components/NavigatorDemo'
import theme from '../tools/theme'

var DEFAULT_URL = 'https://www.douban.com'
const HTML = `
<!DOCTYPE html>\n
<html>
  <head>
    <title>这是一个通过html渲染的网页</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=320, user-scalable=no">
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
        font: 62.5% arial, sans-serif;
        background: #E6E6FA;
      }
      h1 {
        padding: 100px;
        margin: 0;
        text-align: center;
        color: #33f;
      }
    </style>
  </head>
  <body>
    <h1>这是一个通过html渲染的网页，下面是通过url加载的网页</h1>
  </body>
</html>
`;
export default class WebViewDemo extends Component {
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
            <View style={styles.container}> 
                {Platform.OS === 'ios' && <NavigationBar
                title={this.state.name}
                showTab
                backOnPress={this.navPop.bind(this)}
                />} 
                <View style = {styles.item}>
                    <View style={styles.title}>
                        <Text>HTML WebView</Text>
                    </View>
                    <WebView style={styles.webview}  
                    source={{html:HTML}}  
                    >  
                    </WebView>
                </View>

                <View style = {styles.item}>
                    <View  style={styles.title}>
                        <Text>Url WebView</Text>
                    </View>
                    <WebView style={styles.webview}  
                    url={DEFAULT_URL}  
                    startInLoadingState={true}  
                    domStorageEnabled={true}  
                    javaScriptEnabled={true}  
                    >  
                    </WebView>
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
    container:{
        flex:1,
    },
    item:{ 
        flex:1,
        width:theme.screenWidth, 
     },
     title: {
        fontSize:17,
        color:theme.globalTextColor,
        marginTop:20,
        marginLeft:20,
        marginBottom:10,
        fontWeight:'bold'
     },
    

})