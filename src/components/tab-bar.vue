<template>
  <div class="tab-bar">
    
    <template v-for="(item, index) in tabbarData" :key="index">
      <div class="tab-bar-item" :class="{active: currentIndex === index}" @click="itemClick(index, item)">
        <img :src="getAssetURL(item.imgUrl)" alt=""  v-if="index !== currentIndex">
        <img :src="getAssetURL(item.imgActiveUrl)" alt=""  v-else>
        <span class="text">{{item.text}}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import { tabbarData } from '@/assets/data/tabbar';
import { getAssetURL } from '@/utils/load_asset';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const currentIndex = ref(0)
const itemClick = (index, item) => {
  currentIndex.value = index
  router.push(item.path)
}
</script>

<style scoped lang="less">
  .tab-bar {
    position: fixed;
    display: flex;
    left: 0;
    right: 0;
    bottom: 0;
    height: 50px;
    border-top: 1px solid #f3f3f3;
    
    .tab-bar-item {
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      
      &.active {
        color: var(--primary-color);
      }
      img {
        width: 36px;
      }
      .text {
        font-size: 12px;
        margin-top: 2px;
      }
    }

  }
</style>
