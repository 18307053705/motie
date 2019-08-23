import api from '../../utils/api'
import {get} from '../../utils/request'
//全本



//types
const LEFT_DATA = 'channer/left/data'

//初始化state
const Initiali = {

}

//默认输出
export default (state=Initiali,action)=>{
        switch(action.type){
            default :
                return state
        }

}


//同步代码
const leftList = (value)=>({
type:LEFT_DATA,
value
})

//异步代码
export const chaneData = ()=>async (dispatch)=>{
        let result = await get(api.CHANNE_LIST,{rankType:9,sex:1,pageNo:1,siteId:99,timeLimit:4,group:1,pageSize:10})
      //  result.data.rank.map()
        console.log(result)
        dispatch(leftList(result))
}
