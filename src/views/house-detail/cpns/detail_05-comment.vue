<template>
  <detailSection title="热门评论" :more="`查看全部${commentInfo.totalCount}条评论`">
    <div class="comment">
      <div class="header">
        <div class="left">
          <div class="score">
            <span class="text">{{ commentInfo.overall }}</span>
            <div class="line"></div>
          </div>
          <div class="info">
            <div class="scoreTitle">{{ commentInfo.scoreTitle }}</div>
            <div class="totalCount">{{ commentInfo.totalCount }}条评论</div>
            <van-rate
              :model-value="commentInfo.overall"
              :size="12"
              color="rgb(255, 150, 69)"
              void-icon="star"
              void-color="#eee"
              readonly allow-half
            />
          </div>
        </div>
        <div class="right">
          <template v-for="(item, index) in commentInfo.subScores" :key="index">
            <div class="subScore">{{ item }}</div>
          </template>
        </div>
      </div>
      <div class="tags">
        <template v-for="(item, index) in commentInfo.commentTagVo" :key="index">
          <div class="tag-item"  :style="{ color: item.color, backgroundColor: item.backgroundColor }">
            {{ item.text }}
          </div>
        </template>
      </div>
      <div class="content">
        
      </div>

    </div>
  </detailSection>
 
</template>

<script setup>
import detailSection from '@/components/detail-section/detail-section.vue';
defineProps({
  commentInfo: {
    type: Object,
    default: () => ({})
  }
})

</script>

<style scoped>
.comment {
  .header {
    display: flex;
    justify-content: space-between;

    .left {
      display: flex;
      align-items: center;
      .score {

        position: relative;

        .text {
          font-size: 48px;
          font-weight: 600;
        }
        .line {
          position: absolute;
          bottom: 6px;
          width: 66px;
          height: 6px;
          border-radius: 6px;
          background: linear-gradient(90deg, #fa8c1d, #fcaf3f);
        }
      }

      .info {
        margin-left: 19px;
        font-size: 12px;
        color: #333;
        .totalCount {
          
          margin: 3px 0;
          height: 15px;
          line-height: 15px;
          color: #999;
        }
      }
    }

    .right {
      display: flex;
      flex: 1;
      flex-wrap: wrap;
      justify-content: flex-end;
      font-size: 12px;
      color: #999;

      .subScore {
        margin-left: 5px;
      }
    }
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    margin: 8px 0;

    .tag-item {
      padding: 5px 3px;
      margin-right: 10px;
      margin-top: 3px;
      border-radius: 10px;
      font-size: 12px;
    }
  }
}
</style>
