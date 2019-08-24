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
import Banner from '../../componet/Banneritme';




class Home extends React.Component{
    DetaiAction = {
        history:this.props.history,
        toDetailAction:this.toDetailAction
    }
    render(){
        let { bannerList , navList , stronglyList , currentList , collectionList , footerBannerList ,finishList , wirelessList ,newBookList , findList } = this.props;
        return (
            <div className='page' id='home'>
                {/* 轮播图 */}
                <Banner list={bannerList}/>
                {/* 导航 */}
                <Navitme list={navList}/>
                {/* 主编力荐 */}
                <StrongItme list={stronglyList} {...this.DetaiAction}/>
                {/* 本期主打 */}
                <CurrentItme list={currentList} {...this.DetaiAction} pathStr="/category"  pathAction={this.pathAction} />
                {/* 底部轮播 */}
                <Banner list={footerBannerList}/>
                {/* 书友收藏 */}
                <StrongItme list={collectionList} {...this.DetaiAction} />
                {/* 完本精品 */}
                <CurrentItme list={finishList}  {...this.DetaiAction} pathStr="/rnking" pathAction={this.pathAction}/>
                {/* 无线风向榜 */}
                <StrongItme list={wirelessList} {...this.DetaiAction} pathStr="/channel" pathAction={this.pathAction} />
                {/* 新书抢购 */}
                <CurrentItme list={newBookList} {...this.DetaiAction} />
                {/* 发现好书 */}
                <FindItme list={findList} {...this.DetaiAction}  />
            </div>
        )
    }
    componentDidMount(){
        this.props.iboyDate();
    }
    pathAction(path,history){
        history.push(path);
    }
    toDetailAction(path,history){
        history.push(path);
    }
}

const mapstateToProps=(state)=>({
    bannerList:state.home.bannerList,
    navList:state.home.navList,
    stronglyList:state.home.stronglyList,
    currentList:state.home.currentList,
    footerBannerList:state.home.footerBannerList,
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