import React, { Component,PropTypes } from 'react'
// 导入系统组件
import { 
    Platform, 
    StyleSheet, 
    View, 
    Text,
    Image,
    SectionList,
  } from 'react-native'
  import NavigationBar from '../Components/SimpleNavigationBar'
  import theme from '../Components/theme'

  export default class SectionListDemo extends Component {
    
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
            var sections = [
                {key:'上单',data:[{name:'放逐之刃'},{name:'刀锋意志'},{name:'武器大师'},{name:'诺克萨斯之手'}]},
                {key:'打野',data:[{name:'盲僧'},{name:'酒桶'},{name:'皇子'},{name:'猪妹'}]},
                {key:'ADC',data:[{name:'寒冰射手'},{name:'伊泽瑞尔'},{name:'皮城女警'},{name:'圣枪游侠'}]},
                {key:'中单',data:[{name:'诡术妖姬'},{name:'爆破鬼才'},{name:'时间刺客'},{name:'疾风剑豪'}]},
                {key:'辅助',data:[{name:'机器人'},{name:'女坦'},{name:'锤石'},{name:'琴女'}]}
            ]
            return (
            <View style = {{flex:1}}>
                {Platform.OS === 'ios' && <NavigationBar
                    title={this.state.name}
                    showTab
                    backOnPress={this.navPop.bind(this)}
                />}
                <SectionList
                    renderSectionHeader={this._sectionHeader}
                    renderSectionFooter={this._sectionFooter}
                    renderItem={this._renderItem}
                    sections={sections}
                    ItemSeparatorComponent={() => <View style = {{backgroundColor:'lightgray', height:0.5}}></View>}
                    ListHeaderComponent={()=><View style={{backgroundColor:'yellow',alignItems: 'center'}}><Text>召唤师</Text></View>}
                    ListFooterComponent={() => <View style = {{backgroundColor:'lightgray', height:0.5}}><Text>没有更多了</Text></View>}
                />
                
            </View> 
            )
        }

        _sectionHeader = (info) => {
            var text = info.section.key;
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
    
        _renderItem = (info) => {
            var text = '  ' + info.item.name;
            return (
                <View style = {styles.item}>
                    <Text style = {styles.itemText}>{text}</Text>
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
    /// 
    const styles = StyleSheet.create({
        container: {
            flex:1,
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