import { createRouter, createWebHashHistory } from 'vue-router'
import Characters from '../views/Characters.vue'
import Character from '../views/Character.vue'
import PageNotFound from '../views/PageNotFound.vue'

const routes = [
  {
    path: '/characters',
    name: 'characters',
    alias: '/',
    component: Characters
  },
  {
    path: '/character/:id',
    name: 'character',
    component: Character
  },
  {
    path: '/404',
    name: 'PageNotFound',
    component: PageNotFound
  },
  {
    path: "/:catchAll(.*)",
    redirect: '/404',
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
