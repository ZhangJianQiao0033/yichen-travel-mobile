<template>
  <detailSection title="房东介绍" more="查看房东主页">
    <div class="landlord">
      <div class="top">
        <img :src="landlordInfo.topScroll" alt="">
      </div>
      <div class="header">
        <div class="left">
          <div class="avatar">
            <img :src="landlordInfo.hotelLogo" alt="">
          </div>
          <div class="info">
            <div class="name">{{landlordInfo.hotelName}}</div>
            <div class="tags">
              <template v-for="(item, index) in landlordInfo.hotelTags" :key="index">
                <div class="tag-item">
                  {{ item.tagText.text }}
                  <span class="divider" v-if="index != landlordInfo.hotelTags.length - 1">|</span>
                </div>
              </template>
            </div>
          </div>
        </div>

        <div class="right">
          <div class="contact">联系房东</div>
        </div>
      </div>

      <div class="bottom">
        <template v-for="(item, index) in landlordInfo.hotelSummary">
          <div class="summary-item">
            <div class="title">{{ item.title }}</div>
            <div class="introduction">{{ item.introduction }}</div>
            <div class="tip">{{ item.tip }}</div>
          </div>
        </template>
        
      </div>
    </div>
  </detailSection>
</template>

<script setup>
import detailSection from '@/components/detail-section/detail-section.vue';
defineProps({
  landlordInfo: {
    type: Object,
    default: () => ({})
  }
})

</script>

<style scoped lang="less">
.landlord {
  .top {
    img {
      width: 100%;
    }
  }
  .header {
    display: flex;
    padding: 8px 0;
    justify-content: space-between;

    .left {
      display: flex;
      .avatar {
        img {
          width: 54px;
          height: 54px;
        }
      }
      .info {

        .name {
          margin-top: 12px;
          font-size: 16px;
          font-weight: 700;
        }

        .tags {
          display: flex;
          margin-top: 5px;
          font-size: 12px;
          color: #666;

          .tag-item {
            .divider {
              margin: 0 5px;
            }
          }
        }
      }
    }

    .right {
      display: flex;
      align-items: center;

      .contact {
        padding: 5px 12px;
        border-radius: 6px;
        font-size: 12px;
        color: #fff;
        background-image: linear-gradient(90deg, #fa8c1d, #fcaf3f);
      }
    }
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    margin: 50px 10px 10px;

    .summary-item {
      .title {
        color: #999;
      }
      .introduction {
        margin: 5px 0;
        font-size: 18px;
        font-weight: 700;
        color: #333;
      }
      .tip {
        font-size: 12px;
        color: #666;
      }
    }
  }
}

</style>
