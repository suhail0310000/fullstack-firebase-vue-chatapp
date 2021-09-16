import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // {
    //   path: '/',
    //   component: () => import('../views/Home.vue')
    // },
    {
      path: '/',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/sign-in',
      component: () => import('../views/SignIn.vue')
    },
    // {
    //   path: '/feed',
    //   component: () => import('../views/Feed.vue')
    // },
    {
      path: '/chatroom',
      component: () => import('../views/Chatroom.vue')
    }
  ]
})

export default router
