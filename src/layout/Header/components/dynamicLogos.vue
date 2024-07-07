<!--
 * new page
 * @author: 西维
 * @since: 2022-07-01
 * index.vue
-->
<template>
  <div id="bg" class="logos-container">
    <!-- 动态变化的logo -->
    <canvas id="canvas-content" width="300" height="300"> 浏览器版本过低，请升级浏览器 </canvas>
    <!-- <div class="direction"></div> -->
    <ul class="circle-container">
      <!-- 屏幕中的光点 -->
      <li v-for="item in 16" :key="item" :ref="'logoItem' + item"></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'

// 动画展示范围
const width = 300,
  height = 300
//定时器
let time1: NodeJS.Timeout

onMounted(() => {
  window.onload = function () {
    //  背景粒子
    const items: any | HTMLCollection =
      document.getElementsByClassName('circle-container')[0].children
    const bg = document.getElementById('bg') as HTMLElement

    for (const item of items) {
      const offsetBase = ~~(Math.random() * bg.clientWidth * 2) + 200 // 粒子偏移量
      const duration = ~~(Math.random() * 10 + 6) * 2 // 周期
      const delay = Math.random() * 10 // 延迟

      item.style.left = offsetBase + 'px'
      item.style.animationDelay = delay + 's'
      item.style.animationDuration = duration + 's'
    }

    // 获取canvas画布
    const canvas: HTMLCanvasElement = document.getElementById('canvas-content') as HTMLCanvasElement
    const context = canvas.getContext('2d') as CanvasRenderingContext2D

    // canvas 获取粒子位置
    function getImgData(img: any) {
      context.clearRect(0, 0, width, height)
      context.drawImage(img, 0, 0, 1024, 1024)
      // context.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight)

      const copy = context.getImageData(0, 0, 1024, 1024) // 获取像素点数据
      img.ballArr = []

      // 筛选有效像素点
      context.clearRect(0, 0, width, height)
      for (let y = 0; y < height; y += 8) {
        for (let x = 0; x < width; x += 8) {
          // 像素点的序号
          const index = x + y * width
          // 帅选条件为透明度
          const a = copy.data[index * 4 + 3]

          if (a > 150) {
            // 符合条件条件的坐标绘制粒子
            const bal = new ball(x, y)
            img.ballArr.push(bal)
          }
        }
      }
    }
    // canvas  画点
    function drawCircle(x: number, y: number, r: number, color: string) {
      context.beginPath()
      context.fillStyle = color
      context.arc(x, y, r, (Math.PI / 180) * 0, (Math.PI / 180) * 360)
      context.fill()
    }
    // 生成随机数
    function range(i: number) {
      return Math.random() * i
    }
    function intR(i: number) {
      return Math.floor(Math.random() * i)
    }
    // 随机颜色
    function colorR() {
      const key = range(1)
      if (key > 0.3) {
        return '#fff'
      }
      return '#838383'
    }
    // 画粒子的图像和方法
    class ball {
      x: number
      dx: number
      y: number
      dy: number
      initialX: number
      initialY: number
      time: number
      r: number
      color: string
      constructor(dx: number, dy: number) {
        // 从随机位置向dx，dy移动，速度由time决定
        this.x = range(width)
        this.y = range(height)

        // 目标点坐标
        this.dx = dx
        this.dy = dy

        // 总距离
        this.initialX = this.dx - this.x
        this.initialY = this.dy - this.y

        // 时间
        this.time = 100

        // 粒子半径和颜色
        this.r = 1.5
        this.color = colorR()
      }

      // 方法：画出粒子移动轨迹
      draw(count: number) {
        // 后面是速度方程 时间单位为1
        // this.x += this.initialX /100;
        // this.y += this.initialY /100;
        this.x += ((this.initialX * 2) / this.time) * (1 - count / this.time)
        this.y += ((this.initialY * 2) / this.time) * (1 - count / this.time)
        drawCircle(this.x, this.y, this.r, this.color)
      }
    }
    //连接两个数组
    function relateTow(a: any, b: any) {
      for (let i = 0; i < a.ballArr.length; i++) {
        const v = intR(b.ballArr.length)
        a.ballArr[i].x = b.ballArr[v].dx
        a.ballArr[i].initialX = a.ballArr[i].dx - a.ballArr[i].x
        a.ballArr[i].y = b.ballArr[v].dy
        a.ballArr[i].initialY = a.ballArr[i].dy - a.ballArr[i].y
      }
    }
    // 设置动画
    function animateBall(img: any) {
      let count = 1
      clearInterval(time1)
      time1 = setInterval(function () {
        context.clearRect(0, 0, width, height)
        for (let i = 0; i < img.ballArr.length; i++) {
          img.ballArr[i].draw(count)
        }
        if (count === 100) {
          clearInterval(time1)
        }
        count++
      }, 30)
    }
    // 开始动画
    function start(a: any, b: any, t: number) {
      setTimeout(() => {
        relateTow(a, b)
        animateBall(a)
      }, 4000 * t)
    }

    const img1 = new Image()
    const img2 = new Image()
    const img3 = new Image()
    const img4 = new Image()
    const img5 = new Image()
    const img6 = new Image()
    img1.src = '/src/assets/camp/logo_rhodes.png'
    img2.src = '/src/assets/camp/logo_yan.png'
    img3.src = '/src/assets/camp/logo_rhine.png'
    img4.src = '/src/assets/camp/logo_siesta.png'
    img5.src = '/src/assets/camp/logo_victoria.png'
    img6.src = '/src/assets/camp/logo_kazimierz.png'
    // 获取所有的图形，粒子位置信息
    img1.onload = () => getImgData(img1)
    img2.onload = () => getImgData(img2)
    img3.onload = () => getImgData(img3)
    img4.onload = () => getImgData(img4)
    img5.onload = () => getImgData(img5)
    img6.onload = () => getImgData(img6)
    // 等待图片绘制后开始
    setTimeout(() => {
      const target = () => {
        start(img1, img6, 0)
        start(img2, img1, 1)
        start(img3, img2, 2)
        start(img4, img3, 3)
        start(img5, img4, 4)
        start(img6, img5, 5)
        return target
      }
      setInterval(target(), 24 * 1000)
    }, 100)
  }
})
</script>

<style lang="scss" scoped>
// .logos-container {
// }
#bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

canvas {
  /* border: 1px solid #838383; */
  position: relative;
  top: -20px;
  display: block;
}
ul {
  position: absolute;
  top: -5vh;
  width: 80vw;
  height: 80vh;
}
li {
  position: absolute;
  top: 105%;
  left: 0;
  width: 4px;
  height: 4px;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  filter: blur(2px);
  list-style: none;
  opacity: 0;
  animation: animate linear infinite;
}

@keyframes animate {
  0% {
    top: 100%;
    opacity: 1;
  }

  100% {
    top: 0%;
  }
}
.direction {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 20vw;
  height: 5px;
  transform: translateX(-50%);
  border-radius: 20%;
  filter: blur(2px);
  animation: breathe 3s linear infinite;
}
@keyframes breathe {
  0% {
    background-color: rgb(49, 49, 49);
  }
  50% {
    background-color: rgb(119, 119, 119);
  }
  100% {
    background-color: rgb(49, 49, 49);
  }
}
</style>
