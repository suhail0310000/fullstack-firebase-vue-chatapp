import { createRouter, createWebHistory } from 'vue-router'
import Chatroom from '../views/Chatroom.vue'

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
    },
    
    // {
    //   path: '/profile/:id',
    //   name: 'profile',
    //   component: profile,
    // },
    
    //fungerer
    {
      path: '/Chatroom/:id',
      name: 'chatbox',
      component: () => import('../views/Chatroom.vue')
    },

  ]
})

export default router
