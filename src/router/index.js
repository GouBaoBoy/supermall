import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/home.vue')
const Classify = () => import('views/classify/classify.vue')
const Profile = () => import('views/profile/profile.vue')
const Cart = () => import('views/shoppingCart/shoppingCat.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/classify',
    component: Classify
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/shoppingcart',
    component: Cart
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
