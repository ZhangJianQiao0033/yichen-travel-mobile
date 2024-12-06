<template>
  <div class="tab-bar">
    

    <van-tabbar v-model="currentIndex" active-color="#ff9854">
    <template v-for="(item, index) in tabbarData" :key="index">
      <van-tabbar-item :to="item.path">
        <span>{{ item.text }}</span>
        <template #icon="props">
          <img :src="getAssetURL(item.imgUrl)" alt=""  v-if="index !== currentIndex">
          <img :src="getAssetURL(item.imgActiveUrl)" alt=""  v-else>
        </template>
      </van-tabbar-item>
    </template>
    
    
    
</van-tabbar>

  </div>
</template>

<script setup>
import { tabbarData } from '@/assets/data/tabbar';
import { getAssetURL } from '@/utils/load_asset';
import { ref } from 'vue';

const currentIndex = ref(0)

</script>

<style scoped lang="less">
  .tab-bar {
    img {
      height: 25px;
    }
  }
</style>
