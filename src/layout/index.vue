<!--
 * new page
 * @author: 西维
 * @since: 2022-07-01
 * index.vue
-->
<template>
  <div class="container">
    <nav ref="nav" class="site-nav">
      <Nav :menu-list="menuList"></Nav>
    </nav>
    <header class="site-header">
      <Header></Header>
    </header>
    <main class="site-main">
      <router-view></router-view>
    </main>
    <footer class="site-footer">
      <Footer></Footer>
    </footer>
    <!-- <div id="he-plugin-simple"></div> -->
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import { throttle, debounce } from '@/utils/util'
import Header from './Header/index.vue'
import Nav from './Nav/index.vue'
import Footer from './Footer/index.vue'

const menuList = reactive([
  { label: '首页', icon: 'guanji2', path: '/' },
  { label: '归档', icon: 'a-topliontubiaoku_zonglan', path: '/tags' },
  { label: '标签', icon: 'tag1', path: '/categories' },
  { label: '留言', icon: 'a-topliontubiaoku_yijian', path: '/msgboard' },
  { label: '关于', icon: 'a-topliontubiaoku_yonghuzhongxin', path: '/about' },
])

const nav = ref<HTMLElement | null>(null)

onMounted(() => {
  const navClassList = nav.value?.classList
  const onScroll = () => {
    let height = 0
    return (scrollTop: number) => {
      if (scrollTop > height) {
        height = scrollTop
        navClassList?.add('shrink')
        return true
      } else if (scrollTop < height) {
        height = scrollTop
        navClassList?.remove('shrink')
        return false
      }
    }
  }
  const _onScroll = onScroll()
  const thrOnScroll = throttle(_onScroll, 160)
  const debOnScroll = debounce(_onScroll, 160)

  //TODO 监听滚动
  window.onscroll = (e) => {
    const scrollTop = document.documentElement.scrollTop
    thrOnScroll(scrollTop)
    debOnScroll(scrollTop)
  }

  // const c = document.createElement('link')
  // c.rel = 'stylesheet'
  // c.href = 'https://widget.qweather.net/simple/static/css/he-simple.css?v=1.4.0'
  // const s = document.createElement('script')
  // s.src = 'https://widget.qweather.net/simple/static/js/he-simple.js?v=1.4.0'
  // const sn = document.getElementsByTagName('script')[0]
  // sn.parentNode?.insertBefore(c, sn)
  // sn.parentNode?.insertBefore(s, sn)
})
</script>

<style lang="scss" scoped>
.container {
  position: relative;
}
.site-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: rgba($color: #000000, $alpha: 0.35);
  box-shadow: 0 0 18px rgba($color: #000000, $alpha: 0.35);
  transition: height 0.3s linear;
  transition: top 0.3s linear;
  z-index: 1;
  &.shrink {
    top: -60px;
    box-shadow: none;
  }
}
.site-header {
  position: relative;
  height: calc(100vh + 6rem);
}
.site-main {
  position: relative;
  padding-bottom: 135px;
  min-height: calc(100vh + 300px);
  background-attachment: fixed;
  background-repeat: no-repeat;
  // background-position: 50%;
  background-position: center 0;
  background-size: cover;
  // background-image: url(@/assets/main-background.jpg);
  background-image: url(@/assets/bk.jpg);
}
.site-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
