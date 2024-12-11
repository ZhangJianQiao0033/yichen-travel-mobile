<template>
  <div class="tab-bar">
    

    <van-tabbar v-model="currentIndex" active-color="#ff9854" route>
    <template v-for="(item, index) in tabbarData" :key="index">
      <van-tabbar-item :to="item.path">
        <span>{{ item.text }}</span>
        <template #icon>
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
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const currentIndex = ref(0)
watch(route, (newRoute) => {
  const index = tabbarData.findIndex(item => item.path === newRoute.path)
  if (index === -1) return
  currentIndex.value = index
})

</script>

<style scoped lang="less">
  .tab-bar {
    img {
      height: 25px;
    }
  }
</style>
