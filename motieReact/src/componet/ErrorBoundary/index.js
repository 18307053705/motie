import React from 'react';

const Long =  ()=>{
    return (
        <div style={{width:"100%",height:"100%",background:"#ccc"}}>你的网页背外星人抓走了</div>
    )
}

class ErrorBoundary extends React.Component{
    state = {
        isError: false
    }
    render() {
        return this.state.isError ? <Long /> : this.props.children;
    }
    componentDidCatch(){
        this.setState({isError: true});
    }
}

export default ErrorBoundary;