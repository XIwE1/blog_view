<!--
 * new page
 * @author: 西维
 * @since: 2022-07-18
 * index.vue
-->
<template>
  <a
    v-for="item in _tagList"
    :key="item.label"
    :href="'/tags/' + item.label"
    :style="{ 'font-size': `${item.size}rem` }"
    class="tag--item flx-justify-between"
    data-cursor="pointer"
  >
    <span>{{ item.label }}</span>
  </a>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted, computed } from 'vue'

// eslint-disable-next-line no-undef
const props = defineProps<{ tagList: Menu.tagOptions[] }>()

const _tagList = computed(() => {
  const totals = props.tagList.map((item) => item.total)
  const min = Math.min(...totals) || 0
  const max = Math.max(...totals) || 0
  const sizeItem = Number((0.4 / (max - min)).toFixed(2))
  return props.tagList.map((item) => {
    return { size: 1 + (item.total - min) * sizeItem, ...item }
  })
})
onMounted(() => {
  //TODO
})
</script>

<style lang="scss" scoped>
.tag--item {
  display: inline-block;
  margin: 2px;
  padding: 0 0.5rem;
  height: 1.8rem;
  color: #fff;
  letter-spacing: 1px;
  line-height: 1.8rem;
  text-align: center;
  text-decoration: none;
  border-radius: 3px;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: #22bbff;
  }
}
</style>
