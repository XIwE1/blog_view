import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'
// yarn add vite-plugin-html -D
import { createHtmlPlugin } from 'vite-plugin-html'
const path = require('path')
const process = require('process')

const envResolve = (mode) => {
  return loadEnv(mode, process.cwd())
}

const TITLE = process.env.VITE_APP_TITLE
const PORT = process.env.VITE_APP_PORT

// https://vitejs.dev/config/
export default defineConfig({
  base: './', //打包路径
  plugins: [
    vue(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: TITLE,
        },
      },
    }),
    // gzip压缩 生产环境生成 .gz 文件
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  // 配置别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/style/main.scss";',
      },
    },
  },
  server: {
    port: PORT,
    open: true,
    https: false,
    proxy: {},
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        // eslint-disable-next-line camelcase
        drop_console: true,
        // eslint-disable-next-line camelcase
        drop_debugger: true,
      },
    },
  },
})
