import React from 'react';
import { connect } from 'react-redux';
const CurrentItme =  (props)=>{
    let { list ,pathAction , pathStr , history , toDetailAction} = props;
    let listDOM = list.dataList  && list.dataList.map(itme=>(
            <div key={itme.bookId} className='itme' onClick={()=>toDetailAction(`/detail/${itme.bookId}`,history)}>
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
            {pathAction && <div className='currentItme_more' onClick={()=>pathAction(pathStr,history)}>查看更多</div>}
        </div>
    )
}



export default connect()(CurrentItme)