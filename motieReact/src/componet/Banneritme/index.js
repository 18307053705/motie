/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable array-callback-return */
import React from 'react';
// import {connect} from 'react-redux';
import './style.scss'



class BannerItme extends React.Component{
    d= React.createRef();
    render(){
        let { list } = this.props;
        console.log(list)
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
    componentDidMount(){
        // console.log(this.d.current)
        this.mySwiper = new window.Swiper(this.d.current,{
            pagination:'.swiper-pagination',
            speed:1000,
            loop: true,
            autoplay:true
        })
        // console.log(this.mySwiper)
        this.props.list.length > 0 && this.mySwiper.update();
            
    }

}

// let mapStateToProps=(state)=>({
//     list:state.home.bannerList
// })


// export default connect(mapStateToProps)(BannerItme);
export default BannerItme;