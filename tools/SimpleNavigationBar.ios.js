import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import theme from '../tools/theme'

const {width} = Dimensions.get('window')

let margintop = Dimensions.get('window').width === 320 ? 0 : Dimensions.get('window').width === 375 ? -1 : Dimensions.get('window').width === 414 ? 0 : -1
let marginleft = Dimensions.get('window').width === 414 ? 10 : 2
let titleMarginTop = Dimensions.get('window').width === 320 ? 0 : -1
export default class SimpleNavigationBar extends Component {

  handler = (tag) => {
     this.props.onActionSelected(tag)
  }

  render () {
    const {showTab, title, rightActions, rightButtonTitle} = this.props
    let rightButtonsCount = rightActions ? rightActions.length : 0
    var titleWidth = 0
    var rightMore = false
    if (1 >= rightButtonsCount) {
      titleWidth = width - 49 * 2
    } else {
      titleWidth = width - 49 * (rightButtonsCount + rightButtonsCount)
      rightMore = true
    }
    if (rightButtonTitle && rightButtonTitle.length > 0) {
        titleWidth = width - 49 * 4
        rightMore = true
    }
    return (
        <View style={showTab ? styles.toolbar : styles.transparentToolbar}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => this.props.backOnPress()} style={styles.action}>
                <Image style={showTab ? styles.imgBtn : styles.plus_imgBtn} source={showTab ? require('../img/ios_back.png') : require('../img/ios_back_plus.png')}/>
            </TouchableOpacity>
            {rightMore &&<View style={styles.action}/>}
            <Text style={{fontSize: 18, color: '#313131', textAlign: 'center', width: titleWidth, marginTop: titleMarginTop}} numberOfLines={1}>{title}</Text>
            {!rightMore && rightButtonsCount === 0 && <View style={styles.action}/>}
            {rightActions &&rightActions.map((title, index) =>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => this.handler(rightActions[index].tag)} style={styles.action}>
                                <Image style={showTab ? styles.rightImgBtn : styles.plus_rightImgBtn}
                                    source={rightActions[index].icon}/>
                            </TouchableOpacity>
                            )}
            {rightButtonTitle && rightButtonTitle.length > 0 &&
                <TouchableOpacity activeOpacity={0.8} onPress={() => this.handler(0)} style={styles.rightButton}>
                    <Text style={styles.rightButton}>{rightButtonTitle}</Text>
                </TouchableOpacity>}               
        </View>
    )
  }
}

const styles = StyleSheet.create({
  toolbar: {
    height: theme.actionBar.height,
    width: theme.screenWidth,
    backgroundColor:theme.actionBar.backgroundColor,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20
  },
  transparentToolbar: {
    height: theme.actionBar.height,
    width:  theme.screenWidth,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20
  },
  action: {
    height: 40,
    width: 49,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plus_imgBtn: {
    marginTop: margintop,
    marginLeft: marginleft,
    width: 29,
    height: 29,
  },
  plus_rightImgBtn: {
    marginTop: margintop,
    width: 29,
    height: 29,
  },
  imgBtn: {
    marginTop: margintop,
    marginLeft: marginleft,
    width: 24,
    height: 24,
  },
  rightImgBtn: {
    marginTop: margintop,
    width: 24,
    height: 24,
  },
  rightButton: {
    marginTop: margintop,
    width: 98,
    height: 40,
    color: theme.actionBar.fontColor,
    fontSize: 16,
    textAlign: 'right',
    paddingRight: 16,
    lineHeight: 40
  }
})
