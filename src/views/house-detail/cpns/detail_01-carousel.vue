<template>
  <div class="carousel">
    <van-swipe :autoplay="1000">
      <template v-for="(item, index) in housePics" :key="index">
        <van-swipe-item>
          <img :src="item.url" alt="">
        </van-swipe-item>   
      </template>
      
      <template #indicator="{ active, total }">
        <div class="custom-indicator">
          <template v-for="(value, key, index) in carouselGroup" :key="key">
            <div class="indicator-item" v-if="housePics[active]" :class="{active: key == housePics[active].enumPictureCategory}">
              {{ formatTitle(value[0].title ) }}
              <span class="count" v-if="key == housePics[active].enumPictureCategory">
                {{ getCategoryIndex(housePics[active]) }}/{{ value.length }}
              </span>
            </div>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>


const props = defineProps({
  housePics: {
    type: Array,
    default: []
  }
})

//  指示器
const carouselGroup = {}
for(const item of props.housePics) {
  let valueArray = carouselGroup[item.enumPictureCategory]
  if(!valueArray) {
    valueArray = []
  }
  valueArray.push(item)
  carouselGroup[item.enumPictureCategory] = valueArray
}

const regTitle = /【(.*?)】/
const formatTitle = (title) => {
  return regTitle.exec(title)[1]
}
const getCategoryIndex = (item) => {
  const valueArray = carouselGroup[item.enumPictureCategory]
  return valueArray.findIndex(data => data === item) + 1
}

</script>

<style scoped lang="less">
.carousel {
  img {
    width: 100%;
  }

  .custom-indicator {
    position: absolute;
    display: flex;
    right: 5px;
    bottom: 5px;
    padding: 4px 5px;
    font-size: 12px;
    color: #fff;
    background: rgba(0, 0, 0, 0.8);

    .indicator-item {
      margin: 0 2px;
      padding: 2px 5px;

      border-radius: 6px;
      &.active {

        color: #333;
        background-color: #fff;
      }
    }
  }
}

</style>
