import React from 'react';
import {connect} from 'react-redux';
import { requestRankingDate } from '../../store/module/commonality';
import Brand from '../../componet/Brand'
import  Boutique from './childen/Boutique'
import  Newest from './childen/Newest'

import './style.scss'


class Ranking extends React.Component{
    render(){

        let { Rankinglist } = this.props;
        let data=Rankinglist&&Rankinglist.shift()
        
        return (
            <div>
               {data && <Boutique data={data}/>}  {/*精品完本*/}
               {Rankinglist && <Newest Rankinglist={Rankinglist}/>}{/*非精品完本*/}
                
                <Brand/>{/*磨铁文学旗下品牌*/}
            </div>

        )
       
    }
    componentDidMount(){
        this.props.b()
        
    }
}


let mapStateToProps=(state)=>({
    brandlist:state.commonality.brandlist,
    Rankinglist:state.commonality.Rankinglist
})


const mapDispatchToProps=(dispatch)=>({
    b(){
        dispatch(requestRankingDate())
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Ranking);

// export default Ranking;