import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import AboutPage from './components/AboutPage.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
    },
    {
        path: '/project/:slug',
        name: 'project',
        component: HomePage,
    },
    {
        path: '/about',
        name: 'about',
        component: AboutPage,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
