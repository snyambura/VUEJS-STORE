import Vue from 'vue'
import VueRouter from 'vue-router'
import add from '@/components/Add.vue'
import display from '@/components/Home.vue'
import Test from '../components/test/index.vue'
import Login from '../components/authentication/Login.vue'
import Signup from '../components/authentication/Signup.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  routes: [

    {
      path: '/',
      name: 'display',
      component: display
    },
    {
      path: '/add-items',
      name: 'add',
      component: add
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    }

  ]

})

export default router
