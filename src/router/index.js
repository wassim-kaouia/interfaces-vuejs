import { createRouter, createWebHistory } from 'vue-router'
import HelloView from '../views/HelloView.vue'
import DataTableView from '../views/DataTableView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  // hna n3mlo routing kol path n3tiwha lcomponent li bach tdkhel liha o matnssaych t3mli liha import lfo9
  routes: [
    {
      path: '/',
      name: 'home',
      component: DataTableView
    },
    {
      path: '/hello',
      name: 'hello',
      component: HelloView
    }
  ]
})

export default router
