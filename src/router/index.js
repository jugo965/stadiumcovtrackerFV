import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },

  
  {
    path: '/Register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "Register" */ '../views/Register.vue')
  },
  {
    path: '/Pregled',
    name: 'Pregled',
    component: () => import(/* webpackChunkName: "Pregled" */ '../views/Pregled.vue')
  },
  {
    path: '/Unos',
    name: 'Unos',
    component: () => import(/* webpackChunkName: "Unos" */ '../views/Unos.vue')
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
