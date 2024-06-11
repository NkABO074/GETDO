import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeVue.vue'
import LandingVue from '../views/LandingVue.vue'
import ConnectionVue from '../views/ConnectionVue.vue'
import InscriptionVue from '../views/InscriptionVue.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingVue,
    },
    {
      path:'/connection',
      name:'connection',
      component: ConnectionVue,
    },
    {
      path: '/inscription',
      name: 'inscription',
      component: InscriptionVue,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },

   
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
