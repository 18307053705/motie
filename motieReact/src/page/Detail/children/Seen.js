import React from 'react';
import { connect } from 'react-redux';


const Seen = (props)=>{
    let {data , history , toDetailAction} = props;
    let listDOM = data.map(itme=>(
        <div key={itme.id} className='itme' onClick={()=>toDetailAction(`/detail/${itme.id}`,history)}>
            <img alt='' src={itme.icon} />
            <p>{itme.name}</p>
        </div>
    ))
    return (
        <div className='seen'>
            <h3 className='title'><span>看过这本书的人还看了</span></h3>
            <div className='list'> {listDOM} </div>
        </div>
    )
}

export default connect()(Seen);