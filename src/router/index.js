import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'


Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: ()=> import('@/views/About')
    },
    {
      path: '/menu',
      name: 'Menu',
      component: ()=> import('@/views/Menu')
    },
    {
      path: '/recipe',
      name: 'Recipe',
      component: ()=> import('@/views/Recipe')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ()=> import('@/views/Contact')
    },
    {
      path: '/reservation',
      name: 'Reservation',
      component: ()=> import('@/views/Reservation')
    }
    
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
