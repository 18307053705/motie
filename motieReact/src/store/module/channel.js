import api from '../../utils/api'
import {get} from '../../utils/request'
//全本

let page =1
let count =10

//types
const LEFT_DATA = 'channer/left/data'
const MAIN_LIST= 'channer/main_list'
const MORE_LIST = 'channer/more_list'
//初始化state
const Initiali = {
        leftList:[],
        list:[],
        canLoadMore:true,
        noData:true
}

//默认输出
export default (state=Initiali,action)=>{
        switch(action.type){
            case LEFT_DATA :
                return {
                        ...state,
                        leftList:action.value
                }
            case MAIN_LIST :
                    let noData = action.value.length!==0
                return {
                        ...state,
                        noData:noData,
                        list:action.value
                }
            case MORE_LIST :
                    let bool = action.value.length===count
                    
                    return {
                            ...state,
                            canLoadMore:bool,
                            list:[...state.list,...action.value]
                    }
            default :
                return state
        }

}


//同步代码
const leftList = (value)=>({
type:LEFT_DATA,
value
})
//主要数据
const Mlist = (value)=>({
        type:MAIN_LIST,
        value
        })
//加载更多数据
const moreDate = (value)=>({
        type:MORE_LIST,
        value
})
//异步代码

export const chaneData = (Nid,Lid)=>async (dispatch)=>{
        page=1
        let result = await get(api.CHANNE_LIST,{rankType:Lid,sex:Nid,pageNo:page,siteId:99,timeLimit:4,group:1,pageSize:count})
        let left = result.data.rank.map(({name,id})=>({name,id}))
        dispatch(leftList(left))
        let list =await result.data.bookList.map(({name,introduce,authorName,authorIcon,id,icon})=>({name,introduce,authorName,authorIcon,id,icon}))
        dispatch(Mlist(list))
}
//请求更多
export const moreAction = (Nid,Lid) => async (dispatch)=>{
        page++;
        let result = await get(api.CHANNE_LIST,{rankType:Lid,sex:Nid,pageNo:page,siteId:99,timeLimit:4,group:1,pageSize:count})
        let aalist = result.data.bookList.map(({name,introduce,authorName,authorIcon,id,icon})=>({name,introduce,authorName,authorIcon,id,icon}))
        dispatch(moreDate(aalist))

}
