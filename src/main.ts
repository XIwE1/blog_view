import { createApp } from 'vue'
import App from './App.vue'
// common style sheet CSS
import '@/styles/common.scss'
// common Util Function
import '@/utils/util.ts'
// vue-router
import router from '@/router/router'
// pinia store
import { setupStore } from '@/store'
// iconfont
import '@/assets/iconfont/iconfont.js'
// common components
import SvgIcon from '@/components/SvgIcon/index.vue'
const app = createApp(App)
setupStore(app)
app.component('SvgIcon', SvgIcon)
app.use(router).mount('#app')
