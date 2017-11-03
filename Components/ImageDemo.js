import React, { Component,PropTypes } from 'react'
// 导入系统组件
import { 
    Platform, 
    StyleSheet, 
    View, 
    Text,
    Image
  } from 'react-native'
  import NavigationBar from '../tools/SimpleNavigationBar'
  import theme from '../tools/theme'

  export default class ImageDemo extends Component {

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
            <View>
                {Platform.OS === 'ios' && <NavigationBar
                    title={this.state.name}
                    showTab
                    backOnPress={this.navPop.bind(this)}
                />}
                <View style = {styles.container}>
                    <Text style = {styles.titleLabel}>本地图片</Text>
                    <Image source={require('../img/bdf.png')} style={{marginBottom:20}}></Image>
                    <Text style = {styles.titleLabel}>网络图片</Text>
                    <Image 
                        source={{uri: 'http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=3be83f1446086e067ea537086a611181/1c950a7b02087bf489a0f4ccf8d3572c11dfcf43.jpg'}}
                        style={{width: 300, height: 193}}>
                    </Image>
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

  const styles = StyleSheet.create({
      container: {
          padding:20,
      },
      titleLabel: {
          fontSize:17,
          color:theme.globalTextColor,
          marginBottom:10
      }
  })