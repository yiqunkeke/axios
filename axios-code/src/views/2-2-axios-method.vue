<template>
  <div class="home">
  </div>
</template>

<script>
/**
 * ### axios 请求方法
* get,post,put,delete,patch

* get: 获取数据
* post：提交数据（表单提交、文件上传）
* put： 更新数据（所有数据推送到后端）
* patch: 更新数据（只将修改的数据推送到后端）
* delete: 删除数据

* **这些请求方式都是由后端定义的**。
 */
import axios from "axios"
export default {
  name: 'axiosMethod',
  created(){
    // 1. get   
    // 这种方式是：get方法的别名
    // 请求路径就是： http://localhost:8080/data.json?id=12
    axios.get("/data.json", {
        params: {
            id: 12
        }
    }).then(res=> {
      console.log(res);
    })
    // 另一种写法
    axios({
        method: "get",
        url: "/data.json",
        params: {
            id: 12
        }
    }).then(res=>{
        console.log(res);
    })
    // 最下方是：Query String Parameters-----id: 12

    //2.post
    // form-data 用于表单提交（用于图片上传、文件上传情况）
    // application/json（用于提交json格式数据）

    // 提交application/json格式的数据时：  
    let data = {
        id: 12
    }
    axios.post("/post", data).then(res=>{
        console.log(res)
    })
    // 另一种写法
    axios({
        method:"post",
        url:"/post",
        data: data
    }).then(res=> {
        console.log(res);
    })
    // reqeust headers中--- Content-Type: application/json;charset=UTF-8
    // 最下方是 Request Payload ---- {"id":12}


    // 提交 form-data请求时：
    let formData = new FormData(); // 创建FormData对象
    for(let key in data) {
        formData.append(key, data[key])
    }
    axios.post("/post", formData).then(res=>{
        console.log(res);
    })
    // request headers中----Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryWuyZqBWmrmz4IFbw
    // 最下方是 Form Data ---- id: 12


    // 3. put请求
    axios.put("/put", data).then(res=>{
        console.log(res);
    })

    // 4. patch请求
    axios.patch("/patch", data).then(res=>{
        console.log(res);
    })

    // 5. delete请求
    // 参数在url中传输：
    axios.delete("/delete", {
        params: {
            id: 12
        }
    }).then(res=>{
        console.log(res);
    })
    // 最下方是：Query String Parameters-----id=12

    // 参数在 data 中传输：
    axios.delete("/delete", {
        data: {
            id: 12
        }
    }).then(res=>{
        console.log(res);
    })
    // 最下方是：Request Payload--- {"id":12}

    // 另一种写法
    axios({
        method:"delete",
        url: "/delete",
        params: {},
        data: {}
    })
  }
}
</script>
