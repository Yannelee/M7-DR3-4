import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Pop from '../views/Pop.vue'
import Rap from '../views/Rap.vue'
import Rock from '../views/Rock.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pop',
    name: 'pop',
    component: Pop
  },
  {
    path: '/rap',
    name: 'rap',
    component: Rap
  },
  {
    path: '/rock',
    name: 'rock',
    component: Rock
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
