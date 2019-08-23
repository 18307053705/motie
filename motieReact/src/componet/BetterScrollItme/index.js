import React from 'react';
import Better from 'better-scroll';

class BetterScroll extends React.Component{
    warpRef = React.createRef();
    render(){
        return (
           <div className='warp' ref={this.warpRef}>
               <div>
                   {this.props.children}
               </div>
           </div>
        )
    }
    componentDidMount(){
        this.scroll = new Better(this.warpRef.current,{
            click:true,
            tap:true
        })
        this.scroll.on('beforeScrollStart',()=>{
            this.scroll.refresh();
        })
    }
}

export default BetterScroll;