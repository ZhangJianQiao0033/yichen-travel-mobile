<template>
  <div class="price">
    <h2 class="title">{{ priceInfo.title }}</h2>
    <div class="content">{{ priceInfo.introduction }}</div>

    <div class="footer">
      <img src="/src/assets/img/detail/icon_ensure.png" alt="">
      <div class="text">弘源旅途, 永无止境!</div>
    </div>
  </div>
</template>

<script setup>

defineProps({
  priceInfo: {
    type: Object,
    default: () => ({})
  }
})

</script>

<style scoped lang="less">
.price {
  padding: 0 15px;

  .title {
    font-size: 14px;
  }
  .content {
    margin-top: 15px;
    font-size: 12px;
    color: #666;
  }
  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 120px;

    img {
      width: 123px;
    }
    .text {
      margin-top: 12px;
      font-size: 12px;
      color: #7688a7;
    }
  }
}

</style>
