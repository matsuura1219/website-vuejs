import { createRouter, createWebHistory } from 'vue-router'
import Top from '@/components/Top.vue'
import About from '@/components/About.vue'
import Research from '@/components/Research.vue'
import Portfolio from '@/components/Portfolio.vue'

const routes = [
    {
        path: '/',
        name: 'Top',
        component: Top
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/research',
        name: 'Research',
        component: Research
    }
    ,
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: Portfolio
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router