import React from 'react';
import Better from 'better-scroll';
import { connect } from 'react-redux';
import './style.scss';
class BetterScrollRefresh extends React.Component{
    state = {
        downText:'下拉刷新',
        up:'上拉加载更多',
    }
    Refresh = React.createRef();
    RefreshChildren = React.createRef();
    render(){
        let { downText , up  } = this.state;
        return (
           <div id='betterScrollRefresh'  ref={this.Refresh}>
               <div className='betterScrollRefresh-itme'  ref={this.RefreshChildren} >
                    <div className='down'>{downText}</div>
                    {this.props.children}
                    <div className='up'>{up}</div>
                </div> 
           </div>
        )
    }
    componentDidMount(){
        let { DropdownRefresh , upRefresh , id } = this.props;
        this.RefreshChildren.current.style.minHeight = (this.Refresh.current.offsetHeight + 100) + 'px';
        let param = {
            click:true,
            tap:true,
            probeType:3,
            scrollY:true,
            scrollX:false,
            startY:-50
        }
        this.scroll = new Better(this.Refresh.current,param);
        this.scroll.on('beforeScrollStart',()=>{
            this.scroll.refresh();
        })
        this.scroll.on('scroll',({y})=>{
            //处理下拉刷新
            this.state.downText === '下拉刷新'  &&  y > 0 && this.setState({downText:'释放立即刷新'});
            //处理上拉加载
            this.state.up === '上拉加载更多' && y < this.scroll.maxScrollY && this.setState({up:'释放立即加载'});
        })
        this.scroll.on('scrollEnd',()=>{
            //判断是否正在刷新或拉取更多数据，tuer直接return
            if(this.state.downText === '正在刷新' ||  this.state.up === '正在加载'){
                return false;
            }
            //处理下拉刷新
            if(this.state.downText === '释放立即刷新'){
                this.setState({downText:'正在刷新'});
                DropdownRefresh(id);
                setTimeout(()=>{
                    this.scroll.scrollTo(0,-50,250)
                    this.setState({downText:'下拉刷新'});
                },1500);
            }
            //处理上拉加载
            if(this.state.up === '释放立即加载'){
                if(this.props.children.props.data.length>=this.props.num ){
                    this.state.up==='已经到底了' || this.setState({up:'已经到底了'});
                    return false;
                }
                upRefresh(id);
                this.setState({up:'正在加载'});
                setTimeout(()=>{
                    this.setState({up:'上拉加载更多'});
                },1500);
            }
            
        })
    }
}

export default connect()(BetterScrollRefresh);