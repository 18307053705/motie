import React from 'react';
import { connect } from 'react-redux';
const BookInfo = (props) =>{
    let { data  }  = props;
    return (
        <div className='bookinfo'>
           <div className='book_conten'>
               <div className='cont_img'>
                   <img src={data.icon} alt='' />
               </div>
               <div className='cont_text'>
                    <h3>{data.name}</h3>
                    <p>{data.authorName} | {data.sortName} | {data.status}</p>
                    <p>{(data.words+'').substr(0,2)}万字 | {data.discountPrice}</p>
                    <p>粉丝数: {data.followCount}</p>
                    <p>点击数: {data.visitCount}</p>
               </div>
           </div>
           <div className='book_itme'>
               <div className='text_1'>加入书架</div>
               <div className='text_2'>立即阅读</div>
           </div>
           <div className="book_itme">
               <div>
                   <em></em>
                   <span>打赏</span>
                   <b>{`(${data.supportCount})`}</b>
                   
                </div>
               <div>
                   <i></i>
                   <span>推荐</span>
                   <b>{`(${data.reward})`}</b>
                </div>
           </div>
        </div>
    )
}


export default connect()(BookInfo);