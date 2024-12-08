<template>
  <div class="app">
    
    <RouterView/>
    <TabBar v-if="!route.meta.hideTabbar"></TabBar>
    <loading/>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import TabBar from './components/tab-bar.vue';


const route = useRoute()



</script>

<style scoped>

</style>
