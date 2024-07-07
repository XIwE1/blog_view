import { defineStore } from 'pinia'
import { store } from '@/store'

export const useMainStore = defineStore({
  id: 'main',
  state: () => ({
    name: '超级管理员',
  }),
  // getters 与 Vuex 中的 getter 、组件中的计算属性具有相同的功能
  getters: {
    nameLength: (state) => state.name.length,
  },
  actions: {
    async insertPost(data: string) {
      // 可以做异步
      // await doAjaxRequest(data);
      this.name = data
    },
  },
})

// Need to be used outside the setup
export function useMainStoreWithOut() {
  return useMainStore(store)
}
