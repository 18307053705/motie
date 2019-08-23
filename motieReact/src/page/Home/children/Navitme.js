import React from 'react';
import { Link } from 'react-router-dom'
let paths=['/category','/channel','/rnking','/free']
export default (props)=>{
    let { list } = props;
    return (
        <div className='headNav'>
            {
                list.map((itme,index)=>(
                    <Link to={paths[index]} className='navItme' key={itme.addressId}>
                        <img alt='' src={itme.imgUrl} />
                        <p   >{itme.name} </p>
                    </Link>
                    
                ))    
            }
        </div>
    )
}