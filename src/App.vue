<template>
    <div id="app">
        <div v-if="isLogin" v-show="isShow">
            <Header/>

            <LeftMenu/>

            <router-view/>

            <Footer/>
        </div>

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
                ajaxCount: 0,
                isLogin: true,
                isShow: 0
            }
        },
        mounted() {
            // 首次获取登录数据
            this.getLoginData()
            // 5秒钟请求一次是否登录
            setInterval(this.getLoginData, 5000)
        },
        methods: {
            getLoginData: function () {
                this.ajaxCount += 1;

                // console.log('refresh login data every 5 second: '+ this.ajaxCount)
                var vm = this
                axios.get('http://demo.test.com/api/login.php')
                        .then(function (res) {
                            vm.isLogin = res.data.isLogin
                            vm.isShow = vm.isLogin
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
