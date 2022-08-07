import Vue from 'vue'
import VueRouter from 'vue-router'

import LoginPage from './components/LoginPage'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            name: 'login',
            component: LoginPage,
            props: true
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('./components/RegisterPage'),
            props: true
        },
        {
            path: '/carrito',
            name: 'carrito',
            component: () => import('./components/CarritoVue'),
            props: true
        },
        {
            path: '/HomePage',
            name: 'HomePage',
            component: () => import('./components/HomePage'),
            props: true
        },
        // {
        //     path: '/admin',
        //     name: 'admin',
        //     component: () => import('./pages/AdminPage'),
        //     props: true
        // },

        // {
        //     path: '/admin/:id',
        //     name: 'editar',
        //     component: () => import('./pages/Editar'),
        //     props: true
        // },
     
        // {
        //     path: '/usuarios/:valor?',
        //     name: 'usuarios',
        //     component: () => import('./pages/Usuarios')
        // }
    ]
})