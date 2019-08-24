import React from 'react';//精品完本

export default (props)=>{

     let data=props.data
     let judge=props.judge

    
    
    return (
       
        <ul>
        {
             <li>
                        <h2 className="classify-title left-pan"> 
                            <span>{data.name}</span>
                            {
                                judge?(
                                    <span className="classify-title-judge">
                                        <i>12</i>:
                                        <i>25</i>:
                                        <i>46</i>
                                    </span>
                                ):''
                            }
                        </h2>
                        <div className="classify-bottom">
                            {
                            data.dataSourceList.map(link=>{
                                return (
                                <div className="classify-top" key={link.bookId}>
                                    <img className="classify-top-img" src={link.imgUrl} alt="....."/>
                                    <h4 className="classify-top-hfour">{link.bookName}</h4>
                                </div>
                                )
                            }) 
                            }
                        </div>
                    </li>
        }
        </ul>
    )
}