import React, { Component,PropTypes } from 'react'
// 导入系统组件
import { 
    Platform, 
    StyleSheet, 
    View, 
    Text,
    Button,
    TouchableOpacity,
    TouchableHighlight
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
                    <View style = {{marginLeft:-8,  alignItems:'flex-start'}}>
                        <Button 
                            onPress={this._onPressButton}
                            color = 'red'
                            title="button 组件 ←点我"
                            accessibilityLabel="This sounds great!"
                            style = {{width:80, backgroundColor:'red'}}
                        />
                    </View>
                    
                    <TouchableHighlight style = {{marginTop:20}} onPress={this._onPressTouchableHighlight}>
                        <Text style = {styles.touchableHighlightTitle}>TouchableHighlight 组件 ←点我</Text>
                    </TouchableHighlight>

                    <TouchableOpacity style = {{marginTop:20}} onPress={this._onPressTouchableOpacity}>
                        <Text style = {styles.TouchableOpacityTitle}>TouchableOpacity 组件 ←点我</Text>
                    </TouchableOpacity>
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

    _onPressButton = () => {
        alert('定制性比较差，不建议使用')
    }

    _onPressTouchableHighlight = () => {
        alert('按下时背景色发生变化，适用于高亮风格的场景')
    }

    _onPressTouchableOpacity = () => {
        alert('按下时文字透明度发生变化，适用于一般场景')
    }

  }

  const styles = StyleSheet.create({
      container: {
          paddingLeft:20,
          paddingTop:30
          
      },
      touchableHighlightTitle: {
          fontSize:17,
          color:'green'
      },
      TouchableOpacityTitle: {
        fontSize:17,
        color:'blue'
      }
  })