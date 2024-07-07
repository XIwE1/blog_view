<!--
 * new page
 * @author: 西维
 * @since: 2023-03-27
 * pagination.vue
-->
<template>
  <ul v-if="pages.length > 1" class="wrapper flx-center">
    <li
      :class="['arrow-item flx-center', pageCur > 1 ? 'appear' : '']"
      data-cursor="pointer"
      @click="() => pageCur > 1 && pageCur--"
    >
      <div class="arrow left"></div>
      <div class="arrow left"></div>
      pre
    </li>
    <li
      v-for="item in pages.slice(pageLR[0], pageLR[1])"
      :key="item"
      :class="['page-item', item === pageCur ? 'active' : '']"
      data-cursor="pointer"
      @click="() => (pageCur = item)"
    >
      {{ item }}
    </li>
    <li
      :class="['arrow-item flx-center', pageCur !== pages.length ? 'appear' : '']"
      data-cursor="pointer"
      @click="() => pageCur < pages.length && pageCur++"
    >
      next
      <div class="arrow right"></div>
      <div class="arrow right"></div>
    </li>
  </ul>

  <div class="navPagination">
    <span class="navPaginationCurrent anime-text fade-vertical">
      <span class="anime-text-wrapper">/// </span>
      <span class="navPaginationTotal">{{ pageCur }}</span>

      <!-- <input class="anime-text-input" data-cursor="pointer" :value="pageCur" disabled /> -->
    </span>
    <span>/</span>
    <span class="navPaginationTotal">{{ pages.length }}</span>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted, computed } from 'vue'

const props = defineProps<{ pagination: any }>()
const { count, size, defualtPage } = reactive(props.pagination)

const pageCount = ref(count)
const pageCur = ref(defualtPage)
const pageSize = ref(size)

const pages = computed(() => {
  const arr: number[] = new Array(Math.ceil(pageCount.value / pageSize.value))
    .fill(0)
    .reduce((pre, cur, idx) => {
      pre[idx] = idx + 1
      return pre
    }, [])

  return arr
})
const pageLR = computed(() => {
  const pageLen = pages.value.length
  if (pageLen <= 9) {
    return [0, 9]
  }
  if (pageCur.value <= 5) {
    return [0, 10]
  } else if (pageCur.value >= pageLen - 5) {
    return [pageLen - 10, pageLen]
  }
  return [pageCur.value - 5, pageCur.value + 5]
})
onMounted(() => {
  //TODO
})
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
  font-family: 'Bender' !important;
  li {
    list-style-type: none;
  }
}
.page-item {
  margin: 0 3px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 5px;
  color: rgb(199, 182, 182);
  letter-spacing: 2px;
  transition: all 0.3s ease-out;
  user-select: none;
  &.active {
    background-color: rgba($color: #000000, $alpha: 0.35);
    color: #fff;
  }
  &:hover {
    background-color: rgba($color: #000000, $alpha: 0.35);
    color: #fff;
  }
}

.arrow-item {
  visibility: hidden;
  margin: 0 3px;
  // width: 40px;
  height: 40px;
  line-height: 40px;
  color: #ababab;
  border-bottom-color: #ababab;
  border-left-color: #ababab;
  transition: all 0.16s ease-out;
  user-select: none;
  &:hover {
    color: #fff;
    border-color: #fff;
  }
  &.appear {
    transition: visibility 0s;
    visibility: visible;
  }
  .arrow {
    width: 10px;
    height: 10px;
    border-width: 3px;
    border-style: solid;
    border-top: none;
    border-right: none;
    border-color: inherit;
    border-radius: 2px;
    &.right {
      rotate: 225deg;
    }
    &.left {
      rotate: 45deg;
    }
  }
}
.navPagination {
  user-select: none;
  margin-top: 15px;
  color: rgb(199, 182, 182);
  font-family: 'Bender' !important;
  white-space: nowrap;
}
navPagination > span.navPaginationCurrent {
  text-align: right;
  width: auto;
  user-select: none;
}
.navPagination > span.navPaginationTotal {
  text-align: right;
  width: 1.5rem;
}
.navPagination > span {
  //   display: inline-block;
  margin: 0 5px;
  text-align: center;
  font-size: 1rem;
  letter-spacing: 0.25em;
  width: 2rem;
}
.anime-text .anime-text-wrapper {
  user-select: none;
}
.anime-text-input {
  width: 30px;
  text-align: center;
  color: rgb(199, 182, 182);
  letter-spacing: 0.25em;
  outline: none;
  background-color: transparent;
  border: none;
  font-family: 'Bender' !important;
  font-size: 1rem;
  user-select: none;
  // border-bottom: 1px solid rgb(199, 182, 182);
}
</style>
