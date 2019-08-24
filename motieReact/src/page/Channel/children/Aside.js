import React from 'react'

export default (props)=>{
   let {list} = props
    return (
        <ul className="aside">
            {
                list.map(item=>(
                    <li 
                    className={props.id===item.id ? "active aside-item" : "aside-item"}
                    onClick={()=>(props.leftID(item.id))}
                    key={item.id}>{item.name}</li>
                ))
            }
        </ul>
    )
}