import Vue from 'vue'
import VueRouter from 'vue-router'
import TheLogin from '@/views/TheLogin'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            name: 'login',
            path: '/',
            component: TheLogin
        },
        // {
        //     path: '/about',
        //     component: () => import(/* webpackChunkName: 'about' */ '@/views/TheAbout')
        // },
        {
            path: '*',
            redirect: '/'
        }
    ]
})