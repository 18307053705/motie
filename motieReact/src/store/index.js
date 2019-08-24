
import { createStore , combineReducers , compose , applyMiddleware } from 'redux';

//引入thunk可在dispatch中使用函数
import thunk from 'redux-thunk';


//合并多个reducer
import home from './module/home';
import category from './module/category';
import channel from './module/channel';
import ranking from './module/ranking';
import free from './module/free';
import detail from './module/detail';
import commonality from './module/commonality';


const reducer = combineReducers({
    home,
    category,
    channel,
    ranking,
    free,
    detail,
    commonality
})


// 使用redux开发者工具
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 输出store
export default createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));



