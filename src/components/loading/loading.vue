<template>
  <div class="loading" v-show="mainStore.isLoading" @click="loadingClick">
    <div class="bg">
      <img src="@/assets/img/home/full-screen-loading.gif" alt="">
    </div>
  </div>
</template>

<script setup>
import useMainStore from '@/store/modules/main';


const mainStore = useMainStore()
const loadingClick = () => {
  mainStore.isLoading = false
}
</script>

<style scoped>
.loading {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background-color: rgba(0,0,0,.2);
  .bg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 104px;
    height: 104px;
    
    background: url(@/assets/img/home/loading-bg.png) 0 0 / 100% 100%;

    img {
      position: relative;
      width: 70px;
      height: 70px;
      bottom: 5px;
    }
  }
}
</style>
