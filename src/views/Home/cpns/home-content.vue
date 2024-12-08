<template>
  <div class="home-content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="(item, index) in houselist" :key="item.data.houseId">
        <houseItemV3 v-if="item.discoveryContentType === 3" :itemData="item.data"></houseItemV3>
        <houseItemV9 v-if="item.discoveryContentType === 9" :itemData="item.data"></houseItemV9>
      </template>
    </div>
  </div>
</template>

<script setup>
import useHomeStore from '@/store/modules/home';
import { storeToRefs } from 'pinia';
import houseItemV3 from '@/components/house-item-v3/house-item-v3.vue';
import houseItemV9 from '@/components/house-item-v9/house-item-v9.vue';

const homeStore = useHomeStore()
const { houselist } = storeToRefs(homeStore)


</script>

<style scoped lang="less">
.home-content {
  padding: 10px 8px;
  
  .title {
    padding: 10px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }
}

</style>
