import React from 'react';
import { connect } from 'react-redux';
const Header = (props) =>{
    let { history , pathAction , goBackAction , title , isClass}  = props;
    return (
        <div className='hader' style={{background: isClass ? '#fff' : '#DADADA'}}>
            <div className='left' onClick={()=>goBackAction(history)} >
                <span className='icon'>{title}</span>
            </div>
            <div className='rigth'>
                <span className='icon' onClick={()=>pathAction('/search',history)} ></span>
                <span className='icon_2' onClick={()=>pathAction('/home',history)} ></span>
            </div>
        </div>
    )
}

let mapDispatchToProps = (dispatch)=>({
    pathAction(path,history){
        history.push(path)
    },
    goBackAction(history){
        history.goBack();
    }
})
export default connect(mapDispatchToProps)(Header);