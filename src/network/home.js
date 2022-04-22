// 首页数据请求封装
import { request } from "./request";

export function getHomeMultidata(){
    return request({
        url:'/home/multidata'
    })
}