<template>
  <div class="home">
  </div>
</template>

<script>
/**
 * axios并发请求：需要一次发送多个请求，然后统一处理响应结果
 *  axios.all  axios.spread
 */
import axios from "axios"
export default {
  name: 'axiosAll-axiosSpread',
  created(){
    // axios.all的参数是一个数组
    // 参数数组中是单独的axios请求------实现多个请求的并发
    axios.all([
        axios.get("/data.json"),
        axios.get("/city.json")
    ]).then(
        // 这样就可以实现：一次请求多个接口，然后同时处理多个接口返回的结果
        axios.spread((dataRes, cityRes)=> {
            console.log(dataRes, cityRes);
        })
    )
    // .then的参数不再是响应结果
    // 而是 axios.spread() 函数---这个函数的参数对应并发请求中的响应值。
  }
}
</script>
