<template>
  <div class="home-categories">

    <template v-for="item in categories">
      <div class="item">
        <img :src="item.pictureUrl" alt="">
        <div class="text">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<script setup>

import useHomeStore from '@/store/modules/home';
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore()
const { categories } = storeToRefs(homeStore)


</script>

<style scoped lang="less">
.home-categories {
  display: flex;
  margin-top: 7px;
  padding: 0 10px;
  height: 80px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none; 
  }
  .item {
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 70px;
    img {
      width: 32px;
      height: 32px;
    }
    .text {
      margin-top: 8px;
      font-size: 12px;
    }
  }
}

</style>
