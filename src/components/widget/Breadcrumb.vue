<template>
  <p id="breadcrumb">
    <router-link to="/">首页</router-link>
    >
    工程管理
  </p>
</template>

<script>
  export default {
    name: 'Breadcrumb',
    data () {
      return {
        first: {name: '首页', path: '/'},
        second: {name: '项目列表', path: '/project/list'},
        third: {name: '项目接口'},
      }
    }
  }
</script>

<style scoped>
  #breadcrumb {
    text-align: left;
    position: fixed;
    z-index: 3;
  }
</style>