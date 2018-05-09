import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header/Header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header
    }
  ]
})
