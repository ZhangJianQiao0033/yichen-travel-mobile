<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData.image.url" alt="">
      </div>
      <div class="info">
        <div class="summaryText">{{ itemData.summaryText }}</div>
        <div class="houseName">{{ itemData.houseName }}</div>

        <div class="price">
          <!-- <div class="commentScore">{{ itemData.commentScore }}</div> -->
          <van-rate :model-value="Number(itemData.commentScore)"  :size="15" color="#fff" readonly allow-half/>

          <div class="finalPrice">¥{{ itemData.finalPrice }}</div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})


</script>

<style scoped>
.house-item {
  width: 50%;
  color: #fff;
  .item-inner {
    position: relative;
    margin: 5px;
    background: #fff;
    border-radius: 6px;
    overflow: hidden;
    .cover {

      img {
        width: 100%;
      }
    }

    .info {
      position: absolute;
      padding: 8px 10px;
      bottom: 0;
      

      .summaryText {
        font-size: 12px;
      }
      .houseName {
        display: -webkit-box;
        -webkit-line-clamp: 2;         /* 设置显示的行数为2 */
        -webkit-box-orient: vertical;  /* 设置为垂直排列 */
        overflow: hidden;              /* 隐藏超出部分 */
        text-overflow: ellipsis; 

        margin: 5px 0;
      }
      .price {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
