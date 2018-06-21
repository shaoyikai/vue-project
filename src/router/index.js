import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/layouts/Home'
import SnmpList from '@/components/snmp/List'
import HttpList from '@/components/http/List'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/snmp/list',
      name: 'SnmpList',
      component: SnmpList
    },
    {
      path: '/http/list',
      name: 'HttpList',
      component: HttpList
    }
  ]
})
