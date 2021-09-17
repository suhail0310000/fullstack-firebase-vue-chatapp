import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/signIn',
      component: () => import('../views/SignIn.vue')
    },
    {
      path: '/Chatroom',
      component: () => import('../views/Chatroom.vue')
    }
  ]
})

export default router
