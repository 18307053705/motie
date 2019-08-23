import React from 'react';
import { connect } from 'react-redux';
import { requestHomeIboyDate } from '../../store/module/home';
import './style.scss';
//导航
import Navitme from './children/Navitme';
//主编力荐,书友收藏,无线风向榜
import StrongItme from './children/StrongItme';
//本期主打,完本精品，新书抢购
import CurrentItme from './children/CurrentItme';
//发现好书
import FindItme from './children/FindItme';
//轮播图,暂时没有





class Home extends React.Component{
    render(){
        let { navList , stronglyList , currentList , collectionList ,finishList , wirelessList ,newBookList , findList , history} = this.props;
        return (
            <div className='page' id='home'>
                {/* 导航 */}
                <Navitme list={navList}/>
                    {/* 主编力荐 */}
                    <StrongItme list={stronglyList} />
                    {/* 本期主打 */}
                    <CurrentItme list={currentList}  pathAction={()=>this.pathAction('/category',history)} />
                    {/* 书友收藏 */}
                    <StrongItme list={collectionList} />
                    {/* 完本精品 */}
                    <CurrentItme list={finishList} pathAction={()=>this.pathAction('/rnking',history)}/>
                    {/* 无线风向榜 */}
                    <StrongItme list={wirelessList} pathAction={()=>this.pathAction('/channel',history)} />
                    {/* 新书抢购 */}
                    <CurrentItme list={newBookList} />
                    {/* 发现好书 */}
                    <FindItme list={findList} />
            </div>
        )
    }
    componentDidMount(){
        this.props.iboyDate();
    }
    pathAction(path,history){
        history.push(path);
    }
}

const mapstateToProps=(state)=>({
    bannerList:state.home.bannerList,
    navList:state.home.navList,
    stronglyList:state.home.stronglyList,
    currentList:state.home.currentList,
    collectionList:state.home.collectionList,
    finishList:state.home.finishList,
    wirelessList:state.home.wirelessList,
    newBookList:state.home.newBookList,
    findList:state.home.findList
    
});

const mapDispatchToProps=(dispatch)=>({
    iboyDate(){
        dispatch(requestHomeIboyDate());
    }
});

export default connect(mapstateToProps,mapDispatchToProps)(Home);