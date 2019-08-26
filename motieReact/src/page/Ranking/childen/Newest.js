import React from 'react'; //非精品完本

export default (props)=>{
     let Rankinglist=props.Rankinglist
     let judge=props.judge
    return (
        <ul>
                    {
                        Rankinglist.map(itme=>{
                            return (
                                <li key={itme.seqNo} className="classify">
                                    <h2 className="classify-title">
                                    <span>{itme.name}</span>
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
                                    {itme.dataSourceList.map(all=>{
                                        return (
                                            <div key={all.bookId} className="classify-details">
                                                <img className="classify-details-img" src={all.imgUrl} alt="....."/>
                                                <h3 className="classify-details-hthree">{all.bookName}</h3>
                                                <p className="classify-details-p">{all.introduction}</p>
                                                <div className="classify-bottom">
                                                    <img className="classify-bottom-img" src={all.userImgUrl} alt=""/>
                                                    <span className="classify-bottom-span">{all.penName}</span>
                                                    <i className="classify-bottom-i">{all.category}</i>
                                                </div>
                                            </div>
                                        )
                                    })
                                        
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
    )
    
}