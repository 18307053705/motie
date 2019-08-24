import React from 'react';
import { connect } from 'react-redux';
const strongItme = (props)=>{
    let { list , pathAction , pathStr , history , toDetailAction} = props;
    let listDOM = list.dataList  && list.dataList.map(itme=>(
            <div key={itme.bookId} className='itme' onClick={()=>toDetailAction(`/detail/${itme.bookId}`,history)}>
                <img alt='' src={itme.imgUrl} />
                <p>{itme.bookName}</p>
            </div>
        ))
    return (
        <div className='strongItme'>
            <div className='title'><span>{list.name}</span></div>
            <div className='list'>{ listDOM }</div>
            {pathAction && <div className='currentItme_more' onClick={()=>pathAction(pathStr,history)}>查看更多</div>}
        </div>
    )
}
export default connect()(strongItme)