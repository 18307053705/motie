import React, { Component , lazy , Suspense } from 'react';
import { BrowserRouter as Router , Route , Redirect } from 'react-router-dom';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';


//公共页面
import HaderItme from './componet/HeaderItme';
import LoadItme from './componet/Load';
import ErrorBoundary from './componet/ErrorBoundary';

//根页面
const Home = lazy(()=>import('./page/Home'));
const Category = lazy(()=>import('./page/Category'));
const Channel = lazy(()=>import('./page/Channel'));
const Ranking = lazy(()=>import('./page/Ranking'));
const Free = lazy(()=>import('./page/Free'));


const   Connet = ()=>(
            <Suspense fallback={<LoadItme />}>
                <Router>
                    <HaderItme />
                    <CacheSwitch>
                        <Route path='/' exact  render={()=>(<Redirect to="/home"/>)} />
                        <CacheRoute path='/home' component={Home} />
                        <CacheRoute path='/category' component={Category} />
                        <CacheRoute path='/channel' component={Channel} />
                        <CacheRoute path='/rnking' component={Ranking} />
                        <CacheRoute path='/free' component={Free} />
                    </CacheSwitch>
                </Router>
            </Suspense>
        ) 

class App extends Component {
    render() {
        return (
            <ErrorBoundary>
                <Connet/>
            </ErrorBoundary>
           
            
        )
    }
}

export default App;
