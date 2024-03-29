import React from 'react';
import {  NavLink } from 'react-router-dom'
import './style.scss'
export default (props)=>{
    let list = [
        {value:'男生',path:'/channel/106?siteId=99'},
        {value:'女生',path:'/channel/108?siteId=99'},
        {value:'出版',path:'/channel/110?siteId=99'},
    ]
    let showDOM = list.map(itme=>(
        <NavLink className='itme' key={itme.value} to={itme.path}>{itme.value}</NavLink>
    ))
    return (
        <div id='header'>
           <div className='img'>
               <img alt='' src='data:image/png;base64,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' />
           </div>
            <div className='text'>
                {showDOM}
            </div>
            <div className='search'>
                <NavLink className='i' to='/search'></NavLink>
                <p>
                    <span></span>
                    <span></span>
                    <span></span>
                </p>
            </div>
        </div>
    )
}