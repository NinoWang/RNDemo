import React, { Component,PropTypes } from 'react';
import { Platform, StyleSheet, View, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import NavigationBar from '../Components/SimpleNavigationBar'

const USER_MODELS = {
    1: { name: 'Nino', age: 23 },
    2: { name: '布怀特', age: 24 }
}
export default class Flex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            name:null,
        }
    }

    componentDidMount() {
        //这里获取从主页传递过来的参数: id
        console.log('hahahahha')
        this.setState({
            id: this.props.id,
            name:this.props.name,
        });
    }

    render() {
        return(
            <View>
                {Platform.OS === 'ios' && <NavigationBar
          title={this.state.name}
          showTab
          backOnPress={this.navPop.bind(this)}
          />}
            
            <View style = {BoxStyles.margginBox }>
                <View style = {[BoxStyles.box, BoxStyles.height300, BoxStyles.width300]}>
                    <View style = {[BoxStyles.top, BoxStyles.height50, BoxStyles.bgred]}>
                        <Text style = {BoxStyles.yellow}>top</Text>
                    </View>
                    <View style = {BoxStyles.borderBox}>
                        <View style = {[BoxStyles.left, BoxStyles.bgred]}>
                            <Text style = {BoxStyles.yellow}>left</Text>
                        </View>
                        <View style = {[BoxStyles.right, BoxStyles.bgred]}>
                        <Text style = {BoxStyles.yellow}>left</Text>
                        </View>
                    </View>
                    <View style = {[BoxStyles.bottom, BoxStyles.height50, BoxStyles.bgred]}>
                        <Text style = {BoxStyles.yellow}>bottom</Text>
                    </View>
                    <View style = {BoxStyles.label}>
                        <Text style = {BoxStyles.white}>margin</Text>
                    </View>
                </View>
            </View>
            </View>   
        )
    }

    navPop() {
        const {navigator} = this.props
        if(this.props.getUser) {
            let user = USER_MODELS[this.props.id]
            //回调传值给上个页面
            this.props.getUser(user);
        }

        if(navigator) {
            navigator.pop()
        }
    }
}

const BoxStyles = StyleSheet.create({
    "height50": {
        height:50
    },
    "height300": {
        height:300
    },
    "width300": {
        width:300 
    },
    "bgred": {
        backgroundColor:'red'
    },
    "box": {
        flexDirection:'column',
        flex:1,
        position:'relative',
    },
    "label": {
        top:0,
        left:0,
        paddingTop:0,
        paddingRight:3,
        paddingBottom:3,
        paddingLeft:0,
        position:'absolute',
        backgroundColor:'blue',
    },
    "top": {
        justifyContent:'center',
        alignItems:'center',
    },
    "bottom": {
        justifyContent:'center',
        alignItems:'center',
    },
    "right": {
        width:50,
        justifyContent:'space-around',
        alignItems:'center',
    },
    "left": {
        width:50,
        justifyContent:'center',
        alignItems:'center',
    },
    "yellow": {
        color:'yellow',
        fontWeight:'900',
    },
    "white": {
        color:'white',
        fontWeight:'900',
    },
    "margginBox": {
        /*absolute：生成绝对定位的元素，元素的位置通过 “left”, “top”, “right” 以及 “bottom” 属性进行规定。
relative：生成相对定位的元素，相对于其正常位置进行定位。因此，”left:20” 会向元素的 LEFT 位置添加 20 像素。*/
        position:'absolute',
        top:100,
        paddingLeft:7,
        paddingRight:7,
    },
    "borderBox": {
        flex:1,
        justifyContent:'space-between',
        flexDirection:'row',
    }
})