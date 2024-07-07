<!--
 * new page
 * @author: 西维
 * @since: 2022-07-18
 * index.vue
-->
<template>
  <a
    v-for="item in linkList"
    :key="item.iconName"
    :href="item.link"
    :title="item.alt"
    target="_blank"
    rel="noreferrer"
    class="link--item"
    data-cursor="pointer"
  >
    <svg-icon
      :icon-name="'icon-' + item.iconName"
      data-cursor="pointer"
      class-name="link-svg"
      color="#fff"
    ></svg-icon>
  </a>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'

const linkList = ref([
  {
    iconName: 'github-fill',
    link: 'https://github.com/XIwE1',
    alt: 'github',
  },
  {
    iconName: 'juejin',
    link: 'https://juejin.cn/user/1372654389433496',
    alt: 'juejin',
  },
  {
    iconName: 'QQ',
    link: 'tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=804393870&website=www.oicqzone.com',
    alt: 'QQ',
  },
  {
    iconName: 'weixin',
    link: 'tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=804393870&website=www.oicqzone.com',
    alt: 'weixin',
  },
])

onMounted(() => {
  //TODO
})
</script>

<style lang="scss" scoped>
.link--item {
  color: rgb(199, 182, 182);
  position: relative;
  .link-svg {
    width: 2rem;
    height: 2rem;
    vertical-align: middle;
    z-index: 1;
  }
  &:hover {
    &::after {
      background-color: #22bbff;
      transition: 0.3s linear;
    }
  }
  &::after {
    content: '';
    position: absolute;
    left: -25%;
    top: -25%;
    width: 150%;
    height: 150%;
    border-radius: 10px;
  }
}
</style>
