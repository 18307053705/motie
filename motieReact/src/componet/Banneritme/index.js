import React from 'react';
import {connect} from 'react-redux';
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
                            <img src={imte.imgUrl} alt="这是。。。" className="isimg"/>
                        </div>
                    )})
                }
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )

    }
    componentDidUpdate(){
        this.mySwiper && this.mySwiper.destroy();
        let falg = this.props.list.length === 1 ? false : true;
        if(this.props.list.length > 0){
            this.mySwiper = new window.Swiper(this.d.current,{
                pagination:'.swiper-pagination',
                speed:1000,
                loop: falg,
                autoplay:1000
            })
        }
    }
}

export default connect()(BannerItme);