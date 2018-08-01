import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/containers/Home'
import Products from '@/containers/Products'
import Contact from '@/containers/Contact'
import Team from '@/containers/Team'
import Reference from '@/containers/Reference'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
    {
      path: '/reference',
      name: 'Reference',
      component: Reference
    },
  ]
})
