import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/characters',
    name: 'Characters',
    component: () => import('../views/Characters.vue')
  },
  {
    path: '/plot',
    name: 'Plot',
    component: () => import('../views/Plot.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router