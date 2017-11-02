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
} from 'react-native';

// 导入本地组件
import ViewDemo from '../Components/ViewDemo'
import TextDemo from '../Components/TextDemo'
import NavigatorDemo from '../Components/NavigatorDemo'
import WebViewDemo from '../Components/WebViewDemo'
import TextInputDemo from '../Components/TextInputDemo'
import Flex from '../Components/Flex'
import ImageDemo from '../Components/ImageDemo'
import SectionListDemo from '../Components/SectionListDemo'


// 全局变量
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
var ScreenScale = Dimensions.get('window').scale;

export default class HomePage extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
        isModal:false,
    };
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

render() {
  const ds = [{name: 'View - 携程'},{name: 'Text - 网易新闻'},{name:'Navigator'},{name: 'WebView'},{name: 'TextInput - 爱燃烧'},{name: 'Image'}, {name: 'FlexBox'},{name: 'SectionList'}, {name: '模态弹出'}, {name: '传值'}, {name: '动画'}, {name: '网络请求'},  {name: '颜色'},  {name: '定时器'},  {name: '手势'},  {name: '绘制'}, ]
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
            <FlatList data={ds} renderItem={this.renderListItem}/>
        </View>
    );
}

  // item 相当于tableView的cell
  renderListItem = ({item, index}) => {
    const {navigator} = this.props
    return (
      <TouchableOpacity  activeOpacity={0.8} style={styles.itemText} key={index}  onPress={this.clickItem.bind(this,item,index)}>
        <Text style={{color: 'black', fontSize:16}}>{item.name}</Text>
      </TouchableOpacity>
    )
  }

  // 点击列表每一行
  clickItem(item,index) {
    // alert(index)
    let _this = this
    const { navigator } = this.props;
    if(navigator) {
      switch (index) {
        case 0:
        navigator.push({
          name: item.name,
          component: ViewDemo,
          params: {
            id: index,
            name:item.name,
        }
      }) 
      break

      case 1:
      navigator.push({
        name: item.name,
        component: TextDemo,
        params: {
          id: index,
          name:item.name,
      }
    })
    break

    case 2:
    navigator.push({
      name: item.name,
      component: NavigatorDemo,
      params: {
        id: index,
        name:item.name,
    }
  })
  break
  
  case 3:
  navigator.push({
    name: item.name,
    component: WebViewDemo,
    params: {
      id: index,
      name:item.name,
    }
  })
  break

  case 4:
  this.showModal()
  break

  case 5:
  navigator.push({
    name: item.name,
    component: ImageDemo,
    params: {
      id: index,
      name:item.name,
    }
  })
  break

  case 6:
  navigator.push({
    name: item.name,
    component: Flex,
    params: {
      id: index,
      name:item.name,
    }
  })
  break
  
  case 7:
  navigator.push({
    name: item.name,
    component: SectionListDemo,
    params: {
      id: index,
      name:item.name,
    }
  })
  break

    default:
    alert(index)
  break;
      } 
    }
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
    width:ScreenWidth,
    height:20
  },
  // 导航栏
  heading: {
    height: 44,
    marginTop:0,
    alignItems: 'center',
    justifyContent: 'center', // 内容居中显示
    backgroundColor: '#6495ED',
    marginBottom: 10
  },
  // 导航栏文字
  headText: {
    color: 'black',
    fontSize: 17
  },
  ListRow: {
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    height:40,
    textAlign:'center'
  },
  flex:{
    flex: 1,
  },
  list_item:{
    height:40,
    marginLeft:10,
    marginRight:10,
    borderBottomWidth:1,
    borderBottomColor: '#ddd',
    justifyContent: 'center'
  },
  list_item_font:{
    fontSize:16
  },
  navBar: {
    backgroundColor: 'white',
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
  }
})