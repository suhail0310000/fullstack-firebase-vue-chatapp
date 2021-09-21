import { createRouter, createWebHistory } from 'vue-router'
import Chatroom from '../views/Chatroom.vue'
// import profile from '../views/profile.vue'

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
    //   path: '/Profile',
    //   component: () => import('../views/Chatroom.vue')
    // },

    {
      path: '/smooth',
      
      component: () => import('../views/smooth.vue')
    },
    // {
    //   path: '/profile/:id',
    //   name: 'profile',
    //   component: () => import('../views/profile.vue'),
    // },
    
    //fungerer
    {
      path: '/Chatroom/:id',
      name: 'Chatroom',
      component: () => import('../views/Chatroom.vue')
      // component: () => import('../views/Chatroom.vue')
    },

  ]
})

export default router
