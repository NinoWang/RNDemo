'use strict'
import { Dimensions, Platform } from 'react-native'
import px2dp from '../tools/px2dp'

const globalTextColor = '#313131'
const globalSubTextColor = '#898989'
module.exports = {
  screenWidth: Dimensions.get('window').width,
  screenHeight: Dimensions.get('window').height,
  themeColor: '#FF5000',
  pageBackgroundColor: '#f4f4f4',
  grayColor: '#c4c4c4',
  btnActiveOpacity: 0.7,
  actionBar: {
    height: (Platform.OS === 'android') ? px2dp(56) : Dimensions.get('window').width === 320 ? px2dp(72) : Dimensions.get('window').width === 375 ? px2dp(62) : Dimensions.get('window').width === 414 ? px2dp(56) : px2dp(62),
    backgroundColor: (Platform.OS === 'android') ? '#25282b' : '#6495ED',
    fontSize: (Platform.OS === 'android') ? 20 : 18,
    fontColor: (Platform.OS === 'android') ? 'white' : '#313131',
    imageSize: (Platform.OS === 'android') ? px2dp(23) : 24
  },
  text: {
    color: globalTextColor,
    subColor: globalSubTextColor,
    fontSize: px2dp(15)
  },
  scrollView: {
    fontSize: px2dp(15),
    underlineStyle: {
      backgroundColor: 'white'
    }
  },
  // 正则表达式
  isPhoneNumber(str) {
    if((/^^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(17[6-8])|(18[0,5-9]))\d{8}$/.test(str))){ 
        return true 
    } 
    return false
  },
  isEmail(str) {
    if((/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(str))){ 
      return true 
    }
    return false
  }
}
