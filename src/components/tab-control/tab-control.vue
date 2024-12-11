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
import useScroll from '@/hooks/useScroll';
import { watch } from 'vue';
import { ref } from 'vue';

const active = ref(0)
const props = defineProps({
  sectionEls: {
    type: Object,
    default: () => ({})
  },
  detailEl: {
    type: Object,
    default: () => ({})
  }
})
const {scrollTop} = useScroll(ref(props.detailEl))

let isClick = false
let currentDistance = -1
const onClickTab = (value) => {
  const el = props.sectionEls[value.title]
  let distance = el.offsetTop
  if(value.name != 0) {
    distance = distance - 50
  }
  isClick = true
  currentDistance = distance
  props.detailEl.scrollTo({
    top: distance,
    behavior: 'smooth'
  })
}

watch(scrollTop, (newValue) => {
  if(newValue === currentDistance) {
    isClick = false
  }
  if(isClick) {
    return
  }
  const values = Object.values(props.sectionEls).map(el => el.offsetTop)
  
  let index = values.length - 1
  for(let i =0; i < values.length; i++) {
    if(values[i] > newValue + 70) {
      index = i - 1
      break
    }
  }
  active.value = index
})



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
