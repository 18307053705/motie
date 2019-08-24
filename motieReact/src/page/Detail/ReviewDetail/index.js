import React from 'react';
import { connect } from 'react-redux';
import './style.scss';
import BetterScrollRefresh from '../../../componet/BetterScrollRefresh';

import {requestReviewDetailAction , requestDropDownReviewAction} from '../../../store/module/detail';

//头部
import Header from '../children/Header';

//书评列表
import ReviewList from './children/list';

class ReviewDetail extends React.Component{
    render(){
        let {  ReviewDetailDate , num ,history , getReviewDetailData , getMoreReviewAcDate , match } = this.props;
        
        
        let id = match.params.id;
        return (
            <div id='reviewDetail' >
                {/* 头部 */}
                <Header history={history} title='更多书评' isClass/>
                {/* 书评区 */}
                <div className='reviewDetail'>
                <BetterScrollRefresh DropdownRefresh={getReviewDetailData} upRefresh={getMoreReviewAcDate} id={id} num={num}>
                    <ReviewList data={ReviewDetailDate}/>
                </BetterScrollRefresh>
                </div>
                
            </div>
        )
    }
    componentDidMount(){
        let id = this.props.match.params.id
        this.props.getReviewDetailData(id)
    }
    
}

let mapStateToProps=(state)=>({
    ReviewDetailDate:state.detail.ReviewDetailDate,
    num:state.detail.nums
    
    
})
let mapDispatchToProps=(dispatch)=>({
    getReviewDetailData(id){
        dispatch(requestReviewDetailAction(id))
    },
    getMoreReviewAcDate(id){
        dispatch(requestDropDownReviewAction(id))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(ReviewDetail);