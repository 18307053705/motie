import React from 'react';
export default (props)=>{
    let { list ,pathAction } = props;
    let listDOM = list.dataList  && list.dataList.map(itme=>(
            <div key={itme.bookId} className='itme'>
                <img className='img' alt='' src={itme.imgUrl} />
                <div className='text'>
                    <h3>{itme.bookName}</h3>
                    <p>{itme.introduction}</p>
                    <div className='userImg'>
                        <div className='username'>
                            <img alt='' src={itme.userImgUrl} />
                            <b>{itme.penName}</b>
                        </div>
                        <span>
                            {itme.category}
                        </span>
                    </div>
                </div>

            </div>
        ))
    return (
        <div className='currentItme'>
            <div className='title'><span>{list.name}</span></div>
            <div className='list'>{ listDOM }</div>
            {pathAction && <div className='currentItme_more' onClick={pathAction}>查看更多</div>}
        </div>
    )
}