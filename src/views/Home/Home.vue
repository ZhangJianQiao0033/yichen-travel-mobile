<template>
  <div class="home">
    <homeNavBar></homeNavBar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <homeSearchBox></homeSearchBox>
    <homeCategories></homeCategories>
  </div>
</template>

<script setup>
import homeNavBar from './cpns/home-nav-bar.vue';
import homeSearchBox from './cpns/home-search-box.vue';
import homeCategories from './cpns/home-categories.vue';
import useHomeStore from '@/store/modules/home';
// 发送网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggests()
homeStore.fetchCategories()


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
