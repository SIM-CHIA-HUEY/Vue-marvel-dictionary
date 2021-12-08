import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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
    path: '/character/:id',
    name: 'character',
    component: () => import(/* webpackChunkName: "singleCharacter" */ '../views/SingleCharacter.vue')
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
