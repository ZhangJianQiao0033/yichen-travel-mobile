<template>
  <div class="home">
    <homeNavBar></homeNavBar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <homeSearchBox></homeSearchBox>
    <homeCategories></homeCategories>
    <homeContent></homeContent>

    <button @click="btnClick">加载更多</button>
  </div>
</template>

<script setup>
import homeNavBar from './cpns/home-nav-bar.vue';
import homeSearchBox from './cpns/home-search-box.vue';
import homeCategories from './cpns/home-categories.vue';
import useHomeStore from '@/store/modules/home';
import homeContent from './cpns/home-content.vue';
// 发送网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggests()
homeStore.fetchCategories()
homeStore.fetchHouseList()

const btnClick = () => {
  homeStore.fetchHouseList()
}
</script>

<style scoped lang="less">
  .home {
    margin-bottom: 60px;
    .banner {
      img {
        width: 100%;
      }
    }
  }
</style>
