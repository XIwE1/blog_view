<!--
 * new page
 * @author: 西维
 * @since: 2022-07-04
 * index.vue
-->
<template>
  <div class="homeContent">
    <main>
      <Main />
    </main>
    <aside>
      <Aside />
    </aside>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import Main from './main/index.vue'
import Aside from './aside/index.vue'

onMounted(() => {
  //TODO
})
</script>

<style lang="scss" scoped>
.homeContent {
  padding: 2rem 0;
  margin: auto;
  display: flex;
  justify-content: space-around;
  width: 58vw;
  main {
    width: 70%;
  }
  aside {
    width: 25%;
  }
}
</style>
