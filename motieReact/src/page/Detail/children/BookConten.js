import React from 'react';
import { connect } from 'react-redux';


const BookConten = (props)=>{
    let {data , id ,getCatalogData} = props;
    return (
        <div className='bookConten'>
            <div className='text'>
                {data.introduce}
            </div>
            {
                data.lastChapterList && 
                <div className='data' onClick={()=>getCatalogData(id)} >
                    <span>目录</span>
                    <p>连载至 {data.lastChapterList.name}</p>
                    <i>更新于 {data.lastChapterList.chapterShowTime}</i>
                    <em></em>
                </div>
            }
        </div>
    )
}

export default connect()(BookConten);