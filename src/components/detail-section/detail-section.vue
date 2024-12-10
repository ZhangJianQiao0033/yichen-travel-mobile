<template>
  <div class="section">
    <div class="header">
      <h2 class="title">{{ title }}</h2>
    </div>
    <div class="content">
      <slot></slot>
    </div>

    <div class="footer">
      <div class="more">{{ more }}</div>
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<script setup>

defineProps({
  title: {
    type: String,
    default: ""
  },
  more: {
    type: String,
    default: "查看更多"
  }
})

</script>

<style scoped lang="less">
.section {
  margin-top: 12px;
  padding: 0 15px;
  border-top: 5px solid #f2f3f4;
  background-color: #fff;
  .header {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #eee;
    .content {
      padding: 8px 0;
    }
  }
  .content {
    padding: 8px 0;
  }
  .footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 45px;
    line-height: 45px;
    color: #ff9645;
    font-weight: 600;
    
  }
}

</style>
