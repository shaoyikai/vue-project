<template>
    <div id="app">
        <Header v-if="isLogin" v-show="isShow"/>
        <LeftMenu v-if="isLogin" v-show="isShow"/>
        <router-view v-if="isLogin" v-show="isShow"/>
        <Footer v-if="isLogin" v-show="isShow" />

        <Login v-else="isLogin" v-show="!isShow"></Login>
    </div>
</template>

<script>
    import axios from 'axios'
    import './assets/tools/jquery-3.1.1.min'
    import './assets/semantic/semantic.min.css'
    import './assets/semantic/semantic.min.js'
    import Header from './components/layouts/Header.vue'
    import Footer from './components/layouts/Footer.vue'
    import LeftMenu from './components/layouts/LeftMenu.vue'
    import Login from './components/layouts/Login.vue'

    export default {
        name: 'App',
        data(){
            return {
                isLogin: true,
                isShow: false,
                hasRequest: false
            }
        },
        mounted() {
            // 首次获取登录数据
            if(!this.hasRequest){
                this.getLoginData()
            }
            // 5秒钟请求一次是否登录
            setInterval(this.getLoginData, 5000)
        },
        methods: {
            getLoginData: function () {

                var vm = this
                axios.get('/static/data/login.json')
                        .then(function (res) {
                            vm.isLogin = res.data.isLogin
                            vm.isShow = vm.isLogin
                            vm.hasRequest = true
                        })
                        .catch(function (err) {
                            vm.answer = 'Error! Could not reach the API. ' + err
                        })
            }
        },
        components: {
            Header,
            Footer,
            LeftMenu,
            Login
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
</style>
