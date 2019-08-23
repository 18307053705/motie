import React from 'react';
export default (props)=>{
    let { list } = props;
    let listDOM = list.dataList  && list.dataList.map(itme=>(
            <div key={itme.bookId} className='itme'>
                <img alt=''className='img' src={itme.imgUrl} />
                <h3>{itme.bookName}</h3>
                <h4>
                    <img alt='' src={itme.userImgUrl} />
                    <span>{itme.penName}</span>
                </h4>
            </div>
        ))
    return (
        <div className='findItme'>
            <div className='title'><span>{list.name}</span></div>
            <div className='list'>{ listDOM }</div>
        </div>
    )
}