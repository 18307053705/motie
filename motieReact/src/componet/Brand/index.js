/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable array-callback-return */
import React from 'react';
import {connect} from 'react-redux';
import { requestCommonalityDate } from '../../store/module/commonality';
import { Link} from 'react-router-dom';
import './style.scss'


class Brand extends React.Component{
    render(){
        let { brandlist } = this.props;
        // console.log(brandlist,12)
        return (
            <div className="brand">
                <dl className="brand-area">
                    <dt className="brand-title">
                        <h3 className="brand-title-top">磨铁文学旗下品牌</h3>
                        <i className="brand-title-border"></i>
                    </dt>

                    {
                        brandlist.map(itme=>{
                            // console.log(itme)
                            return (
                                <dd className="brand-content" key={itme.id} >
                                    <Link to="/home">
                                        <img className="brand-img" src={itme.siteIconUrl} alt="123"/>
                                    </Link>
                                    <h6 className="brand-hsix">{itme.siteName}</h6>
                                    <p className="brand-p">{itme.introduction}</p>
                                </dd>
                            )
                        })
                    }
                   
                </dl>
            </div>
        )

    }
    componentDidMount(){
        this.props.b()
        
    }


}



 let mapStateToProps=(state)=>({
    brandlist:state.commonality.brandlist
})


const mapDispatchToProps=(dispatch)=>({
    b(){
        dispatch(requestCommonalityDate())
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Brand); 

//  export default Brand;