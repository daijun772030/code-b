import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home'
import User from '@/pages/user'
import All from '@/pages/all'
import Law from '@/pages/law'
import Privacy from '@/pages/privacy'
import Agreement from '@/pages/agreement'
import Rule from '@/pages/rule'
import About from '@/pages/wxH5About'
import Footer from '@/pages/footer'
import Enter from '@/pages/wxH5enter'
import Dowm from '@/pages/dowm'
import Liupeijia from '@/pages/liupeijia'
import Instructions from '@/pages/instructions'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'User',
            component: User
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/all',
            name: 'All',
            component: All
        },
        {
            path: '/law',
            name: 'law',
            component: Law
        },
        {
            path: '/privacy',
            name: 'privacy',
            component: Privacy
        },
        {
            path: '/agreement',
            name: 'agreement',
            component: Agreement
        },
        {
            path: '/rule',
            name: 'rule',
            component: Rule
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/footer',
            name: 'footer',
            component: Footer
        },
        {
            path: '/enter',
            name: 'enter',
            component: Enter
        },
        {
            path: '/dowm',
            name: 'dowm',
            component: Dowm
        },
        {
            path: '/liupeijia',
            name: 'liupeijia',
            component: Liupeijia
        },
        {
            path: '/instructions',
            name: 'instructions',
            component: Instructions
        }
    ]
})