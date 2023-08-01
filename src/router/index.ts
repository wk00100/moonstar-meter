import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import productList from '../components/ProductList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/products',
      component: () => import('../views/ProductView.vue'),
      children: [
        { path: '', component: productList },
        { path: ':product', component: () => import('../components/ProductInfoItem.vue') }
      ]
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/files',
      name: 'files',
      component: () => import('../views/FileDownloadView.vue')
    }
  ]
})

export default router
