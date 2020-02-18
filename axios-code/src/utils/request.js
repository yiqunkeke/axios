import axios from "axios";
import { getToken } from "./token"
import store from "@/store"
import Toast from "vant"

const service = axios.create({
    baseURL: process.env.baseURL,
    timeout: 180000 // 请求超时时长
})

// 请求拦截器
service.interceptors.request.use(
    config => {
        if(store.getters.token) {
            config.headers.Authorization = `Bearer ${getToken()}`
        }
        return config
    }, 
    error => {
        Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    res => {
        return res;
    },
    error => {
        let errorRes = error.response;
        // 判断错误状态码
        switch(errorRes.status) {
            case 400: 
                Toast({
                    duration: 3
                })
                break;
        }
        return Promise.reject(errorRes);
    }
)

export default service;
