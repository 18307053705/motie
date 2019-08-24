//首页

import api from '../../utils/api';
import { get } from '../../utils/request';

//tyeps
//轮播图
const BANNer_LIST = 'home_banner_list';
//导航
const NAV_LIST = 'home_nav_list';    /**------------------------------------------------------- */
//主编力荐
const STRONGLY_LIST = 'home_strongly_list';
//本期主打分类
const CURRENT_LIST = 'home_current_list';
//书友收藏
const COLLECTION_LIST = 'home_collection_list';
//完本精品
const FINISH_LIST = 'home_finish_list';
//无线风向榜
const WiRELESS_LIST = 'home_wireless_list';
//新书抢购
const NEW_BOOK_LIST = 'home_new_book_list';
//发现好书
const FIND_LIST = 'home_find_list';

//初始化state
const Initiali = {
        bannerList:[],
        navList:[],          /**----------------------------------------------------------------- */
        stronglyList:{},
        currentList:{},
        collectionList:{},
        finishList:{},
        wirelessList:{},
        newBookList:{},
        findList:{}
}

//默认输出
export default (state=Initiali,action)=>{
        switch(action.type){
                //轮播图
                case BANNer_LIST:{
                        return {
                             ...state,
                           bannerList:action.value
                        }
                }
                //导航
                case NAV_LIST:{          /**------------------------------------------------ */
                        return {
                             ...state,
                           navList:action.value
                        }
                }
                //主编力荐
                case STRONGLY_LIST:{
                        return {
                             ...state,
                             stronglyList:action.value
                        }
                }
                //本期主打分类
                case CURRENT_LIST:{
                        return {
                             ...state,
                             currentList:action.value
                        }
                }
                //书友收藏
                case COLLECTION_LIST:{
                        return {
                             ...state,
                             collectionList:action.value
                        }
                }
                //完本精品
                case FINISH_LIST:{
                        return {
                             ...state,
                             finishList:action.value
                        }
                }
                //完本精品
                case WiRELESS_LIST:{
                        return {
                             ...state,
                             wirelessList:action.value
                        }
                }
                //新书抢购
                case NEW_BOOK_LIST:{
                        return {
                             ...state,
                             newBookList:action.value
                        }
                }
                //发现好书
                case FIND_LIST:{
                        return {
                             ...state,
                             findList:action.value
                        }
                }
                
                default :
                        return state
        }

}


//同步代码
//导航
const navAction=(value)=>({/**-------------------------------------------- */
        type:NAV_LIST,
        value
})
//轮播图数据
const bannerAction=(value)=>({
        type:BANNer_LIST,
        value
})
//主编力荐
const stronglyAction=(value)=>({
        type:STRONGLY_LIST,
        value
})
//本期主打分类
const currentAction=(value)=>({
        type:CURRENT_LIST,
        value
})
//书友收藏
const collectionAction=(value)=>({
        type:COLLECTION_LIST,
        value
})
//完本精品
const finishAction=(value)=>({
        type:FINISH_LIST,
        value
})
//无线风向榜
const wirelessAction=(value)=>({
        type:WiRELESS_LIST,
        value
})
//新书抢购
const newBookAction=(value)=>({
        type:NEW_BOOK_LIST,
        value
})
//发现好书
const findAction=(value)=>({
        type:FIND_LIST,
        value
})
//处理相同数据函数





const fnAction=(request,keyArr,fn,dispatch,str)=>{
        let dataList = request.dataSourceList[0].dataList;
        let name = request.dataSourceList[0].name.split('-').pop() + (str || '') ;
        dataList = JSON.parse(dataList).map(item=>{
                let obj = {};
                keyArr.forEach(key =>{
                        obj[key]=item[key]
                });
                return obj;
        });
        let data = {
                dataList,
                name
        }
        dispatch(fn(data));
}




//异步代码
export const requestHomeIboyDate=()=> async (dispatch)=>{
        try {
                //获取数据
                let {data} = await  get(api.HOME_IBOY_DATE);
                console.log(data)
                //遍历所需数据
                let request = data.items.map(({id,dataSourceList,title})=>({id,dataSourceList,title}));
                console.log(request,111111122222)
                //取出轮播图
                let banner = request[0].dataSourceList.map((ele,index) =>((index===0)?JSON.parse(ele.dataList)[1]:JSON.parse(ele.dataList)[0]));
                banner=banner.map(({name,imgUrl,addressId})=>({name,imgUrl,addressId}));
                dispatch(bannerAction(banner))
                //取导航数据
                let nav = request[2].dataSourceList[0].dataList;
                nav = JSON.parse(nav).map(({addressId,imgUrl,name})=>({addressId,imgUrl,name}));
                dispatch(navAction(nav))
                console.log(nav,1111111)/**------------------------------------------------------------ */
                //主编力荐
                fnAction(request[3],['bookName','bookId','imgUrl'],stronglyAction,dispatch);
                //本期主打分类
                fnAction(request[4],['bookName','bookId','imgUrl','userImgUrl','introduction','penName','category'],currentAction,dispatch,'分类');
                //书友收藏
                fnAction(request[6],['bookName','bookId','imgUrl'],collectionAction,dispatch);
                //完本精品
                fnAction(request[7],['bookName','bookId','imgUrl','userImgUrl','introduction','penName','category'],finishAction,dispatch);
                //无线风向榜
                fnAction(request[8],['bookName','bookId','imgUrl'],wirelessAction,dispatch);
                //新书抢购
                fnAction(request[9],['bookName','bookId','imgUrl','userImgUrl','introduction','penName','category'],newBookAction,dispatch);
                //无线风向榜
                // let dataListDate = request[10].dataSourceList[0].dataList;
                // console.log(JSON.parse(dataListDate))
                fnAction(request[10],['bookName','bookId','imgUrl','penName','userImgUrl'],findAction,dispatch);
                
        } catch (error) {
                
        }
}



