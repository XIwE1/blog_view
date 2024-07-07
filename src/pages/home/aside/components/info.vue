<!--
 * new page
 * @author: 西维
 * @since: 2022-07-18
 * index.vue
-->
<template>
  <div class="avatar--container"></div>
  <div class="info--form">
    <div class="form--item avatar">
      <img src="@/assets/avatar (1).jpeg" />
    </div>
    <div class="form--item name">XIwE1</div>
    <div class="form--item desc">
      前端工程师一枚 <br />25岁 <br />FROM 重庆<br />喜欢美食、游戏和运动<br />
      <span class="delete">开黑叫我🙈</span> 沉迷工作无法自拔
    </div>
    <div class="form--item position">
      <svg-icon icon-name="icon-position" data-cursor="pointer"></svg-icon>
      北京 / 海淀
    </div>
    <div class="form--item email">
      <svg-icon icon-name="icon-email" data-cursor="pointer"></svg-icon>
      804393870@qq.com
    </div>
    <div class="form--item maxim flx-justify-center" data-cursor="pointer">
      <svg-icon icon-name="icon-message" data-cursor="pointer"></svg-icon>
      <span class="context"> 但行好事 莫问前程</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'

onMounted(() => {
  //TODO
})
</script>

<style lang="scss" scoped>
.form--item {
  line-height: 1.5rem;
  letter-spacing: 1px;
  svg {
    font-size: 1rem;
  }
}
.avatar {
  img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    transition: 0.7s ease-in-out;
    &:hover {
      transform: rotate(360deg);
    }
  }
}
.name {
  padding: 0.4rem 0;
  color: #9398b3;
  font-size: 1.2rem;
  font-weight: 600;
}
.desc {
  .delete {
    text-decoration: line-through;
    color: #9398b3;
  }
}
.maxim {
  position: relative;
  margin-top: 5px;
  padding: 0 5px;
  line-height: 2.2rem;
  border-radius: 3px;
  background-color: #22bbff;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box; /* 设置n行，也包括1 */
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  .context {
    position: relative;
    z-index: 1;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgb(255, 114, 66);
    transition: transform 0.5s ease-out;
    transform: scaleX(0);
    transform-origin: 0 50%;
    z-index: 0;
  }
  &:hover::before {
    transform: scaleX(1);
    transition-timing-function: cubic-bezier(0.45, 1.64, 0.47, 0.66);
  }
}
</style>
