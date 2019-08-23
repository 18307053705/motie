/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable array-callback-return */
import React from 'react';
// import {connect} from 'react-redux';
import './style.scss'



class BannerItme extends React.Component{
    d= React.createRef();

    render(){
        let { list } = this.props;
        return (
            <div className="swiper-container" ref={this.d}>
                <div className="swiper-wrapper">
                { 
                    list.map(imte=>{
                    return (
                        <div key={imte.addressId} className="swiper-slide">
                            {/* <img src={imte.imgUrl} alt="这是。。。" className="isimg"/> */}
                            <p>{imte.imgUrl}</p>
                        </div>
                    )})
                }
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
    componentDidMount(){
        this.mySwiper = new window.Swiper(this.d.current,{
            pagination:'.swiper-pagination',
            speed:1000,
            loop: true,
            autoplay:true
        })
        this.props.list.length > 0 && this.mySwiper.update();
    }

}
export default BannerItme;