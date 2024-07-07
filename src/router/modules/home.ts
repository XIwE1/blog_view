import { RouteRecordRaw } from 'vue-router'

// 首页模块
const homeRouter: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/pages/home/index.vue'),
    meta: {
      key: 'home',
      title: '首页',
      keepAlive: true,
    },
  },
]

export default homeRouter
