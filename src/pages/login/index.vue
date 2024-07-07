<template>
  <h2>loginPage loaded</h2>
  <h2>{{ mainStore.name }}</h2>
  <h2>name Length:{{ mainStore.nameLength }}</h2>
  <button @click="updateState">update name</button>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store/main'
// <template/> Can Get store's state By {{mainStore.stateName}} mainStore means some xxStore
const mainStore = useMainStore()

// This Method Can Update Target paramStore's state
const updateState = () => {
  // $patch Update store's state
  mainStore.$patch({
    name: 'Name Has Been Update',
  })
}
</script>
