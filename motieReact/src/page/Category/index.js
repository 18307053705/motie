import React from 'react';
import AppHeader from '../../componet/PageHead/index'
import {connect} from 'react-redux'
import {getInitListAction,getListActionHandle,getMoreAction} from '../../store/module/category'
import Top from './children/Top'
import Scroll from '../../componet/ScrollRefresh/ScrollRefresh'
import './style.scss'

class ClassIfIcation extends React.Component{
    state={
        group:1,
        sortId:0,
        finish:0,
        free:0
    }
    //free=0&finish=0&group=1&sortId=&page=1&pageSize=10
    render(){
        let {list,initList,isover} = this.props
        let {group,sortId,finish,free} =this.state
        let dom = initList.map(item=>(
            <li className="scroll-item border-bottom" 
            key={item.id}>
                <div className="img"><img src={item.icon} alt=""/></div>
                <div className="text">
                    <h4>{item.name}</h4>
                    <p>{item.recommend}</p>
                    <div className="tip">
                    <span className="icon"><img src={item.authorIcon} alt=""/></span>
                    <span>{item.authorName}</span>
                    <div className="tig">
                        {
                            item.bookTags.map((ite,i)=>(
                                <span key={i}>
                                    {ite}
                                </span>
                            ))
                        }
                    </div>
                    </div>
                </div>
            </li>
        ))

        return (
            <div className="page pagetop" id="category">
                <AppHeader title="分类" left={(<span className="scale">&lt;</span>)} leftClick={this.props.history.goBack}/>
                <Scroll onLoadMore={()=>(this.props.getMore(group,sortId,finish,free))}  tip={isover} onref={this.onrefAction}  name="wrap">
                <Top list={list} oneACtion={this.oneHand}
                group={group}
                sortId={sortId}
                finish={finish}
                free={free}
                TwoAction={this.towHand}
                ThreeAction={this.threeHand}
                FourAction={this.FourHand}
                />
                {dom}
                </Scroll>
            </div>
        )
       
    }
    //初始化加载分类数据
    componentDidMount(){
        this.props.gitInitData(this.state.group)
    }
    oneHand=(id)=>{
        this.setState({group:id})
        this.setState({sortId:0},()=>(this.getList()))
        this.setState({finish:0})
        this.setState({free:0})
        this.props.initList.length=0
    }
    onrefAction=()=>{
        this.getList()
    }
    towHand=(id)=>{
        this.setState({sortId:id},()=>(this.getList()))
        this.props.initList.length=0
    }
    threeHand=(id)=>{
        this.setState({finish:id},()=>(this.getList()))
        this.props.initList.length=0
    }
    FourHand=(id)=>{
        this.setState({free:id},()=>(this.getList()))
        this.props.initList.length=0
    }
    getList=()=>{
        this.props.getListAction(this.state.group,this.state.sortId,this.state.finish,this.state.free)
    }
    
  
}
const mapStateToProps=(state)=>({
    list : state.category.list,
    initList : state.category.initList,
    isover : state.category.isOver
})
const mapDispatchToProps=(dispatch)=>({
    gitInitData(group){
        dispatch(getInitListAction(group))
    },
    getListAction(group,sortId,finish,free){
        dispatch(getListActionHandle(group,sortId,finish,free))
    },
    getMore(group,sortId,finish,free){
        dispatch(getMoreAction(group,sortId,finish,free))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(ClassIfIcation);