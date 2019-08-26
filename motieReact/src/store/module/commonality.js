import api from '../../utils/api';
import { get } from '../../utils/request';

//磨铁文学旗下品牌
const BRAND_LIST = 'commonality_brand_list';
//免费
const FREE_LIST = 'commonality_free_list';
//全本
const RANKING_LIST = 'commonality_ranking_list';

const commonality = {
    brandlist:[],//磨铁文学旗下品牌
    freelist:[],//免费
    Rankinglist:[]//完本
}


export default (state=commonality,action)=>{
    switch(action.type){
        //磨铁文学旗下品牌
        case BRAND_LIST:{
                return {
                     ...state,
                     brandlist:action.value
                }
        }
        case FREE_LIST:{
            return {
                 ...state,
                 freelist:action.value
            }
        }
        case RANKING_LIST:{
            return {
                 ...state,
                 Rankinglist:action.value
            }
        }
        default :
                return state
    }
}

//磨铁文学旗下品牌
const cmmAction=(value)=>({
    type:BRAND_LIST,
    value
})
//免费
const freeAction=(value)=>({
    type:FREE_LIST,
    value
})
//全本
const rankingAction=(value)=>({
    type:RANKING_LIST,
    value
})


export const requestCommonalityDate=()=> async (dispatch)=>{
    try{
            //获取数据
            let {items} = await  get(api.BRAND_LIST);  
            // console.log(items,123456)
            //磨铁文学旗下品牌
            dispatch(cmmAction(items))
    }catch (error) {
            console.log('数据请求错误')
    }
}

export const requestfreeDate=()=> async (dispatch)=>{
    try{
            //获取数据
            let {data} = await  get(api.HOME_FREE_DATE);

            let Freeitme = data.items.map(all=>{
                return {
                    name:all.name,
                    seqNo:all.seqNo,
                    title:all.title,
                    dataSourceList:JSON.parse(all.dataSourceList[0].dataList).map(({bookId,category,bookName,introduction,penName,imgUrl,userImgUrl})=>({bookId,category,bookName,introduction,penName,imgUrl,userImgUrl}))
                }
            })
            //免费
            dispatch(freeAction(Freeitme))
    }catch (error) {
            console.log('数据请求错误')
    }
}

export const requestRankingDate=()=> async (dispatch)=>{
    try{
            //获取数据
            let {data} = await  get(api.HOME_WHOLEBOOD_DATE);

            // console.log(data,123456)
            let Rankingitme = data.items.map(all=>{
                return {
                    name:all.name,
                    seqNo:all.seqNo,
                    title:all.title,
                    dataSourceList:JSON.parse(all.dataSourceList[0].dataList).map(({bookId,category,bookName,introduction,penName,imgUrl,userImgUrl})=>({bookId,category,bookName,introduction,penName,imgUrl,userImgUrl}))
                }
            })
            // console.log(Rankingitme,1234562222)
            //全本
            dispatch(rankingAction(Rankingitme))
    }catch (error) {
            console.log('数据请求错误')
    }
}

