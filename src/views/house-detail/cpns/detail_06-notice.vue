<template>
  <detailSection title="预订须知">
    <div class="rules">
      <template v-for="(item, index) in orderRules" :key="index">
        <div class="item">
          <div class="title">{{ item.title }}</div>
          <div class="introduction">{{ item.introduction }}</div>
          <div class="tip" v-if="index === 1">查看说明</div>
        </div>
      </template>
    </div>

  </detailSection>
</template>

<script setup>
import detailSection from '@/components/detail-section/detail-section.vue';

defineProps({
  orderRules: {
    type: Array,
    default: []
  }
})
</script>

<style scoped>
.rules {
  .item {
    display: flex;
    margin: 10px 0 20px;
    font-size: 12px;
    .title{
      width: 64px;
      color: #666;
    }
    .introduction {
      flex: 1;
      color: #333;
    }
    
  }
}
</style>
