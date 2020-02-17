<template>
  <div class="about">
    <h1>This is an about page</h1>
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script>
import { Button } from 'vant';

export default {
  name: 'vantDemo',
  components: {
    [Button.name]: Button
  }
}
</script>
