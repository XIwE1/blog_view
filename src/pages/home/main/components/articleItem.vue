<!--
 * new page
 * @author: 西维
 * @since: 2022-07-19
 * index.vue
-->
<template>
  <div class="article--item flx-justify-between" data-cursor="pointer">
    <div v-if="articleInfo.cover" class="cover">
      <img :src="articleInfo.cover" />
    </div>
    <div class="article--info">
      <div class="title">
        {{ articleInfo.title }}
      </div>
      <div class="meta">
        <span class="meta--date">
          <svg-icon icon-name="icon-calendar1" color="#858585"></svg-icon>
          <span>发表于 {{ articleInfo.createTime }}</span>
        </span>
        <span class="meta--category">
          <svg-icon icon-name="icon-inbox" color="#858585"></svg-icon>
          <span v-for="category in articleInfo.categorys" :key="category">{{ category }}</span>
        </span>
        <span class="meta--tags">
          <svg-icon icon-name="icon-tag2" color="#858585"></svg-icon>
          <span v-for="tag in articleInfo.tags" :key="tag">{{ tag }}</span>
        </span>
      </div>
      <div class="desc multi-text">
        {{ articleInfo.desc }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
defineProps<{ articleInfo: any }>()
onMounted(() => {
  //TODO
})
</script>

<style lang="scss" scoped>
.title {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.4rem;
  line-height: 2rem;
}
.cover {
  width: 40%;
  height: 100%;
  img {
    // width: 100%;
    // height: 100%;
    background-size: cover;
    background-position: center 0;
  }
}
.desc {
  color: rgba(255, 255, 255, 0.7);
  line-height: 2rem;
  font-size: 15px;
  letter-spacing: 0.5px;
  // font-family: 'BenderLight';
  // font-family: 'Geometos';
  font-family: HarmonyOS_Regular;
  font-weight: 500;
  text-align: left;
}
.meta {
  line-height: 27px;
  .meta--category,
  .meta--tags {
    span {
      &:not(:last-child) {
        &::after {
          content: '•';
          margin: 0 3px;
        }
      }
    }
  }
  & > span {
    color: #858585;
    font-size: 15px;
    span {
      margin-left: 2px;
    }
    &:not(:last-child) {
      &::after {
        content: '|';
        margin: 0 6px;
      }
    }
  }
}
.article--info {
  flex: 1;
  padding: 1rem 1.2rem;
}
.article--item {
  transition: transform 0.4s ease;
  &:hover {
    transform: scale(1.02);
    transition: transform 0.4s ease;
  }
}
</style>
