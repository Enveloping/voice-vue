import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/indexView.vue'
import Home from '@/views/Home/indexView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children:[
        {
          path:'',
          component: Home
        }
      ]
    },
  ],
})

export default router
