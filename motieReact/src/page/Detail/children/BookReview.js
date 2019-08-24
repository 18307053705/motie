import React from 'react';
import { connect } from 'react-redux';


const BookReview = (props)=>{
    let {data , history , toDetailAction} = props;
    let listDOM = data.RevoewDate && data.RevoewDate.map(itme=>(
        <div className='itme' key={itme.reviewId}>
            <div className='img'>
                <img src={itme.userIcon} alt='' />
            </div>
            <div className='user'>
                <h3 className='userName'>{itme.userName}</h3>
                <p className='text'>{itme.content}</p>
                <div className='date'>
                    <span>{itme.reviewShowTime}</span>
                    <em>{itme.score}</em>
                </div>
            </div>
        </div>
    ))
    return (
        <div className='bookReview'>
            <div className='title'>
                <span className='left'><em></em>评论区</span>
                <span className='right'>写评论</span>
            </div>
            <div className='list'>
                {listDOM}
            </div>
            <div className='currentItme_more' onClick={()=>toDetailAction(`/reviewDetail/${data.reviewId}`,history)}> 
                更多书评{`(${data.reviewListCount})`}
            </div>
        </div>
    )
}

export default connect()(BookReview);