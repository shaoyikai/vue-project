<template>
  <div v-if="isShow" class="fourteen wide column">
    <img src="../../assets/logo.png">

    <div class="ui middle aligned center aligned grid">
      <div id="register-box">
        <h2 class="ui teal image header">
          <!--<img src="assets/images/logo.png" class="image">-->
          <div class="content">
            注册用户
          </div>
        </h2>
        <form class="ui large form">
          <div class="ui stacked segment">
            <div class="field">
              <div class="ui left icon input">
                <i class="user icon"></i>
                <input type="text" name="email" placeholder="输入邮箱">
              </div>
            </div>
            <div class="field">
              <div class="ui left icon input">
                <i class="lock icon"></i>
                <input type="password" name="password" placeholder="输入密码">
              </div>
            </div>
            <div class="field">
              <div class="ui left icon input">
                <i class="lock icon"></i>
                <input type="password2" name="password2" placeholder="确认密码">
              </div>
            </div>
            <div class="ui fluid large teal submit button">登录</div>
          </div>
          <div class="ui error message"></div>
        </form>

        <div class="ui message">
          已有账号？
          <router-link to="/login">去登录</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'Register',
    data () {
      return {
        isShow: false,
        username: 'test',
        password: 'test',
        password2: '',
        hasRequest: false,
        timer: null,
      }
    },
    mounted(){
      // 首次获取登录数据
      if (!this.hasRequest) {
        this.getLoginData()
      }
      // 2秒钟请求一次是否登录
      clearInterval(this.timer)
      clearInterval(this.$parent.timer)
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
        let uri = '/local/static/data/login.json';
        this.axios.get(uri).then(function (res) {
              if (res.data.isLogin) {
                vm.$router.push({ path: '/' })
              } else {
                vm.isShow = true;
              }
            })
            .catch(function (err) {
              vm.answer = 'Error! Could not reach the API. ' + err
            })
      }
    }
  }
</script>

<style scoped>
  #register-box {
    width: 450px;
  }
</style>
