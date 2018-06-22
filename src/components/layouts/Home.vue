<template>
    <div class="fourteen wide column" v-if="isShow">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Home',
    data () {
      return {
        isShow: false,
        msg: 'Welcome to Home Page'
      }
    },
    mounted(){
      // 以下组件有相似代码
      // Register.vue
      // Login.vue
      // Home.vue
      // App.vue
      let vm = this
      axios.get('/static/data/login.json')
        .then(function (res) {
          if (res.data.isLogin) {
            vm.isShow = true;
          } else {
            location.href = "/login"
          }
        })
        .catch(function (err) {
          vm.answer = 'Error! Could not reach the API. ' + err
        })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
