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
    path: '/detail/:id',
    name: 'detail',
    component: () => import(/* webpackChunkName: "singleCharacter" */ '../components/Detail.vue')
  },
  {
    path: '/a',
    name: 'A',
    component: () => import(/* webpackChunkName: "singleCharacter" */ '../components/letter/A.vue')
  },
  {
    path: '/b',
    name: 'B',
    component: () => import(/* webpackChunkName: "singleCharacter" */ '../components/letter/B.vue')
  },
  {
    path: '/c',
    name: 'C',
    component: () => import(/* webpackChunkName: "singleCharacter" */ '../components/letter/C.vue')
  },
  {
    path: '/d',
    name: 'D',
    component: () => import(/* webpackChunkName: "singleCharacter" */ '../components/letter/D.vue')
  },
  {
    path: '/E',
    name: 'E',
    component: () => import(/* webpackChunkName: "singleCharacter" */ '../components/letter/E.vue')
  },
  {
    path: '/f',
    name: 'F',
    component: () => import(/* webpackChunkName: "singleCharacter" */ '../components/letter/F.vue')
  },
  {
    path: '/g',
    name: 'G',
    component: () => import(/* webpackChunkName: "singleCharacter" */ '../components/letter/G.vue')
  },
  {
    path: '/h',
    name: 'H',
    component: () => import(/* webpackChunkName: "singleCharacter" */ '../components/letter/H.vue')
  },
  {
    path: '/i',
    name: 'I',
    component: () => import(/* webpackChunkName: "singleCharacter" */ '../components/letter/I.vue')
  },
  {
    path: '/j',
    name: 'J',
    component: () => import(/* webpackChunkName: "singleCharacter" */ '../components/letter/J.vue')
  },
  {
    path: '/k',
    name: 'K',
    component: () => import(/* webpackChunkName: "singleCharacter" */ '../components/letter/K.vue')
  },
  {
    path: '/l',
    name: 'L',
    component: () => import(/* webpackChunkName: "singleCharacter" */ '../components/letter/L.vue')
  },
  {
    path: '/m',
    name: 'M',
    component: () => import(/* webpackChunkName: "singleCharacter" */ '../components/letter/M.vue')
  },
  {
    path: '/n',
    name: 'N',
    component: () => import(/* webpackChunkName: "singleCharacter" */ '../components/letter/N.vue')
  },
  {
    path: '/o',
    name: 'O',
    component: () => import(/* webpackChunkName: "singleCharacter" */ '../components/letter/O.vue')
  },
  {
    path: '/p',
    name: 'P',
    component: () => import(/* webpackChunkName: "singleCharacter" */ '../components/letter/P.vue')
  },
  {
    path: '/q',
    name: 'Q',
    component: () => import(/* webpackChunkName: "singleCharacter" */ '../components/letter/Q.vue')
  },
  {
    path: '/r',
    name: 'R',
    component: () => import(/* webpackChunkName: "singleCharacter" */ '../components/letter/R.vue')
  },
  {
    path: '/s',
    name: 'S',
    component: () => import(/* webpackChunkName: "singleCharacter" */ '../components/letter/S.vue')
  },
  {
    path: '/t',
    name: 'T',
    component: () => import(/* webpackChunkName: "singleCharacter" */ '../components/letter/T.vue')
  },
  {
    path: '/u',
    name: 'U',
    component: () => import(/* webpackChunkName: "singleCharacter" */ '../components/letter/U.vue')
  },
  {
    path: '/v',
    name: 'V',
    component: () => import(/* webpackChunkName: "singleCharacter" */ '../components/letter/V.vue')
  },
  {
    path: '/w',
    name: 'W',
    component: () => import(/* webpackChunkName: "singleCharacter" */ '../components/letter/W.vue')
  },
  {
    path: '/x',
    name: 'X',
    component: () => import(/* webpackChunkName: "singleCharacter" */ '../components/letter/X.vue')
  },
  {
    path: '/y',
    name: 'Y',
    component: () => import(/* webpackChunkName: "singleCharacter" */ '../components/letter/Y.vue')
  },
  {
    path: '/z',
    name: 'Z',
    component: () => import(/* webpackChunkName: "singleCharacter" */ '../components/letter/Z.vue')
  },
  {
    path: '/three',
    name: 'Three',
    component: () => import(/* webpackChunkName: "singleCharacter" */ '../components/number/Three.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: "PageNotFound",
    component: () => import(/* webpackChunkName: "singleCharacter" */ '../components/PageNotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
