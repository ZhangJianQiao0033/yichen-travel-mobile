<template>
  
  <DetailSection title="房屋设施" more="查看全部设施">
    <div class="facility">
      <template v-for="(item, index) in houseFacilitys" : key="index">
        <div class="houseFacility" v-if="facilitySort.includes(index)">
          <div class="left">
            <img :src="item.icon" alt="">
            <div class="text">{{ item.groupName }}</div>
          </div>
          <div class="right">
              <template v-for="(iten, indey) in item.facilitys.slice(0,4)" :key="indey">
                <div class="iten">
                  <img src="@/assets/img/detail/icon_check.png" alt="">
                  <div class="text">{{ iten.name }}</div>
                </div>
              </template>
          </div>
        </div>
      </template>
    </div>
  </DetailSection>
  
</template>

<script setup>
import DetailSection from '@/components/detail-section/detail-section.vue';

const props = defineProps({
  houseFacility: {
    type: Object,
    default: () => ({})
  }
})
const facilitySort = props.houseFacility.facilitySort
const houseFacilitys = props.houseFacility.houseFacilitys


</script>

<style scoped>
.facility {
  padding: 5px 0px;
  border-radius: 5px;
  font-size: 12px;
  background-color: #f7f9fb;

  .houseFacility {
    display: flex;
    margin: 25px 0;

    .left {
      width: 90px;
      text-align: center;
      img {
        width: 20px;
        height: 20px;
      }
      .text {
        margin-top: 5px;
      }
    }

    .right {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      flex: 1;
      img {
        width: 18px;
        height: 18px;
      }
      .iten {
        display: flex;
        align-items: center;
        width: 50%;

        img {
          width: 12px;
          height: 12px;
          margin-right: 6px;
        }
      }
    }
  }
}
</style>
