<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios"

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  created(){
    // localhost:8080，其实访问的是 public 目录下的 index.html
    // 也就是说 public对应的就是项目的根目录
    axios.get("/data.json").then(res=> {
      console.log(res);
    })
  }
}
</script>
