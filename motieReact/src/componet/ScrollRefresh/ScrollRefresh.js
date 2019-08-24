import React, { Component } from 'react';
import BScroll from 'better-scroll'
class Scroll extends Component {
    state={
        canmore:false,
        isMore:false,
        canref:false,
        isref:false
    }
    refDom = React.createRef()
    render() {
        let {tip,children,name} = this.props
        let {canmore,isMore,canref,isref} =this.state
     
        //下拉刷新
        let tex = canref ? "释放立即刷新" : "下拉刷新"
        tex = isref ? "正在加载中" : tex
        let refreshDom = (
            <div className="topDom">
                <span>{tex}</span>
            </div>
        )
        //上拉加载更多
        let text = canmore ? '释放立即加载更多' : '上拉可以加载更多';
        text = isMore ? '正在加载中' : text
        text = tip?text:'没有更多了'
        let bottDOM = (
            <div className="foot">
                <span></span>
                <p>{text}</p>
            </div>
        )
        return (
            <div className={`scroll-wrap ${name}`} ref={this.refDom}>
                <div className="content">
                    {refreshDom}
                    {children}
                    {bottDOM}
                </div>
            </div>
        );
    }
    componentDidMount(){
        this.scroll = new BScroll(this.refDom.current,{
            scrollY:true,
            scrollX:false,
            tap:true,
            click:true,
            probeType:3,
            startY:-30,
        })
        //监听滚动开始前的事件 
        this.scroll.on('beforeScrollStart',()=>{
            this.scroll.refresh()
        })
        //下拉刷新
        this.scroll.on('scroll',()=>{
            if(this.scroll.y>-30 && this.scroll.y <0){
                this.state.canref&&this.setState({canref:false})
            }else if(this.scroll.y>=0){
                !(this.state.canref)&&this.setState({canref:true})
            }else{

            }
        })
        //松手
        this.scroll.on('scrollEnd',()=>{
            if(this.state.isref){
                return
            }
            if(this.scroll.y>-30 && this.scroll.y <0){
                this.setState({isref:false})
                this.scroll.scrollTo(0,-30,200)
            }else if(this.scroll.y>=0){
                this.setState({isref:true})
                this.props.onref()
                setTimeout(()=>{
                    this.scroll.scrollTo(0,-30,200)
                    this.setState({isref:false})
                },1500)
            }else{

            }
        })
        //上拉加载更多
        this.scroll.on('scroll',()=>{
            if(this.state.isMore){
                return;
            }         
            if(this.scroll.y<=this.scroll.maxScrollY){
                (!this.state.canmore)&&this.setState({canmore:true})
            }
            else {
                this.state.canmore&&this.setState({canmore:false})
            }
        })
        //松手
        this.scroll.on('scrollEnd',()=>{
            if(this.state.isMore){
                return
            }
            if(!this.props.tip){
                return;
            }
            if(this.scroll.y<=this.scroll.maxScrollY){
                this.setState({isMore:true})
                this.props.onLoadMore()
                //关闭加载更多
                setTimeout(()=>{
                    this.setState({isMore:false})
                },1500)
            }
        })
    }
    componentDidUpdate(oldProps){
        if((oldProps.data!==this.props.data)&&(oldProps.data.length===0)){
            this.scroll.refresh()
            this.scroll.scrollTo(0,-30,0)
        }
    }
}

export default Scroll;