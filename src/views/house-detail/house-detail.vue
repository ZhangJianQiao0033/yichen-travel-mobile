<template>

  <!--1.导航栏 -->
  <div class="house-detail">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
    <!--2.轮播图 -->
    <template v-if="mainPart">
      <detail_01Carousel :housePics="mainPart.topModule.housePicture.housePics"/>
    </template>
    
    <!-- 3. infos -->
    <detail_02Infos :topInfos="mainPart?.topModule"/>
    <Detail_03Facility v-if="mainPart && mainPart.dynamicModule" :houseFacility="mainPart.dynamicModule.facilityModule.houseFacility" />
    <detail_04Landlord :landlordInfo="mainPart?.dynamicModule.landlordModule"/>
    <detail_05Comment :commentInfo="mainPart?.dynamicModule.commentModule"/>
    <detail_06Notice :orderRules="mainPart?.dynamicModule.rulesModule.orderRules"/>
    <detail_07Map v-if="mainPart && mainPart.dynamicModule" :positionInfo="mainPart.dynamicModule.positionModule"/>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { getDetailInfosbyId } from '@/services/modules/detail';
import { useRouter, useRoute } from 'vue-router';
import detail_01Carousel from './cpns/detail_01-carousel.vue';
import detail_02Infos from './cpns/detail_02-infos.vue';
import Detail_03Facility from './cpns/detail_03-facility.vue';
import detail_04Landlord from './cpns/detail_04-landlord.vue';
import detail_05Comment from './cpns/detail_05-comment.vue';
import detail_06Notice from './cpns/detail_06-notice.vue';
import detail_07Map from './cpns/detail_07-map.vue';
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
</script>

<style scoped>

</style>
