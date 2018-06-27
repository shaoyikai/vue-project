<template>
  <div class="fourteen wide column" v-if="isShow">
    <Breadcrumb/>
    <h1>{{ msg }}</h1>


    Value: {{ count }}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
    <div>
      <div>Recent History (last 5 entries): {{ recentHistory }}</div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Breadcrumb from '../../components/widget/Breadcrumb.vue'
  export default {
    name: 'Home',
    data () {
      return {
        isShow: false,
        msg: 'Welcome to Home Page'
      }
    },
    computed: mapGetters([
      'count',
      'recentHistory'
    ]),
    methods: mapActions([
      'increment',
      'decrement',
      'incrementIfOdd',
      'incrementAsync'
    ]),
    components: {
      Breadcrumb
    },
    mounted(){
      // 以下组件有相似代码
      // Register.vue
      // Login.vue
      // Home.vue
      // App.vue
      let vm = this
      let uri = '/local/static/data/login.json';
      this.axios.get(uri).then(function (res) {
            if (res.data.isLogin) {
              vm.isShow = true;
            } else {
              vm.$router.push({ path: '/login' })
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
