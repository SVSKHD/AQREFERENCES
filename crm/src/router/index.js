import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AquaLayout from '../Layout/AquaLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/layout',
      name: 'Layout',
      component: AquaLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        }
      ]
    }
  ]
})

export default router
