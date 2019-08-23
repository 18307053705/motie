//首页

import api from '../../utils/api';
import { get } from '../../utils/request';

//tyeps
const BANNer_LIST = 'home_banner_list';
const NAV_LIST = 'home_nav_list';


//初始化state
const Initiali = {
        bannerList:[],
        navList:[]
}

//默认输出
export default (state=Initiali,action)=>{
        switch(action.type){
                case BANNer_LIST:{
                        return {
                             ...state,
                           bannerList:action.value
                        }
                }
                case NAV_LIST:{
                        return {
                             ...state,
                           navList:action.value
                        }
                }
                default :
                        return state
        }

}


//同步代码
//导航
const navAction=(value)=>({
        type:NAV_LIST,
        value
})
//轮播图数据
const bannerAction=(value)=>({
        type:BANNer_LIST,
        value
})




//异步代码

export const requestHomeIboyDate=()=> async (dispatch)=>{
        try {
                //获取数据
                let {data} = await  get(api.HOME_IBOY_DATE);
                //遍历所需数据
                let request = data.items.map(({id,dataSourceList,title})=>({id,dataSourceList,title}));
                console.log(request)
                //取出轮播图
                let banner = request[0].dataSourceList.map((ele,index) =>((index===0)?JSON.parse(ele.dataList)[1]:JSON.parse(ele.dataList)[0]));
                banner=banner.map(({name,imgUrl,addressId})=>({name,imgUrl,addressId}));
                dispatch(bannerAction(banner))
                //取导航数据
                let nav = request[2].dataSourceList[0].dataList;
                nav = JSON.parse(nav).map(({addressId,imgUrl,name})=>({addressId,imgUrl,name}));
                dispatch(navAction(nav))
                
                // console.log(nav)
        } catch (error) {
                
        }
}
