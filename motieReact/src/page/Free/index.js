import React from 'react';
import {connect} from 'react-redux';
import Brand from '../../componet/Brand';
import { requestfreeDate } from '../../store/module/commonality';
import  Boutique from '../Ranking/childen/Boutique'
import  Newest from '../Ranking/childen/Newest' 
import '../Ranking/style.scss'



class Free extends React.Component{

    render(){
        let { freelist } = this.props;
        let data=freelist&&freelist.shift()
        return (
            <div>
                {data && <Boutique data={data} judge={true}/>}  {/*精品免费*/}
                {freelist && <Newest Rankinglist={freelist} judge={true}/>}{/*非精品免费*/}



                <Brand />
                
            </div>
        )
       
    }
    componentDidMount(){
        this.props.b()
        
    }

    
}


let mapStateToProps=(state)=>({
    brandlist:state.commonality.brandlist,
    freelist:state.commonality.freelist
})


const mapDispatchToProps=(dispatch)=>({
    b(){
        dispatch(requestfreeDate())
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Free); 

// export default Free;




