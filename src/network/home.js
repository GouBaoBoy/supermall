// 首页数据请求封装
import { request,requestNew } from "./request";

export function getHomeMultidata(){
    return request({
        url:'/home/multidata'
    })
}
export function getHomeGoods(type,page){
    return request({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}