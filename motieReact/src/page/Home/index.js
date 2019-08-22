import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { requestHomeIboyDate } from '../../store/module/home';
import './style.scss';

let paths=['/category','/channel','/rnking','/free']

class Home extends React.Component{
    render(){
        let { navList } = this.props
        let navDOM = navList.map((itme,index)=>(
            <Link to={paths[index]} className='navItme' key={itme.addressId}>
                <img alt='' src={itme.imgUrl} />
                <p   >{itme.name} </p>
            </Link>
            
        ))
        return (
            <div className='page' id='home'>
                <div className='headNav'>
                    {navDOM}
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.iboyDate();
    }
}

const mapstateToProps=(state)=>({
    bannerList:state.home.bannerList,
    navList:state.home.navList
});

const mapDispatchToProps=(dispatch)=>({
    iboyDate(){
        dispatch(requestHomeIboyDate());
    }
});

export default connect(mapstateToProps,mapDispatchToProps)(Home);