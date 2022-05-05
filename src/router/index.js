import Vue from 'vue'
import VueRouter from 'vue-router'
import TheHome from '@/views/TheHome'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            name: 'home',
            path: '/',
            component: TheHome
        },
        {
            path: '/about',
            component: () => import(/* webpackChunkName: 'about' */ '@/views/TheAbout')
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})