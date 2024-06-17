import Vue from 'vue'
import VueRouter from 'vue-router'
// import Film from '../views/Film'

Vue.use(VueRouter)

const routes = [
    {
        path: '/film',
        redirect: '/film/nowplaying',
        // component: Film
        // 路由懒加载
        component: () => import('../views/Film'),
        children: [
            {
                path: '/film/nowplaying',
                component: () => import('../views/film/nowplaying')
            },
            {
                path: '/film/comingsoon',
                component: () => import('../views/film/comingsoon')
            }
        ]
    },
    {
        path: '/cinema',
        component: () => import('../views/Cinema')
    },
    {
        path: '/cinema/search',
        component: () => import('../views/Search')
    },
    {
        path: '/city',
        component: () => import('../views/City')
    },
    {
        path: '/login',
        component: () => import('../views/Login')
    },
    {
        path: '/detail',
        component: () => import('../views/Detail')
    },
    {
        path: '*', // 通配符
        redirect: '/film'
    }
]

export default new VueRouter({
    routes,
    mode: 'hash'
})