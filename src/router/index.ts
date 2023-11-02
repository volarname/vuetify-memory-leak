import { createRouter, createWebHistory } from 'vue-router'
import A from "@/views/A.vue";
import B from "@/views/B.vue";
import C from "@/views/C.vue";

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: 'a',
        name: 'a',
        component: A,
      },
      {
        path: 'b',
        name: 'b',
        component: B,
      },
      {
        path: 'c',
        name: 'c',
        component: C,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
