import React from 'react'

export default (props)=>{
    let titleList = [
        {id:1,name:'男生',},
        {id:2,name:'女生',},
        {id:3,name:'出版',},
    ]
    let {leftAction,titleAction,id} = props
    return (
        <div className="class-header border-bottom">
            <div className="left" onClick={leftAction}>
                <span>&lt;</span>
            </div>
            <div className="title">
                {
                    titleList.map(item=>(
                        <span 
                        className={item.id===id?'active':''}
                        onClick={()=>(titleAction(item.id))}
                        key={item.id}>{item.name}</span>
                    ))
                }
            </div>
            
        </div>
    )
}