<template>
  <header class="ui fixed inverted menu">
    <router-link class="item" to="/">
      <img src="../../assets/logo.png" height="30"/> LOGO
    </router-link>

    <router-link class="item active" to="/project/list">
      项目管理
    </router-link>
    <router-link class="item" to="/project/create">
      创建
    </router-link>
    <div class="right menu">
      <div class="item">
        <div class="ui icon input">
          <input type="text" placeholder="搜索">
          <i class="search link icon"></i>
        </div>
      </div>
      <a class="ui item" @click="logout()">
        退出
      </a>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    methods: {
      logout(){
        // 修改login.json中的isLogin为false即可
        alert('待实现')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
