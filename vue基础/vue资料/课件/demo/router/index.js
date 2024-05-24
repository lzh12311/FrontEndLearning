import Vue from "vue";
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: () => import('../page/main'),
      children: [
        {
          path: '/home',
          component: () => import('../page/home')
        },
        {
          path: '/list',
          component: () => import('../page/list')
        },
        {
          path: '/form',
          component: () => import('../page/form')
        }
      ]
    },
  ]
})