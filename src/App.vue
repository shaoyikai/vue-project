<template>
    <div id="app">
        <Header v-if="isLogin" v-show="isShow"/>
        <div id="empty-box"></div>
        <div class="ui grid">
            <div class="one wide column"></div>
            <router-view/>
        </div>
        <Footer v-if="isLogin" v-show="isShow"/>
    </div>
</template>

<script>
  import axios from 'axios'
  import './assets/tools/jquery-3.1.1.min'
  import './assets/semantic/semantic.min.css'
  import './assets/semantic/semantic.min.js'
  import Header from './components/layouts/Header.vue'
  import Footer from './components/layouts/Footer.vue'
  import Login from './components/layouts/Login.vue'
  import Register from './components/layouts/Register.vue'

  export default {
    name: 'App',
    data(){
      return {
        isLogin: false,
        isRegister: false,
        isShow: false,
        hasRequest: false,
        timer: null,
        routerName: ''
      }
    },
    mounted() {
      this.routerName = this.$router.currentRoute.name
      // 首次获取登录数据
      if (!this.hasRequest) {
        this.getLoginData()
      }
      // 2秒钟请求一次是否登录
      clearInterval(this.timer)
      this.timer = setInterval(this.getLoginData, 2000)
    },
    methods: {
      getLoginData: function () {
        // 以下组件有相似代码
        // Register.vue
        // Login.vue
        // Home.vue
        // App.vue
        let vm = this
        axios.get('/static/data/login.json')
          .then(function (res) {
            vm.isLogin = res.data.isLogin
            vm.isShow = vm.isLogin
            vm.hasRequest = true

            // 如果已经没有登录
            // 并且routerName不是Login或Register
            // 跳转到login页面
            if (!res.data.isLogin) {
              if(((vm.routerName !== 'Login') && (vm.routerName !== 'Register'))){
                location.href = '/login'
              }
            }
          })
          .catch(function (err) {
            vm.answer = 'Error! Could not reach the API. ' + err
          })
      }
    },
    components: {
      Header,
      Footer,
      Login,
      Register
    }
  }
</script>

<style scoped>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #empty-box {
        height: 60px;
    }
</style>
