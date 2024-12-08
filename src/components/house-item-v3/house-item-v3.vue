<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData.image.url" alt="">
      </div>
      <div class="info">
        <div class="location">
          <img src="@/assets/img/home/location.png" alt="">
          <span>{{itemData.location}}</span>
        </div>
        <div class="houseName">{{ itemData.houseName }}</div>
        <div class="summaryText">{{ itemData.summaryText }}</div>
        <div class="price">
          <div class="finalPrice">¥{{ itemData.finalPrice }}</div>
          <div class="productPrice">¥{{ itemData.productPrice }}</div>
          <div class="priceTipBadge-text">{{ itemData.priceTipBadge.text }}</div>
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
      padding: 8px 10px;
      .location {
        display: flex;
        align-items: center;

        img {
          width: 12px;
          height: 12px;
        }
        span {
          font-size: 12px;
          color: #666666;
        }
      }

      .summaryText {
        font-size: 12px;
        color: #666666;
      }
      .houseName {
        display: -webkit-box;
        -webkit-line-clamp: 2;         /* 设置显示的行数为2 */
        -webkit-box-orient: vertical;  /* 设置为垂直排列 */
        overflow: hidden;              /* 隐藏超出部分 */
        text-overflow: ellipsis; 
        margin: 5px 0;
        color: #333333;
      }
      .price {
        display: flex;
        align-items: center;
        margin: 8px 0;

        .finalPrice {
          color: #ff9645;
        }

        .productPrice {
          margin: 0 3px;
          font-size: 12px;
          color: #999999;
        }
        .priceTipBadge-text {
          padding: 0 6px;

          background-image: linear-gradient(270deg, #f66, #ff9f9f);
          color: #fff;
          border-radius: 8px;
        }
      }
    }
  }
}
</style>
