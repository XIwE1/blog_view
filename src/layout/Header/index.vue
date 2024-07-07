<!--
 * new page
 * @author: 西维
 * @since: 2022-07-01
 * index.vue
-->
<template>
  <div class="container">
    <div class="header-background"></div>
    <div class="header-content flx-justify-between">
      <div class="content-title item">
        <!-- <span class="context">XIwE1's Blog</span> -->
        <img class="title" src="@/assets/header-title.png" />
        <dynamicLogos />
      </div>
      <div ref="timeContainer" class="content-time item">
        <dynamicTime id="dynamic" ref="dynamic" />
      </div>
      <!-- <div class="content-desc item">
        <span> 博士，您还有许多事情需要处理。现在还不能休息哦。 </span>
      </div> -->
    </div>
    <div class="header-scrollTips" data-cursor="pointer" @click="scrollView">
      <div class="tips">SCROLL</div>
      <span class="tips-arrow"></span>
      <span class="tips-arrow"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import { throttle } from '@/utils/util'
import dynamicTime from './components/dynamicTime.vue'
import dynamicLogos from './components/dynamicLogos.vue'

const timeContainer = ref<HTMLElement | null>(null)
// const dynamic = ref(null)
// const multiple = 10

const scrollView = () => {
  document.documentElement.scrollTop = window.innerHeight
}

onMounted(() => {
  // const element: HTMLElement | null = document.getElementById('dynamic')
  // if (timeContainer.value && element) {
  //   const transformElement = (x: number, y: number) => {
  //     const box = element.getBoundingClientRect()
  //     const calcX = -(y - box.y - (box.height >> 1)) / multiple
  //     const calcY = (x - box.x - (box.width >> 1)) / multiple
  //     element.style.transform = `rotateX(${calcX}deg) rotateY(${calcY}deg) scale(0.4)`
  //   }
  //   timeContainer.value.addEventListener('mousemove', (e: MouseEvent) => {
  //     window.requestAnimationFrame(function () {
  //       transformElement(e.clientX, e.clientY)
  //     })
  //   })
  //   timeContainer.value.addEventListener('mouseleave', (e: MouseEvent) => {
  //     window.requestAnimationFrame(function () {
  //       element.style.transform = 'rotateX(0) rotateY(0) scale(0.4)'
  //     })
  //   })
  // }
})
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  height: 100%;
}
.header-background {
  position: relative;
  height: 100%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  background-image: url(@/assets/bg.png);
  // background-image: url(@/assets/header-background.jpg);
  // background-image: url(@/assets/header-background6.jpg);
  // background-image: url(https://api.daihan.top/api/acg);
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
    background-attachment: fixed;
    background-image: url(@/assets/background-item.png);
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.15), transparent 35%);
  }
}
.header-content {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  // width: 40vw;
  height: 60%;
  flex-direction: column;
  .content-title {
    position: relative;
    width: 40vw;
    height: 20%;
    opacity: 0.5;
    .title {
      margin: 5vh 0;
    }
    .context {
      position: relative;
      font-size: 3rem;
      font-weight: 600;
      letter-spacing: 5px;
      font-family: 'BenderLight';
      &::after {
        content: '';
        position: absolute;
        right: 0;
        bottom: -1rem;
        font-size: 1rem;
        // animation: contextChanges 9s linear infinite;
      }
      @keyframes contextChanges {
        0% {
          content: 'A Developer';
          opacity: 1;
        }
        17% {
          opacity: 0;
        }
        33% {
          content: 'A Friend';
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
        66% {
          content: 'A Gamer';
          opacity: 1;
        }
        83% {
          opacity: 0;
        }
        100% {
          content: 'A Developer';
          opacity: 1;
        }
      }
    }
  }
  .content-time {
    width: 40vw;
    height: 40%;
    // transform-style: preserve-3d;
    // transition: all 0.1s;
    div {
      transform: scale(0.4);
    }
  }
  .content-desc {
    width: 50vw;
    height: 30%;
    font-size: 1rem;
    letter-spacing: 3px;
  }
  .item {
    margin: 15px 0;
  }
}
.header-scrollTips {
  position: absolute;
  left: 50%;
  bottom: 7.2rem;
  transform: translateX(-50%);
  height: 3rem;
  // opacity: 0;
  .appear {
    opacity: 1;
  }
  .tips {
    color: #cfbcbc;
    font-family: 'Geometos';
    font-size: 1rem;
    // font-weight: 600;
  }
  .tips-arrow {
    position: absolute;
    left: 50%;
    transform: translateX(-50%) rotate(-45deg);
    width: 0.5rem;
    height: 0.5rem;
    border-width: 3px;
    border-style: solid;
    border-top: none;
    border-right: none;
    border-bottom-color: #ababab;
    border-left-color: #ababab;
    &:first-of-type {
      bottom: 1rem;
      animation: scrollTipsAnime 2s infinite;
    }
    &:last-of-type {
      bottom: 0.3rem;
      animation: scrollTipsAnime 2s 0.4s infinite;
    }
    @keyframes scrollTipsAnime {
      0% {
        border-left-color: #ababab;
        border-bottom-color: #ababab;
      }
      30% {
        border-left-color: #fff;
        border-bottom-color: #fff;
      }
      60% {
        border-left-color: #ababab;
        border-bottom-color: #ababab;
      }
    }
  }
  &::after {
    content: '';
    position: absolute;
    left: -40%;
    top: -20%;
    width: 180%;
    height: 120%;
  }
}
</style>
