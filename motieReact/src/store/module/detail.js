//详情
import {get} from '../../utils/request';

//types
//作品信息
const BOOK_DATA_LIST = 'detail_book_data';
//作品内容简介
const BOOK_CONTEN_LIST = 'detai_book_conten_data';
//看过的其他作品
const BOOK_SEEN_LIST = 'detai_seen_data';
//评论区
const BOOK_REVOEW_LIST = 'detai_revoew_data';
//评论区详情
const BOOK_REVOEW_DETAIL_LIST = 'detai_revoew_detail_data';
//最大评论
const BOOK_REVOEW_NUM_LIST = 'detai_revoew_num_data';
//目录信息
const BOOK_CATALOG_DATA_LIST = 'detai_catalog_data';

//初始化state
const Initiali = {
    bookData:[],
    bookContenDate:[],
    bookSeenDate:[],
    bookRevoewDate:[],
    ReviewDetailDate:[],
    nums:0,
    CatalogDaa:[]
}

//默认输出
export default (state=Initiali,action)=>{
        switch(action.type){
            //作品信息
            case BOOK_DATA_LIST:{
                return {
                    ...state,
                    bookData:action.value
                }
            }
            //作品内容简介
            case BOOK_CONTEN_LIST:{
                return {
                    ...state,
                    bookContenDate:action.value
                }
            }
            //看过的其他作品
            case  BOOK_SEEN_LIST:{
                return {
                    ...state,
                    bookSeenDate:action.value
                }
            }
            //评论区
            case  BOOK_REVOEW_LIST:{
                return {
                    ...state,
                    bookRevoewDate:action.value
                }
            }
            //评论区详情
            case  BOOK_REVOEW_DETAIL_LIST:{
                return {
                    ...state,
                    ReviewDetailDate:[...state.ReviewDetailDate,...action.value]
                }
            }
            //最大评论数
            case  BOOK_REVOEW_NUM_LIST:{
                return {
                    ...state,
                    nums:action.value
                }
            }
            //目录信息
            case  BOOK_CATALOG_DATA_LIST:{
                return {
                    ...state,
                    CatalogDaa:action.value
                }
            }
            
            default :
                return state
        }

}


//同步代码
//作品信息
const bookDataAction=(value)=>({
    type:BOOK_DATA_LIST,
    value
})
//作品内容简介
const bookContenAction=(value)=>({
    type:BOOK_CONTEN_LIST,
    value
})
//看过的其他作品
const bookSeenAction=(value)=>({
    type:BOOK_SEEN_LIST,
    value
})
//评论区
const bookRevoewAction=(value)=>({
    type:BOOK_REVOEW_LIST,
    value
})
//评论区详情
const bookRevoewDetailAction=(value)=>({
    type:BOOK_REVOEW_DETAIL_LIST,
    value
})
//最大评论数
const bookRevoewNumAction=(value)=>({
    type:BOOK_REVOEW_NUM_LIST,
    value
})
//目录信息
const bookCatalogDataAction=(value)=>({
    type:BOOK_CATALOG_DATA_LIST,
    value
})




//异步代码
//获得作品详情信息
export const requestBookDateAction=(urlId) => async (dispatch)=>{
    try {
        let {data} = await get(`/motie/books/${urlId}/detail`);
         //作品信息
        let  {name,id,authorName,icon,sortName,status, words,discountPrice,followCount,visitCount,supportCount,reward} ={ ...data};
        let bookData = {name,id,authorName,icon,sortName,status, words,discountPrice,followCount,visitCount,supportCount,reward};
        dispatch(bookDataAction(bookData));
        //作品内容简介
        let {introduce,lastChapterList}={ ...data};
        dispatch(bookContenAction({introduce,lastChapterList:lastChapterList[0]}));
        //还看过其他作品
        dispatch(bookSeenAction(data.tuijianBookList));
        //评论区
        let RevoewDate = data.reviewList.map(({userName,reviewShowTime,content,userIcon,score,reviewId})=>({userName,reviewShowTime,content,userIcon,score,reviewId}));
        let reviewListCount = data.reviewListCount;
        let reviewId = data.id;
        dispatch(bookRevoewAction({RevoewDate,reviewListCount,reviewId}));
    } catch (error) {
        
    }
}
//获得作品评论详情信息
let page = 1;
export const requestReviewDetailAction=(urlId) => async (dispatch)=>{
    page = 1;
    try {
        let {data} = await get(`/motie/reviews/books/${urlId}?showType=time&pageNo=1&pageSize=15`);
        let request = data.data.map(({summary,id,userIcon,userName,reviewShowTime,score})=>({summary,id,userName,reviewShowTime,userIcon,score}));
        dispatch(bookRevoewDetailAction(request));
        dispatch(bookRevoewNumAction(data.reviewCount));
        
    } catch (error) {
        
    }
}
//下拉获得更多评论
export const requestDropDownReviewAction=(urlId) => async (dispatch)=>{
    try {
        page++;
        let {data} = await get(`/motie/reviews/books/${urlId}?showType=time&pageNo=${page}&Size=15`);
        let request = data.data.map(({summary,id,userIcon,userName,reviewShowTime,score})=>({summary,id,userName,reviewShowTime,userIcon,score,}));
        dispatch(bookRevoewDetailAction(request))
    } catch (error) {
        
    }
}
//获得目录信息
export const requestCatalogDataAction=(urlId) => async (dispatch)=>{
    try {
        let {data} = await get(`/motie/books/${urlId}/chapters`);
        let request = data.data.map(({name,free})=>({name,free}));
        dispatch(bookCatalogDataAction(request))
    } catch (error) {
        
    }
}

