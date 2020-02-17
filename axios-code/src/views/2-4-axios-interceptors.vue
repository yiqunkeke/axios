<template>
  <div></div>
</template>

<script>
import axios from "axios";
// axios拦截器
export default {
    name: "axios-interceptors",
    created() {
        // 创建axios实例
        var instance = axios.create({
            baseURL: "http://localhost:8080",
            timeout: 1000
        })

        // request拦截器
        instance.interceptors.request.use(config => {
            // 请求发送之前做些什么 
            config.headers.token = "xxx";
            return config; // 要把config return 回去
        }, error => {
            // 请求出错时
            Promise.reject(error);
        })

        //response拦截器
        instance.interceptors.response.use(res => {
            return res;
        }, error => {
            Promise.reject(error)
        })

    }
}
</script>

<style>

</style>