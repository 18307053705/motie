import React from 'react';
import { connect } from 'react-redux';
import './style.scss';
import {requestBookDateAction , requestCatalogDataAction} from '../../store/module/detail';

//头部
import Header from './children/Header';
//作品信息
import BookInfo from './children/BookInfo';
//作品简介
import BookConten from './children/BookConten';
//看过的其他作品
import Seen from './children/Seen';
//书评区
import BookReview from './children/BookReview';
//目录
import Catalog from './children/Catalog';
class Detail extends React.Component{
    render(){
        let { bookData , bookContenDate , bookSeenDate , bookRevoewDate ,history , getCatalogData , match , CatalogDaa } = this.props;
        let Action = {
            history:history,
            toDetailAction:this.toDetailAction
        }
        return (
            <div id='detail' >
                {/* 头部 */}
                <Header history={history} title='作品详情'/>
                {/* 作品信息 */}
                <BookInfo data={bookData} />
                {/* 作品简介 */}
                <BookConten data={bookContenDate} id={match.params.id} getCatalogData={getCatalogData}/>
                {/* 看过的其他作品 */}
                {bookSeenDate.length > 0 && <Seen data={bookSeenDate}  />}
                {/* 书评区 */}
                <BookReview data={bookRevoewDate} {...Action}  />
                {/* 目录 */}
                <Catalog data={CatalogDaa} id={match.params.id} getCatalogData={getCatalogData} />
            </div>
        )
    }
    componentDidMount(){
        let id = this.props.match.params.id
        this.props.getDetailData(id)
    }
    toDetailAction(path,history){
        history.push(path);
    }
}

let mapStateToProps=(state)=>({
    bookData:state.detail.bookData,
    bookContenDate:state.detail.bookContenDate,
    bookSeenDate:state.detail.bookSeenDate,
    bookRevoewDate:state.detail.bookRevoewDate,
    CatalogDaa:state.detail.CatalogDaa
    
})
let mapDispatchToProps=(dispatch)=>({
    getDetailData(id){
        dispatch(requestBookDateAction(id))
    },
    getCatalogData(id){
        dispatch(requestCatalogDataAction(id))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Detail);