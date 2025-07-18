import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import girisPage from '../views/giris.vue'
import DashboardPage from '../views/dashboardPage.vue'
import calendarPage from '@/views/calendarPage.vue'
import galleryPage from '@/views/galleryPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'giris',
    component: girisPage
  },
  {
    path: '/dashboardPage',
    name: 'dashboardPage',
    component: DashboardPage
  },
  {
    path:'/calendarPage',
    name:'calendarPage',
    component:calendarPage
  }
  ,
  {
    path:'/galleryPage',
    name:'galleryPage',
    component:galleryPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
