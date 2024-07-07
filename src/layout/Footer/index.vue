<!--
 * new page
 * @author: 西维
 * @since: 2022-07-01
 * index.vue
-->
<template>
  <div class="container flx-center">
    <p>备案</p>
    <p>页尾</p>
    <p>
      网站内使用的游戏素材，仅用于更好地表现游戏资料，其版权属于
      Arknights/上海鹰角网络科技有限公司。
    </p>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
onMounted(() => {
  //TODO
})
</script>

<style lang="scss" scoped>
.container {
  flex-direction: column;
  height: 120px;
  background-color: rgba($color: #000000, $alpha: 0.4);
  text-align: center;
  font-size: 0.7rem;
  & p {
    margin: 0.7rem 0 !important;
  }
}
</style>
