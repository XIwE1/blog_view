<!--
 * new page
 * @author: 西维
 * @since: 2022-07-04
 * dynamicTime.vue
-->
<!-- 来源：https://juejin.cn/post/6936811586736619551 -->
<template>
  <div class="time-container">
    <div class="stage preserve">
      <div class="number preserve" data-digit="0">
        <div v-for="item in 7" :key="item + 'H1'" class="line preserve translate"></div>
      </div>
      <div class="number preserve" data-digit="0">
        <div v-for="item in 7" :key="item + 'H2'" class="line preserve translate"></div>
      </div>

      <div class="colon preserve colonS"></div>

      <div class="number preserve" data-digit="0">
        <div v-for="item in 7" :key="item + 'M1'" class="line preserve translate"></div>
      </div>
      <div class="number preserve" data-digit="0">
        <div v-for="item in 7" :key="item + 'M2'" class="line preserve translate"></div>
      </div>

      <div class="colon preserve colonF"></div>

      <div class="number preserve" data-digit="0">
        <div v-for="item in 7" :key="item + 'S1'" class="line preserve translate"></div>
      </div>
      <div class="number preserve" data-digit="0">
        <div v-for="item in 7" :key="item + 'S2'" class="line preserve translate"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
const time = () => {
  const timeTem = new Date()
  let a = '0'
  let b = '0'
  if (String(timeTem.getHours()).length > 1) {
    a = String(timeTem.getHours()).substring(0, 1)
    b = String(timeTem.getHours()).substring(1, 2)
  } else {
    a = '0'
    b = String(timeTem.getHours()).substring(0, 1)
  }

  let c = '0'
  let d = '0'
  if (String(timeTem.getMinutes()).length > 1) {
    c = String(timeTem.getMinutes()).substring(0, 1)
    d = String(timeTem.getMinutes()).substring(1, 2)
  } else {
    c = '0'
    d = String(timeTem.getMinutes()).substring(0, 1)
  }

  let e = '0'
  let f = '0'
  if (String(timeTem.getSeconds()).length > 1) {
    e = String(timeTem.getSeconds()).substring(0, 1)
    f = String(timeTem.getSeconds()).substring(1, 2)
  } else {
    e = '0'
    f = String(timeTem.getSeconds()).substring(0, 1)
  }
  return [a, b, c, d, e, f]
}
onMounted(() => {
  const numbers = document.getElementsByClassName('number')
  setInterval(() => {
    const arr = time()
    Array.prototype.slice.call(numbers).forEach((key, index) => {
      key.setAttribute('data-digit', arr[index])
    })
  }, 1000)
})
</script>

<style lang="scss" scoped>
.preserve {
  transform-style: preserve-3d;
  perspective: 1000px;
}

/* 容器 */
.time-container {
  height: 100%;
  position: relative;
  text-align: center;
}

/* 舞台 */
.stage {
  height: 100%;
  transform: rotateX(10deg) rotateZ(0);
}
/* 数字样式  */
.number {
  position: relative;
  width: 2vw;
  height: 8vw;
  display: inline-block;
  margin: 3vw 3vw 0 0;
}

.line {
  position: absolute;
  top: 0;
  left: 0;
  width: 3vw;
  height: 2px;
  background: #181919;
}

.line::before,
.line::after {
  content: '';
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  background-color: #34eabc;
  box-shadow: 0 0 1vw #0bfdfd, inset 0 0 0.125vmin #0bfdfd;
}
.line::before {
  left: 0;
  transition: all 0.5s ease-in;
}
.line::after {
  right: 0;
  transition: all 0.5s ease-out;
}

/* 计算每根线的位置 */
.line:nth-child(1) {
  top: -0.2vw;
}
.line:nth-child(2) {
  top: 3.2vw;
}
.line:nth-child(3) {
  top: 6.6vw;
}

.line:nth-child(4) {
  transform: rotate(90deg) translateY(0.2vw);
  /* 设置 旋转中心为 最左边 元素中点  */
  transform-origin: 0 center;
}
.line:nth-child(5) {
  transform: rotate(-90deg) translateY(0.2vw);
  /* 设置 旋转中心为 最右边 元素中点  */
  transform-origin: 100% center;
}

.line:nth-child(6) {
  top: 3.4vw;
  transform: rotate(90deg) translateY(0.2vw);
  transform-origin: 0 center;
}
.line:nth-child(7) {
  top: 3.4vw;
  transform: rotate(-90deg) translateY(0.2vw);
  transform-origin: 100% center;
}

/* 减少我们的距离 实现阴影效果 */
.translate::before,
.translate::after {
  transform: translateZ(50px);
}

// 数字动画代码
.number[data-digit='1'] .line:nth-child(1)::before,
.number[data-digit='1'] .line:nth-child(1)::after,
.number[data-digit='1'] .line:nth-child(2)::before,
.number[data-digit='1'] .line:nth-child(2)::after,
.number[data-digit='1'] .line:nth-child(3)::before,
.number[data-digit='1'] .line:nth-child(3)::after,
.number[data-digit='1'] .line:nth-child(4)::before,
.number[data-digit='1'] .line:nth-child(4)::after,
.number[data-digit='1'] .line:nth-child(6)::before,
.number[data-digit='1'] .line:nth-child(6)::after,
.number[data-digit='2'] .line:nth-child(4)::before,
.number[data-digit='2'] .line:nth-child(4)::after,
.number[data-digit='2'] .line:nth-child(7)::before,
.number[data-digit='2'] .line:nth-child(7)::after,
.number[data-digit='3'] .line:nth-child(4)::before,
.number[data-digit='3'] .line:nth-child(4)::after,
.number[data-digit='3'] .line:nth-child(6)::before,
.number[data-digit='3'] .line:nth-child(6)::after,
.number[data-digit='4'] .line:nth-child(1)::before,
.number[data-digit='4'] .line:nth-child(1)::after,
.number[data-digit='4'] .line:nth-child(3)::before,
.number[data-digit='4'] .line:nth-child(3)::after,
.number[data-digit='4'] .line:nth-child(6)::before,
.number[data-digit='4'] .line:nth-child(6)::after,
.number[data-digit='5'] .line:nth-child(5)::before,
.number[data-digit='5'] .line:nth-child(5)::after,
.number[data-digit='5'] .line:nth-child(6)::before,
.number[data-digit='5'] .line:nth-child(6)::after,
.number[data-digit='6'] .line:nth-child(5)::before,
.number[data-digit='6'] .line:nth-child(5)::after,
.number[data-digit='7'] .line:nth-child(2)::before,
.number[data-digit='7'] .line:nth-child(2)::after,
.number[data-digit='7'] .line:nth-child(3)::before,
.number[data-digit='7'] .line:nth-child(3)::after,
.number[data-digit='7'] .line:nth-child(4)::before,
.number[data-digit='7'] .line:nth-child(4)::after,
.number[data-digit='7'] .line:nth-child(6)::before,
.number[data-digit='7'] .line:nth-child(6)::after,
.number[data-digit='9'] .line:nth-child(6)::before,
.number[data-digit='9'] .line:nth-child(6)::after,
.number[data-digit='0'] .line:nth-child(2)::before,
.number[data-digit='0'] .line:nth-child(2)::after {
  transform: translateZ(25px);
  background: #3c4444;
  box-shadow: 0 0 1vw #425454;
}

// 加入时间
.colon {
  position: relative;
  display: inline-block;
  width: 1.5vw;
  height: 8vw;
  margin: 0vw 2vw 0 0;
  //   animation: colonFra 1s linear infinite;
}
.colon::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0.5vw;
  height: 0.5vw;
  background-color: #34eabc;
  border-radius: 50%;
}
.colon::after {
  content: '';
  position: absolute;
  top: 4vw;
  left: 0;
  width: 0.5vw;
  height: 0.5vw;
  background-color: #34eabc;
  border-radius: 50%;
}
.colonS {
  left: 0vw;
}
.colonF {
  left: 1vw;
}
@keyframes colonFra {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
