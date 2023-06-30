import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import('../views/AboutView.vue')
    }
  },
  {
    path: '/sign-in',
    name: 'sign-in',
  
    component: function () {
      return import('../views/SigninView.vue')
    }
  },
  {
    path: '/sign-up',
    name: 'sign-up',
  
    component: function () {
      return import('../views/SignupView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
