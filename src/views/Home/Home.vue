<template>
  <div class="home">
    <homeNavBar></homeNavBar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>

    <div class="location">
      <div class="city">广州</div>
      <div class="position">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import homeNavBar from './cpns/home-nav-bar.vue';


</script>

<style scoped lang="less">
  .home {
    .banner {
      img {
        width: 100%;
      }
    }
    .location {
      display: flex;
      align-items: center;
      padding: 0 20px;
      height: 44px;
    }
    .city {
      flex: 1;
    }
    .position {
      display: flex;
      width: 74px;
      align-items: center;

      .text {
        position: relative;
        top:2px;
        font-size: 12px;
      }
      img {
        margin-left: 5px;
        width: 18px;
        height: 18px;
      }
    }
    
  }
</style>
