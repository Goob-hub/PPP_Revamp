import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Jobs from '../views/Jobs.vue'
import DevBlog from '../views/DevBlog.vue'
import GGMT from '../views/GGMT.vue'
import Backrooms from '../views/Backrooms.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/Jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/DevBlog',
    name: 'DevBlog',
    component: DevBlog
  },
  {
    path: '/GGMT',
    name: 'GGMT',
    component: GGMT
  },
  {
    path: '/Backrooms',
    name: 'Backrooms',
    component: Backrooms
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
