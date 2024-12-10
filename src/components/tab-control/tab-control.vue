<template>
  <div class="tab-control">
    <van-tabs v-model:active="active"  color="#FF9854" @click-tab="onClickTab">
      <template v-for="(value, key, index) in sectionEls" :key="index">
        <van-tab :title="key"></van-tab>
      </template>

    </van-tabs>

  </div>
</template>

<script setup>
const props = defineProps({
  sectionEls: {
    type: Object,
    default: () => ({})
  }
})
const onClickTab = (value) => {
  const el = props.sectionEls[value.title]
  let instance = el.offsetTop
  if(value.name != 0) {
    instance = instance - 50
  }
  window.scrollTo({
    top: instance,
    behavior: 'smooth'
  })
}

</script>

<style scoped>
.tab-control {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
</style>
