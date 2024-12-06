<template>
  <div class="home">
    <homeNavBar></homeNavBar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <homeSearchBox></homeSearchBox>
    
  </div>
</template>

<script setup>
import homeNavBar from './cpns/home-nav-bar.vue';
import homeSearchBox from './cpns/home-search-box.vue';

</script>

<style scoped lang="less">
  .home {
    .banner {
      img {
        width: 100%;
      }
    }
  }
</style>
