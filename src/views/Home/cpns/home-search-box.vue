<template>
  <div class="search-box">
    <div class="location item">
      <div class="city" @click="cityClick">{{city.cityName}}</div>
      <div class="  position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>

    <div class="item date-range" @click="dateClick" >
      <div class="date start">
        <span class="tip">入住</span>
        <span class="time">{{startDateStr}}</span>
      </div>
      <div class="stay">共{{stayCount}}晚</div>
      <div class="date end">
        <span class="tip">离店</span>
        <span class="time">{{endDateStr}}</span>
      </div>
    </div>
    <van-calendar v-model:show="showCalendar" @confirm="onConfirm" :round="false" type="range" :show-confirm="false"/>

    <div class="item price-count">
      <div class="price">价格不限</div>
      <div class="count">人数不限</div>
    </div>

    <div class="item keyword">关键字/位置/民宿名</div>

    <div class="hot-suggests">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div class="item1" :style="{ color: item.tagText.color, background: item.tagText.background.color }">{{ item.tagText.text }}</div>
      </template>
    </div>

    <!-- 搜索框 -->
    <div class="search item" >
      <div class="btn" @click="searchClick">开始搜索</div>
    </div>
  </div>
 
</template>

<script setup>
import useCityStore from '@/store/modules/city';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { formatMonthDay, calculateDaysBetween } from '@/utils/format_month_day';
import { computed, ref } from 'vue';
import useHomeStore from '@/store/modules/home';
import useMainStore from '@/store/modules/main';
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


  // 日期

  
  const showCalendar = ref(false)
  const mainStore = useMainStore()
  const {startDate, endDate} = storeToRefs(mainStore)
  const startDateStr = computed(() => formatMonthDay(startDate.value))
  const endDateStr = computed(() => formatMonthDay(endDate.value))
  const stayCount = ref(calculateDaysBetween(startDate.value, endDate.value))
  
  const onConfirm = (value) => {
    
    startDate.value = value[0]
    endDate.value = value[1]
    stayCount.value = calculateDaysBetween(value[0], value[1])
    showCalendar.value = false
  }

  const dateClick = () => {
    showCalendar.value = true
  }


  // hot suggests
  const homeStore = useHomeStore()
  
  const {hotSuggests} = storeToRefs(homeStore)

  //搜索框
  const searchClick = () => {
    router.push({
      path: "/search",
      query: {
        startDate: startDate.value,
        endDate: endDate.value,
        city: city.value.cityName
      }
    })
  }

</script>

<style scoped lang="less">
.search-box {
  --van-calendar-popup-height: 100%
}
  .location {
    display: flex;
    align-items: center;
    padding: 0 20px;
    height: 44px;
    
    .city {
      font-size: 15px;
      flex: 1;
    }
    .position {
      display: flex;
      width: 74px;
      align-items: center;
      color: #666666;
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
  .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 44px;
      padding: 0 20px;
      border-bottom: 1px solid var(--line-color);
    }

  .date-range {
    
    .date {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 15px;
      .tip {
        font-size: 12px;
        color: #999999;
      }
    }
    .stay {
      font-size: 12px;
      color: #666666;
    }

    .end {
      margin-right: 15px;
    }
  }
  .price-count {
    .price {
      color: #999999;
    }
    .count {
      margin-right: 15px;
      color:  #999999;
    }

  }
  .keyword {
    color:  #999999;
  }

  .hot-suggests {
    
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 10px 0;
    height: auto;
    padding: 0 20px;
    border-bottom: 1px solid var(--line-color);
    
    .item1 {
      padding: 4px 8px;
      margin: 4px;
      border-radius: 14px;
      font-size: 12px;
      line-height: 1;
    }
  }

  .search {
    .btn {
      width: 335px;
      height: 38px;
      line-height: 38px;
      font-weight: 500;
      font-size: 18px;
      color: #fff;
      text-align: center;
      border-radius: 20px;
      background-image: var(--theme-linear-gradient);
    }
  }
</style>
