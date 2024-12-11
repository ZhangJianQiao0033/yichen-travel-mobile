<template>
  <div class="app">
    <router-view v-slot="props">
      <keep-alive include="home">
        <component :is="props.Component"></component>
      </keep-alive>
    </router-view>
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
