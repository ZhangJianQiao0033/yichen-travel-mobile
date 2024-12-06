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
        <span class="time">{{startDate}}</span>
      </div>
      <div class="stay">共{{stayCount}}晚</div>
      <div class="date end">
        <span class="tip">离店</span>
        <span class="time">{{endDate}}</span>
      </div>
    </div>
    <van-calendar v-model:show="showCalendar" @confirm="onConfirm" :round="false" type="range" :show-confirm="false"/>
  </div>
 
</template>

<script setup>
import useCityStore from '@/store/modules/city';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { formatMonthDay, calculateDaysBetween } from '@/utils/format_month_day';
import { ref } from 'vue';
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
  const startDate = ref(formatMonthDay(new Date()))
  const newDate = new Date()
  newDate.setDate(newDate.getDate() + 1)
  const endDate = ref(formatMonthDay(newDate))

  const showCalendar = ref(false)
  const stayCount = ref(calculateDaysBetween(new Date(), newDate))
  const onConfirm = (value) => {
    console.log(value);
    startDate.value = formatMonthDay(value[0])
    endDate.value = formatMonthDay(value[1])
    stayCount.value = calculateDaysBetween(value[0], value[1])
    showCalendar.value = false
  }

  const dateClick = () => {
    showCalendar.value = true
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
</style>
