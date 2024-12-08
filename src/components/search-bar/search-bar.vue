<template>
  <div class="search-bar">
    <div class="search">
      <div class="select-time">
      <div class="start item">
        <div class="name">住</div>
        <div class="date">{{startDateStr}}</div>
      </div>
      <div class="end item">
        <div class="name">离</div>
        <div class="date">{{endDateStr}}</div>
      </div>
    </div>
    <div class="content">
      <div class="keyword">关键字/位置/民宿</div>
    </div>
    <div class="right">
      <i class="icon-search"></i>
    </div>
    </div>
  </div>
</template>

<script setup>
import useMainStore from '@/store/modules/main';
import { formatMonthDay } from '@/utils/format_month_day';
import { storeToRefs } from 'pinia';


const mainStore = useMainStore()
const {startDate, endDate} = storeToRefs(mainStore)

const startDateStr = formatMonthDay(startDate.value, "MM.DD")
const endDateStr = formatMonthDay(endDate.value, "MM.DD")

</script>

<style scoped lang="less">
.search-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 16px 16px 10px;
  background-color: #fff;
  z-index: 9;

  .search {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 45px;
    line-height: 45px;
    padding: 0 10px;
    font-size: 14px;
    color: #999;
    border-radius: 6px;
    background-color: #f2f4f6;
    
    .select-time {
      display: flex;
      flex-direction: column;
      .item {
        display: flex;
        flex-direction: row;
        align-items: center; 
        line-height: normal;
        font-size: 10px;

        .date {
          position: relative;
          margin: 0 10px 0 3px;
          font-weight: 500;
          color: #333333;
        }
      }

      .end .date::after {
        content: " ";
        width: 0;
        height: 0;
        border: 4px solid #666;
        border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #666;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        position: absolute;
        bottom: 0px;
        right: -12px;
      }

      
    }


    .content {
      position: relative;
      flex: 1;
      padding: 0 6px;
      border-left: 1px solid #fff;

      .keyword {
        font-size: 12px;
      }
    }
    .right {
      display: flex;
      align-items: center;
      .icon-search {
        width: 24px;
        height: 24px;
        display: inline-block;
        background-image: url(/src/assets/img/home/home-sprite.png);
        background-position: -29px -151px;
        background-size: 207px 192px;
      }
    }
  }
}


</style>
