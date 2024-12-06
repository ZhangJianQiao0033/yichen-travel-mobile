<template>
  <div class="city-group">

    <van-index-bar :sticky="false" :index-list="indexList">
      <van-index-anchor index="热门" />
      <div class="list">
        <template v-for="(city, index) in groupData.hotCities">
          <div class="city" @click="cityClick(city)">{{ city.cityName }}</div>
        </template>
      </div>
        
      <template v-for="(group, index) in groupData.cities" :key="index" >
        <van-index-anchor :index="group.group" />
        <template v-for="(city, indey) in group.cities" :key="indey">
          <van-cell :title="city.cityName" @click="cityClick(city)"/>
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import useCityStore from '@/store/modules/city';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({})
  }
})
const indexList = computed(() => {
  const list = props.groupData.cities.map(item => item.group)
  list.unshift("#")
  return list
})

const router = useRouter()
const cityStore = useCityStore()
const cityClick = (city) => {
  cityStore.city = city
  router.back()
}
</script>

<style scoped>
.city-group {

  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px;
    padding-right: 25px;
  }

  .city {
    margin: 6px 0;
    width: 70px;
    height: 28px;
    line-height: 28px;
    border-radius: 14px;
    font-size: 12px;
    text-align: center;
    color: #000;
    background-color: #fff4ec;

  }
}
</style>
