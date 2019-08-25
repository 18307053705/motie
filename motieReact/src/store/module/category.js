//分类
import api from '../../utils/api'
import {post} from '../../utils/request'


//types
const CATE_INIT = 'category/init_data'
const CATE_INIT_LIST = 'category/init_LIST'
const CATEGORY_MORE='category/get_more'

//初始化state
const Initiali = {
        list:[],
        initList:[],
        isOver:true
}

//默认输出
export default (state=Initiali,action)=>{
        switch(action.type){
            case CATE_INIT :
                return {
                        ...state,
                        list:action.value
                }
            case CATE_INIT_LIST:
                    let boo = action.value.length===10
                return {
                        ...state,
                        isOver:boo,
                        initList:action.value
                }
           case CATEGORY_MORE :
                let bool = (action.value.length===10)
                return {
                        ...state,
                        isOver:bool,
                        initList:[...state.initList,...action.value]
                }
            default :
                return state
        }

}


//同步代码
const cateInit = (value)=>({
        type:CATE_INIT,
        value
})
const cateInitList=(value)=>({
        type:CATE_INIT_LIST,
        value
})
const getMore =(value)=>({
        type:CATEGORY_MORE,
        value
})


//异步代码
let page =1
export const getInitListAction = (group)=>async (dispatch)=>{
        let result = await post(`${api.CATEGORY_INIT_DATA}?group=${group}&gender=`,{group:group,gender:""})
        let second = result.data.firstSorts[0].secondSorts.map(item=>({id:item.secondId,name:item.secondTitle}))
        dispatch(cateInit(second))
        let Init = await post(api.CATEGORY_ALL_DATA+'?free=0&finish=0&group=1&sortId=0&page=1&pageSize=10')
        let initlist = Init.data.bookList.map(({authorIcon,authorName,recommend,name,icon,id,bookTags})=>({authorIcon,authorName,recommend,name,icon,id,bookTags}))
        dispatch(cateInitList(initlist))
}
export const getListActionHandle = (group,sortId,finish,free) =>async (dispatch)=>{
        page=1
        let result = await post(`${api.CATEGORY_ALL_DATA}?free=${free}&finish=${finish}&group=${group}&sortId=${sortId}&page=${page}&pageSize=10`)
        let list = result.data.bookList.map(({authorIcon,authorName,recommend,name,icon,id,bookTags})=>({authorIcon,authorName,recommend,name,icon,id,bookTags}))
        dispatch(cateInitList(list))


}
export const getMoreAction = (group,sortId,finish,free) =>async (dispatch) =>{
        page++
        let result = await post(`${api.CATEGORY_ALL_DATA}?free=${free}&finish=${finish}&group=${group}&sortId=${sortId}&page=${page}&pageSize=10`)
        let list = result.data.bookList.map(({authorIcon,authorName,recommend,name,icon,id,bookTags})=>({authorIcon,authorName,recommend,name,icon,id,bookTags}))
        dispatch(getMore(list))
}
