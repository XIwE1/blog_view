<!--
 * new page
 * @author: 西维
 * @since: 2022-07-13
 * index.vue
-->
<template>
  <div class="main--container">
    <div class="article--container">
      <ArticleItem
        v-for="item in articleList"
        :key="item.id"
        :article-info="item"
        class="observer-item"
      ></ArticleItem>
    </div>
    <div class="pagination--container">
      <Pagination :pagination="{ count: articleList.length * 10 + 2, size: 10, defualtPage: 1 }" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import ArticleItem from './components/articleItem.vue'
import Pagination from './components/pagination.vue'

const articleList = ref(
  new Array(4)
    .fill([
      {
        id: 1,
        title: 'ES6：Proxy与Reflect学习笔记',
        desc: `在node.js中，使用 CommonJS 作为其模块化规范。
    根据 CommonJS 模块化规范，一个单独的JS文件就是一个模块，每个模块是一个单独的作用域，在模块内部定义的变量，无法在其他模块中所读取。若想要在模块间进行通信，需使用模块的导出与导入语法：`,
        categorys: ['前端基础'],
        tags: ['JavaScript', 'ES6', 'Vue'],
        createTime: '2022-7-19',
        updateTime: '2022-7-19',
      },
      {
        id: 2,
        title: 'Ajax基础教程',
        desc: `Ajax 简介 Ajax 的全称是 Asynchronous JavaScript and XML（异步的JavaScript和XML），即在网页中利用 XMLHttpRequest 对象和服务器进行数据交互的方式 XMLHttpRequest XMLHttpRequest （简称 xhr）是浏览器提供的 JavaScript 对象，通过它，可以请求服务器上的数据资源 XMLHttpRequest 的基本使用 创建 xhr 对象 调用 xhr.open()函数 调用 xhr.send()函数 `,
        categorys: ['学习笔记'],
        tags: ['JavaScript', 'Ajax'],
        createTime: '2022-7-21',
        updateTime: '2022-7-21',
        cover: '/src/assets/header-background7.jpg',
      },
      {
        id: 3,
        title: 'IntersectionObserver',
        desc: `IntersectionObserver API 提供了一种创建IntersectionObserver 对象的方法，用于监测目标元素与视窗(viewport)的交叉状态，并在符合配置条件时执行回调函数，回调函数可以接收到元素与视窗交叉的具体数据。`,
        categorys: ['学习笔记'],
        tags: ['JavaScript', '进阶知识'],
        createTime: '2022-7-21',
        updateTime: '2022-7-21',
      },
    ])
    .flat()
    .map((item, idx) => {
      item.id = idx
      return item
    })
)

const callback = (entries: any, instance: IntersectionObserver) => {
  entries.forEach((entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting) {
      const element = entry.target
      element.classList.remove('opaque')
      element.classList.add('come-in')
      instance.unobserve(element)
    }
  })
}

const observer = new IntersectionObserver(callback)

onMounted(() => {
  //TODO
  const elements = document.querySelectorAll('.observer-item')
  elements.forEach((ele) => {
    ele.classList.add('opaque')
    observer.observe(ele)
  })
  // articleList.value.forEach((listItem) => {})
})
</script>

<style lang="scss" scoped>
.pagination--container {
  margin: 60px 0 10px;
}
.come-in {
  opacity: 1;
  // scale: 0.8;
  // translate: 0 150px;
  translate: 150px 0;
  animation: come-in 1s ease both;
}
.come-in:nth-child(odd) {
  animation-duration: 1s;
}
.already-visible {
  opacity: 1;
  translate: 0;
  animation: none;
}
@keyframes come-in {
  100% {
    // scale: none;
    translate: 0;
  }
}
.opaque {
  opacity: 0;
}
</style>
