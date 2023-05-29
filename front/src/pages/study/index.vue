<template>
  <view class="content">
    <view class="title-box" :style="{ height: barHeight }">前端学习手册</view>
    <view class="subjects">
      <view class="subject" v-for="(subject, index) in subjects" :key="index">
        <view class="subject-title"><text class="text">{{ subject.title }}</text></view>
        <view class="items">
          <view class="item" v-for="(item, subIndex) in subject.items" :key="subIndex">
            <i class="iconfont icon-html"></i>
            <view class="info">
              <view>{{ item.title }}</view>
              <view>共{{ item.total }}篇</view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const subjects = [
  {
    title: '前端基础', items: [
      { title: 'HTML', icon: 'icon-html', total: 8 },
      { title: 'CSS', icon: 'icon-html', total: 16 },
      { title: 'Javascript', icon: 'icon-html', total: 32 },
    ]
  },
  {
    title: '前端进阶', items: [
      { title: 'HTML', icon: 'icon-html', total: 8 },
      { title: 'CSS', icon: 'icon-html', total: 16 },
      { title: 'Javascript', icon: 'icon-html', total: 32 },
    ]
  },
  {
    title: '前端高阶', items: [
      { title: 'HTML', icon: 'icon-html', total: 8 },
      { title: 'CSS', icon: 'icon-html', total: 16 },
      { title: 'Javascript', icon: 'icon-html', total: 32 },
    ]
  },
  {
    title: '前端专题', items: [
      { title: '2D', icon: 'icon-html', total: 8 },
      { title: '3D', icon: 'icon-html', total: 16 },
      { title: 'VR', icon: 'icon-html', total: 32 },
      { title: 'PWA', icon: 'icon-html', total: 32 },
    ]
  },
];

// const h = uni.getSystemInfoAsync().statusBarHeight;
// const barHeight = computed(() => `calc(100vh - ${h}px - 44px)`);
const barHeight = ref();
onMounted(async () => {
  // ios本身有44的高度，Android是48
  const sysInfo = await uni.getSystemInfo();
  console.log('sysInfo', sysInfo);
  if (sysInfo.osName === 'ios') {
    barHeight.value = `calc(${sysInfo.statusBarHeight}px + 44px)`
  } else if (sysInfo.osName === 'android') {
    barHeight.value = `calc(${sysInfo.statusBarHeight}px + 48px)`
  } else {
    barHeight.value = '0px';
  }
});

</script>

<style lang="scss" scoped>
.content {
  .title-box {
    background: linear-gradient(to bottom, transparent, #0089FF);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: bolder;
    position: sticky;
    top: 0;
  }

  .subjects {
    .subject {
      padding: 20rpx;

      .subject-title {
        line-height: 80rpx;
        font-weight: bolder;
        position: relative;

        &::before {
          content: '';
          height: 50rpx;
          width: 20rpx;
          background-color: #0089FF;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }

        .text {
          padding-left: 30rpx;
        }
      }

      .items {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: space-between;
        padding: 15rpx;

        .item {
          width: 45%;
          height: 138rpx;
          border: 1px solid #0089FF;
          border-radius: 25rpx;
          margin: 10rpx;
          display: flex;
          align-items: center;
          box-shadow: 0rpx 0rpx 20rpx #909090;

          &:hover {
            box-shadow: 0rpx 0rpx 0rpx #909090;
          }

          .iconfont {
            font-size: 120rpx;
          }

          .info {
            font-size: 30rpx;
            font-weight: bolder;
            letter-spacing: 3rpx;
          }
        }
      }

    }
  }
}</style>