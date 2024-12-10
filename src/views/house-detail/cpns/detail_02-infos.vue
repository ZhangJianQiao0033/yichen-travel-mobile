<template>
  <div class="infos">
    <div class="houseName">{{ topInfos.houseName }}</div>
    <div class="houseTags">
      <template v-for="(item, index) in topInfos.houseTags" :key="index" >
        <div class="tag-item" v-if="item.tagText" :style="{ color: item.tagText.color, background: item.tagText.background.color}">{{ item.tagText.text }}</div>
      </template>
    </div>
    <div class="brief">
      <div class="left">
        <div class="score">{{ topInfos.commentBrief.overall }}</div>
        <div class="scoreTitle">{{ topInfos.commentBrief.scoreTitle }}</div>
        <div class="comment">{{ topInfos.commentBrief.commentBrief }}</div>
      </div>
     <div class="right">
      <div class="comment-cout">{{ topInfos.commentBrief.totalCount }}条评论</div>
      <van-icon name="arrow" />
     </div>
    </div>
    <div class="position">
      <div class="letf">
        <div class="address">
          {{ topInfos?.nearByPosition?.address }}
        </div>
      </div>
      <div class="right">  
        <span>地图·周边</span>
        <van-icon name="arrow" />
      </div>
    </div>
    
  </div>
</template>

<script setup>


defineProps({
  topInfos: {
    type: Object,
    default: () => ({})
  }
})


</script>

<style scoped>
.infos {
  padding: 16px;
  .houseName {
    font-size: 20px;
    font-weight: 700;
    color: #333;
    text-align: justify;
    margin-bottom: 6px;
  }

  .houseTags {
    display: flex;
    justify-content: space-around;
    font-size: 12px;

    .tag-item{
      line-height: 16px;
      padding: 1px 3px;
    }
  }

  .brief {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 12px 0;
    padding: 8px 12px;
    font-size: 12px;
    border-radius: 5px;
    background-color: #f5f7fa;

    .left {
      display: flex;
      align-items: center;

      .score {
        font-size: 18px;
        font-weight: 700;
      }
      .scoreTitle {
        margin: 0 3px;
        font-weight: 700;
      }

      .comment {
        color: #666666;
      }
    }

    .right {
      display: flex;
      color: #ff9645;
    }
  }
  .position {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 12px 0;
    padding: 8px 12px;
    font-size: 14px;
    font-weight: 700;
    border-radius: 5px;
    background-color: #f5f7fa;
    color: #333;
    .right {
      display: flex;
      
      color: #ff9645;
      font-weight: normal;
      font-size: 12px;
    }
  }
  
}
</style>
