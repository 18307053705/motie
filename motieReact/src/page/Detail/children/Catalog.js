import React from 'react';
import { connect } from 'react-redux';

class Catalog extends React.Component{

        state={
            isIndex:0
        }
        render(){
            let {data } = this.props;
            let listDOM = data.length > 0 && data.slice(1).map((itme,index)=>(
                <li key={index} className={this.state.isIndex === index ? 'active' : ''} onClick={()=>this.indexAction(index)}> 
                    <span>{itme.name}</span>
                    { itme.free && <i>免费</i>}
                </li>
            ))
            return (
                <div className='detail_catalog'>
                    <div className='catalog'>
                        <div className='header'>
                            <i></i>
                            <span>目录</span>
                            <em>正序</em>
                        </div>
                        <div className='title'>作品正文卷</div>
                        <div className='list'>
                            { listDOM }
                        </div>
                        
                    </div>
                </div>
            )
        }
        componentDidMount(){
            this.props.getCatalogData(this.props.id);
        }
        indexAction =(index)=>{
            this.setState({isIndex:index});
        }
}

export default connect()(Catalog)