import React from 'react';
import Header from './children/Header'
import {connect} from 'react-redux'
import Aside from './children/Aside'
import {chaneData,moreAction} from '../../store/module/channel'
import Scroll from './children/Scroll'
import './style.scss'

class Wholebook extends React.Component{
    state={
        selectId:1,
        leftId:9
    }
    render(){

        let {selectId,leftId} = this.state
        let {leftList,list,tip,noData,chaneInitData} =this.props
        let noDom = (
            <div className="nonedata">
                <img src="/images/zhu_img/none.png" alt=""/>
                <p>暂时没有此榜的书籍</p>
            </div>
        )
        return (
            <div className="page pagetop" id="class">
                <Header id={selectId} leftAction={this.props.history.goBack} titleAction={this.titleHandle}/>
                <div className="whole">
                <Aside id={leftId} list={leftList} leftID={this.leftIdAction}/>
                {noData?(<Scroll tip={tip} data={list} onref={()=>(chaneInitData(selectId,leftId))} onLoadMore={this.moreHandle}/>):noDom}
                </div>

            </div>
        )
       
    }
    //获取左边nav的id
    leftIdAction=(id)=>{
        this.props.list.length=0
        this.setState({leftId:id},()=>{
            this.props.chaneInitData(this.state.selectId,this.state.leftId)
        })
        

    }
    //获取主要内容id
    titleHandle=(id)=>{
        this.props.list.length=0
        this.setState({selectId:id},()=>{
            this.props.chaneInitData(this.state.selectId,this.state.leftId)
        })
    

    }
    //初始化时加载数据
    componentDidMount(){
        this.props.chaneInitData(this.state.selectId,this.state.leftId)
    }
    //下拉加载更多
    moreHandle= ()=>{
        this.props.moreHH(this.state.selectId,this.state.leftId)
    }
   

   
}

const mapStateToProps=(state)=>({
    leftList:state.channel.leftList,
    list : state.channel.list,
    tip:state.channel.canLoadMore,
    noData:state.channel.noData,
})
const mapDispatchToProps=(dispatch)=>({
    chaneInitData(selectId,leftId){
        dispatch(chaneData(selectId,leftId))
    },
    moreHH(Nid,Lid){
        dispatch(moreAction(Nid,Lid))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Wholebook);