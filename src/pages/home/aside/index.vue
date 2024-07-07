<!--
 * new page
 * @author: 西维
 * @since: 2022-07-13
 * index.vue
-->
<template>
  <div class="aside--container">
    <div class="card--item card--info">
      <PersonInfo></PersonInfo>
    </div>
    <div class="card--item card--link flx-justify-around">
      <ConactLink></ConactLink>
    </div>
    <div class="card--item card--weather">
      <div id="he-plugin-standard"></div>
    </div>
    <div class="card--item card--guid">
      <CategoryGuide :category-list="categoryList"></CategoryGuide>
    </div>
    <div class="card--item card--tags">
      <Tags :tag-list="tagList"></Tags>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import ConactLink from './components/link.vue'
import PersonInfo from './components/info.vue'
import CategoryGuide from './components/guide.vue'
import Tags from './components/tags.vue'

const categoryList = ref([
  { label: '文章', total: 10, target: '/' },
  { label: '分类', total: 5, target: '/' },
  { label: '标签', total: 8, target: '/' },
])

const tagList = ref([
  { label: 'JavaScript', total: 10, target: '/' },
  { label: 'Node.js', total: 2, target: '/' },
  { label: 'CSS', total: 5, target: '/' },
  { label: 'TypeScript', total: 3, target: '/' },
  { label: 'HTML', total: 6, target: '/' },
  { label: '算法', total: 8, target: '/' },
  { label: 'Vue', total: 8, target: '/' },
  { label: 'React', total: 3, target: '/' },
  { label: 'Canvas', total: 2, target: '/' },
  { label: 'HTTP', total: 2, target: '/' },
  { label: '浏览器', total: 3, target: '/' },
  { label: 'HTTPS', total: 2, target: '/' },
  { label: 'ES6', total: 5, target: '/' },
  { label: 'webGL', total: 1, target: '/' },
  { label: '模块化', total: 3, target: '/' },
])

onMounted(() => {
  const c = document.createElement('link')
  c.rel = 'stylesheet'
  c.href = 'https://widget.qweather.net/standard/static/css/he-standard.css?v=1.4.0'
  const s = document.createElement('script')
  s.src = 'https://widget.qweather.net/standard/static/js/he-standard.js?v=1.4.0'
  const sn = document.getElementsByTagName('script')[0]
  sn.parentNode?.insertBefore(c, sn)
  sn.parentNode?.insertBefore(s, sn)
})
</script>

<style lang="scss" scoped>
.card--info {
  font-size: 0.9rem;
}
.card--weather {
  padding: 0;
}
</style>
<style>
#he-plugin-standard {
  width: 100% !important;
  max-width: 100% !important;
  cursor: url(./src/assets/cursor/cursor.png) 4 4, default !important;
}
</style>
