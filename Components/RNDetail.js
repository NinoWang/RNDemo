import React, { Component,PropTypes } from 'react';
import { Platform, StyleSheet, View, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import NavigationBar from '../Components/SimpleNavigationBar'

export default class RNDetail extends Component {

    render() {
        return(
            <View>
                {Platform.OS === 'ios' && <NavigationBar
          title='RN页面🤝'
          showTab
          backOnPress={this.navPop.bind(this)}
          />}
          <View style = {styles.center}>
            <Text>RNDetail</Text>
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
    center: {
        justifyContent:'center',
        alignItems:'center',
    }
})