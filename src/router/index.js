import { createRouter, createWebHistory } from '@ionic/vue-router';
import FormsComponents from '../views/FormsComponents.vue'

const routes = [
  {
    path: '/',
    redirect: '/form'
  },
  {
    path: '/form',
    name: 'FormsComponents',
    component: FormsComponents
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
