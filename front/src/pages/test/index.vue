<template>
    <view class="content">
      <view class="title-box" :style="{ height: barHeight}">前端练习</view>
      <view class="box">
        <view class="left">
          顺序练习(0/xxx)
        </view>
        <view class="right">
          模拟测试
        </view>
      </view>
      <view class="actions">
        收藏/关注公众号/精选100/星球/专项练习/友情提示
      </view>

      <view class="share">
        自学前端，就用前端学习手册
        <view class="text-on-line">
          <view class="text">
          分享给好友
          </view>

        </view> 
        分享：微信/朋友圈/QQ/QQ空间
      </view>
    </view>
  </template>
  
  <script lang="ts" setup>
  import { computed } from 'vue';
  
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
    }

    .box {
      display: flex;
      .left, .right {
        flex: 1;
        text-align: center;
      }

    }
  }

  .text-on-line {
    width: 100%;
    height: 1px;
    background-color: #bfbfbf;
    position: relative;
    margin: 30rpx 0rpx;
    .text {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      top: 50%;
      background-color: white;
      padding: 0rpx 15rpx;
    }
  }
  </style>