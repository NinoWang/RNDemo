import React, { Component,PropTypes } from 'react';

// 导入系统组件
import { 
  Platform, 
  StyleSheet, 
  View, 
  Text, 
  FlatList,
  TouchableOpacity, 
  Modal, 
  SectionList
} from 'react-native';

// 导入本地组件
import theme from '../tools/theme'
import ViewDemo from '../Components/ViewDemo'
import TextDemo from '../Components/TextDemo'
import NavigatorDemo from '../Components/NavigatorDemo'
import WebViewDemo from '../Components/WebViewDemo'
import ButtonDemo from '../Components/ButtonDemo'
import TextInputDemo from '../Components/TextInputDemo'
import Flex from '../Components/Flex'
import ImageDemo from '../Components/ImageDemo'
import SectionListDemo from '../Components/SectionListDemo'

// 全局变量
const sections = [
  {key:'基础组件',data:[{name: 'View - 携程'}, {name: 'Text - 网易新闻'}, {name: 'Button'}, {name: 'Image'}, {name: 'TextInput - 爱燃烧'}, {name: 'WebView'}, ]},
  {key:'实用组件',data:[{name:'Navigator'},  {name: 'ScrollView'}, {name: 'ListView'}, {name: 'FlatList'},{name: 'SectionList'}, {name: '模态弹出'}, {name: '定时器'}, {name: '动画'},  {name: '手势'},  {name: '绘制'}, ]},
  {key:'方法功能',data:[{name: '传值'}, {name: '与iOS原生通信'}, {name: '网络请求'}, ]},
]
export default class HomePage extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
        isModal:false,
    };
  }

  // 渲染
  render() {
    
    return(
        <View style={styles.container}>
            {/* 初始化Modal */}
            <Modal
                animationType='slide'           // 从底部滑入
                transparent={false}             // 不透明
                visible={this.state.isModal}    // 根据isModal决定是否显示
                onRequestClose={() => {this.onRequestClose()}}  // android必须实现
            >
              <TextInputDemo closeModal={this.onRequestClose.bind(this)} />
            </Modal>

            <View style = {styles.status}></View> 
            <View style={styles.heading}>
              <Text style={styles.headText}>React Native 基础知识点</Text>
            </View>
            <SectionList
                    renderSectionHeader={this._sectionHeader}
                    renderSectionFooter={this._sectionFooter}
                    renderItem={this._renderItem}
                    sections={sections}
                    ItemSeparatorComponent={() => <View style = {{backgroundColor:'lightgray', height:0.5}}></View>}
                    //ListHeaderComponent={()=><View style={{backgroundColor:'yellow',alignItems: 'center'}}><Text>召唤师</Text></View>}
                    ListFooterComponent={this._listFooter}
                />
        </View>
    ) 
  }

  // 自定义组件
  _renderItem = (info) => {
    // 遍历获取 section 的索引
    var section = 0
    for (var i in sections) {
      if(sections[i].data[info.index] == info.item) {
        section = i
      }
    }
    var text = '  ' + info.item.name 
    return (
         <TouchableOpacity activeOpacity={0.8} style={styles.item} onPress={this.clickItem.bind(this, info.item, section, info.index )}>
         <Text style = {styles.itemText}>{text}</Text>
       </TouchableOpacity>
    )
  }

  _sectionHeader = (info) => {
    var text = info.section.key
    return (
        <View  style={styles.section}>
            <Text style = {styles.sectionText}>{text}</Text>
        </View>
    )
  }

  _sectionFooter = () => {
    return (
        <View style = {{flex:1, backgroundColor:'lightgray', height:10}}></View>
    )
  }

  _listFooter = () => {
    return (
      <View style = {{ height:40.5}}>
        <View style = {{backgroundColor:'lightgray', marginTop:0, width:theme.screenWidth, height:0.5}}></View>
        <View style = {{backgroundColor:'white', justifyContent:'center', alignItems:'center',  height:40}}>
          <Text>持续更新中...</Text>
        </View>
      </View>
      
  )
  }

// actions
// 点击列表每一行
  clickItem(item, section, index) {
    const { navigator } = this.props
    if(section == 0) {
      if(index == 0) {
        navigator.push({
          name: item.name,
          component: ViewDemo,
          params: {
            id: index,
            name:item.name,
          }
        }) 
      }else if(index == 1) {
        navigator.push({
          name: item.name,
          component: TextDemo,
          params: {
            id: index,
            name:item.name,
          }
        })
      }
      else if(index == 2) {
        navigator.push({
          name: item.name,
          component: ButtonDemo,
          params: {
            id: index,
            name:item.name,
          }
        })
      }else if(index == 3) {
        navigator.push({
          name: item.name,
          component: ImageDemo,
          params: {
            id: index,
            name:item.name,
          }
        })
      }else if(index == 4) {
        this.showModal()
      }else {
        navigator.push({
          name: item.name,
          component: WebViewDemo,
          params: {
            id: index,
            name:item.name,
          }
        })
      }
    } else if(section == 1) {
      if(index == 0) {
        navigator.push({
          name: item.name,
          component: NavigatorDemo,
          params: {
            id: index,
            name:item.name,
          }
        })
      } else if(index == 1) {

      } else {
        alert(item.name)
      }
    }else {
      alert(item.name)
    }
  }
  showModal() {
    this.setState({
        isModal:true
    })
  }

  onRequestClose() {
    this.setState({
        isModal:false
    });
  }   
}

// CSS样式
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // 状态栏
  status: {
    backgroundColor:'#6495ED',
    marginTop:0,
    width:theme.screenWidth,
    height:20
  },
  // 导航栏
  heading: {
    height: 44,
    marginTop:0,
    alignItems: 'center',
    justifyContent: 'center', // 内容居中显示
    backgroundColor: '#6495ED',
  },
  // 导航栏文字
  headText: {
    color: 'black',
    fontSize: 17
  },
    navBarText: {
      fontSize: 16,
      marginVertical: 10,
    },
    navBarTitleText: {
      color: '#373E4D',
      fontWeight: '500',
      marginVertical: 9,
    },
    navBarLeftButton: {
      paddingLeft: 10,
    },
    navBarRightButton: {
      paddingRight: 10,
    },
    navBarButtonText: {
      color: '#5890FF',
    },
    itemText: {
      height:40,
      marginLeft:10,
      marginRight:10,
      borderBottomWidth:1,
      borderBottomColor: '#ddd',
      justifyContent: 'center',
    },
    modalViewStyle: {
      flex:1,
      backgroundColor:'orange',
      alignItems:'center',
      justifyContent:'center'
  },

  section: {
    flex:1,
    justifyContent:'center',
    height: 50,
    backgroundColor: '#9CEBBC',
    paddingLeft:10
},
  sectionText: {
      color: 'white', 
      fontSize: 20
  },
  item: {
      flex:1,  
      justifyContent:'center',
      height:44, 
      backgroundColor: "#ffffff",
      paddingLeft:10
  },
  itemText: {
      color: '#5C5C5C', 
      fontSize: 15, 
  }
})