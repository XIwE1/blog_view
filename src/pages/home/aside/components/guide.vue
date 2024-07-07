<!--
 * new page
 * @author: 西维
 * @since: 2022-07-18
 * index.vue
-->
<template>
  <ul class="guide--container flx-justify-center">
    <li
      v-for="item in categoryList"
      :key="item.label"
      class="guide--item flx-justify-between"
      data-cursor="pointer"
    >
      <span>{{ item.label }}</span>
      <span>{{ item.total }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'

// eslint-disable-next-line no-undef
defineProps<{ categoryList: Menu.CategoryOptions[] }>()

onMounted(() => {
  //TODO
})
</script>

<style lang="scss" scoped>
.guide--container {
  margin: 0;
  padding: 0;
  letter-spacing: 2px;
}
.guide--item {
  position: relative;
  margin: 10px 0;
  padding: 10px 1rem;
  border-radius: 3px;
  flex-direction: row;
  transition: 0.3s linear;
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    // color: #22bbff;
    background-color: #22bbff;
    padding: 10px 1.5rem;
    // transform: translateX(1rem);
  }
}
</style>
