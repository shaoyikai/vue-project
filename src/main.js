import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import VueAxios from 'vue-axios';
import VeeValidate from 'vee-validate';
import veeConfig from './common/vee-validate/config'
import Vuex from 'vuex'
import store from './store'

Vue.use(VeeValidate, veeConfig)
Vue.use(VueAxios, axios);
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
