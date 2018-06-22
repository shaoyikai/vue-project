import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/layouts/Home'
import Login from '@/components/layouts/Login'
import Register from '@/components/layouts/Register'
import ProjectList from '@/components/project/List'
import ProjectCreate from '@/components/project/Create'
import ApiList from '@/components/api/List'

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
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/project/list',
      name: 'ProjectList',
      component: ProjectList
    },
    {
      path: '/project/create',
      name: 'ProjectCreate',
      component: ProjectCreate
    },
    {
      path: '/api/list',
      name: 'ApiList',
      component: ApiList
    }
  ]
})
