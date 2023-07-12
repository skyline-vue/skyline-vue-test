import { createRouter, createWebHistory } from 'vue-router'
import Test1 from '../views/Test1.vue'
import Test2 from '../views/Test2.vue'
import Test3 from '../views/Test3.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'test1',
      component: Test1
    },
    {
      path: '/test2',
      name: 'test2',
      component: Test2
    },{
      path: '/test3',
      name: 'test3',
      component: Test3
    }
  ]
})

export default router
