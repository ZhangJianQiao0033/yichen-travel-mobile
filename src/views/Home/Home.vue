<template>
  <div class="home" ref="homeRef">
    <homeNavBar></homeNavBar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <homeSearchBox></homeSearchBox>
    <homeCategories></homeCategories>
    <searchBar v-if="isShowSearchBar"></searchBar>
    <homeContent></homeContent>

    <!-- <button @click="btnClick">加载更多</button> -->
  </div>
</template>
<script>
export default { name: "home" }

</script>
<script setup>
import { computed, onActivated, ref, watch } from 'vue';
import homeNavBar from './cpns/home-nav-bar.vue';
import homeSearchBox from './cpns/home-search-box.vue';
import homeCategories from './cpns/home-categories.vue';
import useHomeStore from '@/store/modules/home';
import homeContent from './cpns/home-content.vue';
import useScroll from '@/hooks/useScroll';
import searchBar from '@/components/search-bar/search-bar.vue';
// 发送网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggests()
homeStore.fetchCategories()
homeStore.fetchHouseList()

// const btnClick = () => {
//   homeStore.fetchHouseList()
// }

const homeRef = ref()
const { isReachBottom, scrollTop } = useScroll(homeRef)

watch(isReachBottom, (newValue) => {
  if(newValue) {
    homeStore.fetchHouseList().then(() => {
      isReachBottom.value = false
    })
  }
})

const isShowSearchBar = computed(() => {
  return scrollTop.value > 150
})

onActivated(() => {
  homeRef.value.scrollTo({
    top: scrollTop.value
  })
})

</script>

<style scoped lang="less">
  .home {
    height: 100vh;
    overflow-y: auto;
    box-sizing: border-box;
    padding-bottom: 60px;
    .banner {
      img {
        width: 100%;
      }
    }
  }
</style>
