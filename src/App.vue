<script setup lang="ts">
console.log('web_url', import.meta.env.VITE_APP_WEB_URL)
</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss">
#app {
  // @import './assets/font/font.css';
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}
</style>
