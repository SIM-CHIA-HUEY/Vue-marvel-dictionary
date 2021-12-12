import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/header',
    name: 'Header',
    component: () => import(/* webpackChunkName: "header" */ '../components/Header.vue')
  },
  {
    path: '/footer',
    name: 'Footer',
    component: () => import(/* webpackChunkName: "footer" */ '../components/Footer.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import(/* webpackChunkName: "singleCharacter" */ '../components/Characters.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import(/* webpackChunkName: "singleCharacter" */ '../components/Detail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
