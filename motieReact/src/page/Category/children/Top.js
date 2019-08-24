import React from 'react'

export default class Top extends  React.Component{
     state={
         flag:true
     }
    render(){
    //   let  channel = [
    //         {title:'频道',value:[{id:1,name:'男频'},{id:2,name:'女频'},{id:3,name:'出版'}],id:-1},
    //         {title:'分类',value:[{id:0,name:'全部'},...(this.props.list)],id:-2},
    //         {title:'状态',value:[{id:0,name:'全部'},{id:1,name:'完结'},{id:2,name:'连载'}],id:-3},
    //         {title:'价格',value:[{id:0,name:'全部'},{id:1,name:'免费'},{id:2,name:'付费'}],id:-4}
    //     ]
    let one = [
        {id:1,name:'男频'},{id:2,name:'女频'},{id:3,name:'出版'}
    ]
    let two =[
        {id:0,name:'全部'},...(this.props.list)
    ]
    let three = [
        {id:0,name:'全部'},{id:1,name:'完结'},{id:2,name:'连载'}
    ]
    let four =[
        {id:0,name:'全部'},{id:1,name:'免费'},{id:2,name:'付费'}
    ]
        let {oneACtion,TwoAction,ThreeAction,FourAction,group,sortId,finish,free} = this.props
        return (
            <div className="category_top border-bottom">
                <p className="icon" onClick={this.show}>^</p>
                {
                        <div>
                            <p>频道</p>
                            <div className={this.state.flag?"line spa":"none spa"} >
                            {
                                one.map(item=>(
                                    <span className={group===item.id?"active":""}
                                    onClick={()=>(oneACtion(item.id))} key={item.id}>
                                        {item.name}
                                    </span>
                                ))}
                            </div>
                            <p>分类</p>
                            <div className={this.state.flag?"line spa":"none spa"} >
                                {
                                two.map(item=>(
                                    <span className={sortId===item.id?"active":""}
                                    onClick={()=>(TwoAction(item.id))} key={item.id}>
                                        {item.name}
                                    </span>
                                ))}
                            </div>
                                <p>状态</p>
                                <div  className={this.state.flag?"line spa":"none spa"} >
                                {
                                three.map(item=>(
                                    <span
                                    className={finish===item.id?"active":""}
                                    onClick={()=>(ThreeAction(item.id))} key={item.id}>
                                        {item.name}
                                    </span>
                                ))}</div>
                                <p>频道</p>
                                <div  className={this.state.flag?"line spa":"none spa"} >{
                                four.map(item=>(
                                    <span
                                    className={free===item.id?"active":""}
                                    onClick={()=>(FourAction(item.id))} key={item.id}>
                                        {item.name}
                                    </span>
                                ))
                                // item.value.map((ite,inde)=>(
                                //     <span 
                                //     className={topData[index].Tid===item.id&&topData[index].id===ite.id?"active":''}
                                //     // {this.props.list.name && this.props.list.id}
                                //     onClick={()=>(this.props.setId(ite.id,item.id))}
                                //     key={inde}>{ite.name}</span>
                                // ))
                            }
                           </div>
                        </div>
                   // ))
                }
            </div>
        )
    }
     show = ()=>{
       this.setState({flag:!(this.state.flag)})
    }
}

