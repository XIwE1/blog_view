import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// * 导入所有router
const metaRouters = import.meta.globEager('./modules/*.ts')

// * 处理路由表
export const routerArray: RouteRecordRaw[] = []
Object.keys(metaRouters).forEach((item) => {
  Object.keys(metaRouters[item]).forEach((key: any) => {
    routerArray.push(...metaRouters[item][key])
  })
})

// 挂载路由
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    children: [...routerArray],
  },
  {
    // 找不到路由重定向到404页面
    path: '/:pathMatch(.*)',
    redirect: { name: '404' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  strict: false,
  // 切换页面时，滚动到最顶部
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export default router
