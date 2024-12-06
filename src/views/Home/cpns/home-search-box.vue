<template>
  <div class="location">
      <div class="city" @click="cityClick">{{city.cityName}}</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
  </div>
</template>

<script setup>
import useCityStore from '@/store/modules/city';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

  const router = useRouter()
  const cityClick = () => {
    router.push("/city")
  }

  const positionClick = () => {
    navigator.geolocation.getCurrentPosition((res => {
      console.log("位置获取成功", res);
    }), (err => {
      console.log("位置获取失败", res);
    }), {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    })
  }

  const cityStore = useCityStore()
  const {city} = storeToRefs(cityStore)

</script>

<style scoped lang="less">
  .location {
    display: flex;
    align-items: center;
    padding: 0 20px;
    height: 44px;
    
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
