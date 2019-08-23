import React from 'react'

export default ()=>{
    let list = [
        {id:9,name:"热销榜"},
        {id:10,name:"热销榜"},
        {id:11,name:"热销榜"},
        {id:12,name:"热销榜"},
        {id:13,name:"热销榜"},
        {id:14,name:"热销榜"},
        {id:15,name:"热销榜"},
        {id:16,name:"热销榜"},
        {id:17,name:"热销榜"},
    ]
    return (
        <ul className="aside">
            {
                list.map(item=>(
                    <li 
                    className="aside-item"
                    key={item.id}>{item.name}</li>
                ))
            }
        </ul>
    )
}