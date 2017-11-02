import React, { Component,PropTypes } from 'react'
// 导入系统组件
import { 
    Platform, 
    StyleSheet, 
    View, 
    Text,
    Button
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
                    <Button
                        onPress={this._onButtonPress}
                        title="This looks great!"
                        accessibilityLabel="This sounds great!"
                    />
                    <Button
                        onPress={this._onButtonPress}
                        title="Ok!"
                        color="#841584"
                        accessibilityLabel="Ok, Great!"
                    />
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

    _onButtonPress = () => {
        alert('Button has been pressed!');
    }

  }

  const styles = StyleSheet.create({
      container: {
          padding:20
      },
      titleLabel: {
          fontSize:17,
          color:theme.globalTextColor
      }
  })