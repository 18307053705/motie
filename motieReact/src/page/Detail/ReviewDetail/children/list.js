import React from 'react';
import { connect } from 'react-redux';


const List = (props)=>{
    let {data } = props;
    let listDOM = data.map((itme,index)=>(
        <div className='itme' key={index}>
            <div className='img'>
                <img src={itme.userIcon} alt='' />
            </div>
            <div className='user'>
                <h3 className='userName'>{itme.userName}</h3>
                <p className='text'>{itme.summary}</p>
                <div className='date'>
                    <span>{itme.reviewShowTime}</span>
                    <em>{itme.score}</em>
                </div>
            </div>
        </div>
    ))
    return (
        <div className='bookReviewDetail'>
            <div className='list'>{listDOM}</div>
        </div>
    )
}

export default connect()(List);