<template>

  <!--1.导航栏 -->
  <div class="house-detail topPage" ref="detailRef">
    <tabControl :sectionEls="sectionEls" v-if="showTabControl" :detailEl="detailRef"/>
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
    <!--2.轮播图 -->
    <template v-if="mainPart && mainPart.topModule">
      <detail_01Carousel :housePics="mainPart.topModule.housePicture.housePics"/>
      <detail_02Infos  :topInfos="mainPart.topModule" titile="描述" :ref="getSectionRef"/>
      <Detail_03Facility titile="设施" :ref="getSectionRef"  :houseFacility="mainPart.dynamicModule.facilityModule.houseFacility" />
      <detail_04Landlord  :landlordInfo="mainPart.dynamicModule.landlordModule" titile="房东" :ref="getSectionRef"/>
      <detail_05Comment  :commentInfo="mainPart.dynamicModule.commentModule" titile="评论" :ref="getSectionRef"/>
      <detail_06Notice  :orderRules="mainPart.dynamicModule.rulesModule.orderRules" titile="须知" :ref="getSectionRef"/>
      <detail_07Map  :positionInfo="mainPart.dynamicModule.positionModule" titile="周边" :ref="getSectionRef"/>
      <detail_08Intro  :priceInfo="mainPart.introductionModule"/>
    </template>

  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { getDetailInfosbyId } from '@/services/modules/detail';
import { useRouter, useRoute } from 'vue-router';
import detail_01Carousel from './cpns/detail_01-carousel.vue';
import detail_02Infos from './cpns/detail_02-infos.vue';
import Detail_03Facility from './cpns/detail_03-facility.vue';
import detail_04Landlord from './cpns/detail_04-landlord.vue';
import detail_05Comment from './cpns/detail_05-comment.vue';
import detail_06Notice from './cpns/detail_06-notice.vue';
import detail_07Map from './cpns/detail_07-map.vue';
import detail_08Intro from './cpns/detail_08-intro.vue';
import tabControl from '@/components/tab-control/tab-control.vue';
import useScroll from '@/hooks/useScroll';
const route = useRoute()
const router = useRouter()
const houseId = route.params.houseId
const detailInfos = ref({})
const mainPart = computed(() => detailInfos.value.mainPart)

getDetailInfosbyId(houseId).then(res => {
  detailInfos.value = res.data
})

const onClickLeft = () => {
  router.back()
}
const detailRef = ref()
const { scrollTop } = useScroll(detailRef)
const showTabControl = computed(() => {
  return scrollTop.value > 250
})


const sectionEls =ref({})
const titles = computed(() => {
  return Object.keys(sectionEls.value)
})

const getSectionRef = (value) => {
  if(value) {
    const title = value.$el.getAttribute("titile")
    sectionEls.value[title] = value.$el
  }
 
}

</script>

<style scoped>

</style>
