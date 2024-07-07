<!--
 * new page
 * @author: 西维
 * @since: 2022-07-02
 * index.vue
-->
<template>
  <div class="container flx-justify-between">
    <div class="nav-logo">
      <img src="@/assets/logo_rhodes.png" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 652 93"
      >
        <path :d="LOGOPATH"></path>
      </svg>
    </div>
    <ul class="nav-menu flx-center">
      <li
        v-for="item in menuList"
        :key="item.path"
        :class="['nav--item', item.label === active ? 'active' : '']"
        data-cursor="pointer"
        @click.capture="setActive(item)"
      >
        <svg-icon
          :icon-name="'icon-' + item.icon"
          class-name="nav-svg"
          :color="item.label === active ? '#fff' : 'rgb(199, 182, 182)'"
        ></svg-icon>
        {{ item.label }}
      </li>
    </ul>
    <div class="nav-system"></div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import { path as LOGOPATH } from './logoPath'

const route = useRoute()
const active = ref('首页')

defineProps<{ menuList: Menu.NavOptions[] }>()
const setActive = (item: Menu.NavOptions) => {
  active.value = item.label
}
</script>

<style lang="scss" scoped>
.container {
  padding: 0 15vw;
  height: 100%;
}
.nav-logo {
  height: 100%;
  fill: rgba($color: #fff, $alpha: 0.8);
  transform: scale(0.8);
  img {
    width: 100%;
    height: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    margin-left: 15px;
    transform: translateY(-50%);
    height: 30px;
    opacity: 1;
  }
}
.nav-menu {
  margin: 0;
  padding: 0;
  height: 100%;

  flex-direction: row;
  color: rgb(199, 182, 182);
  .nav--item {
    margin: 0 5px;
    padding: 0 15px;
    height: 100%;
    line-height: 60px;
    list-style-type: none;
    font-family: HarmonyOS_Regular;
    transition: 0.3s ease-out;

    .nav-svg {
      width: 1rem;
      height: 1rem;
      color: rgb(199, 182, 182);
      &:hover {
        color: #fff;
      }
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 10px;
      left: 10%;
      width: 0%;
      height: 0;
      border-bottom: 3px solid #fff;
      // animation: btmExpand 0.2s linear;
      transition: width 0.3s;
    }
    &.active {
      position: relative;
      transform: translateY(-2px);
      color: #fff;
      // font-weight: 600;
      &::after {
        width: 80%;
      }
    }
    &:hover {
      color: #fff;
    }
  }
}
.nav-system {
  width: 10vw;
}

// @keyframes btmExpand {
//   0% {
//     width: 0;
//   }
//   100% {
//     width: 80%;
//   }
// }
</style>
