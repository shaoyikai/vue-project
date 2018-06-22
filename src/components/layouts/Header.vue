<template>
    <header class="ui fixed inverted menu">
        <a class="item" href="/">
            <img src="../../assets/logo.png" height="30"/> LOGO
        </a>
        <a class="item active" href="/project/list">
            项目管理
        </a>
        <a class="item" href="/project/create">
            创建
        </a>
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
