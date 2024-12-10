<template>
  <detailSection title="位置周边" more="查看更多周边信息">
    <div class="baidu" ref="mapRef"></div>
  </detailSection>
</template>

<script setup>
import detailSection from '@/components/detail-section/detail-section.vue';
import { onMounted, ref } from 'vue';

const props = defineProps({
  positionInfo: {
    type: Object,
    default: () => ({})
  }
})

const mapRef = ref()
onMounted(() => {
  const map = new BMapGL.Map(mapRef.value);

  const point = new BMapGL.Point(props.positionInfo.longitude, props.positionInfo.latitude);
  var marker = new BMapGL.Marker(point);        // 创建标注   
  map.addOverlay(marker);                     // 将标注添加到地图中
  map.centerAndZoom(point, 15); 
})
</script>

<style scoped>
.baidu {
  height: 300px;
}
</style>
