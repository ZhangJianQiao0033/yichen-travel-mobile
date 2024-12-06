<template>
  <div class="city topPage" >
    <div class="top">
      <van-search 
        v-model="searchValue" 
        placeholder="城市/区域/位置"  
        shape="round" 
        show-action 
        @cancel="cancelClick"
      />

    <van-tabs v-model:active="tabActive" color="#ff9854" line-height="3">
      <template v-for="(value, key, index) in allCities" :key="key">
        <van-tab :title="value.title" :name="key" ></van-tab>
      </template>
    </van-tabs>
  </div>

    <div class="content">
      
        <template v-for="(value, key, index) in allCities" :key="key">
          <CityGroup v-show="key === tabActive" :groupData="value"></CityGroup>
        </template>
      
    </div>
  </div>
</template>

<script setup>

import useCityStore from '@/store/modules/city';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import CityGroup from './cpns/city-group.vue';

const searchValue = ref("")
const router = useRouter()
const cancelClick = () => {
  router.back()
}

const tabActive = ref()


const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const {allCities} = storeToRefs(cityStore)

const currentGroup = computed(() => allCities.value[tabActive.value])




</script>

<style scoped>
.city {
  .top {
    position: relative;
    z-index: 9;
  }
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}

</style>
