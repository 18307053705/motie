import React from 'react';
import Header from './children/Header'
import {connect} from 'react-redux'
import Aside from './children/Aside'
import {chaneData} from '../../store/module/channel'
import './style.scss'

class Wholebook extends React.Component{
    state={
        selectId:1
    }
    render(){
        let {selectId} = this.state
        return (
            <div className="page pagetop" id="class">
                <Header id={selectId} leftAction={this.props.history.goBack} titleAction={this.titleHandle}/>
                <div className="whole">
                <Aside/>

                </div>

            </div>
        )
       
    }
    titleHandle=(id)=>{
        this.setState({selectId:id})
    }
    componentDidMount(){
        this.props.chaneInitData()
       
    }
}

const mapStateToProps=(state)=>({

})
const mapDispatchToProps=(dispatch)=>({
    chaneInitData(){
        dispatch(chaneData())
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Wholebook);