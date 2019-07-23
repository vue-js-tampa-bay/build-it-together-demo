import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Taco from './views/Taco.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/taco/:id',
      name: 'taco',
      component: Taco
    }
  ]
})