import React from 'react';
export default (props)=>{
    let { list , pathAction } = props;
    let listDOM = list.dataList  && list.dataList.map(itme=>(
            <div key={itme.bookId} className='itme'>
                <img alt='' src={itme.imgUrl} />
                <p>{itme.bookName}</p>

            </div>
        ))
    return (
        <div className='strongItme'>
            <div className='title'><span>{list.name}</span></div>
            <div className='list'>{ listDOM }</div>
            {pathAction && <div className='currentItme_more' onClick={pathAction}>查看更多</div>}
        </div>
    )
}