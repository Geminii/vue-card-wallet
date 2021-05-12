import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Payment from '../views/Payment.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Payment',
    component: Payment,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
