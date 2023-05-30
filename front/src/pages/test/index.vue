<template>
  <view class="content">
    <view class="title-box" :style="{ height: barHeight }">前端练习</view>
    <view class="box">
      <view class="left">
        <view>顺序练习</view>
        <view class="desc">xxx/9999</view>
      </view>
      <view class="right">
        <view>模拟测试</view>
        <view class="desc">仿真测试</view>
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
    <official-account style="width: 100%; height: auto;"></official-account>
    <!-- <webview style="width: 100%; height: 500rpx" src='https://www.iotzzh.com' ></webview> -->
  </view>
</template>
  
<script lang="ts" setup>
import { computed, ref, onMounted } from 'vue';

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
    box-shadow: 3rpx 3rpx 10rpx black;
    margin-bottom: 30rpx;
  }

  .box {
    display: flex;
    justify-content: space-around;
    color: #323232;
    font-weight: bolder;

    .left,
    .right {
      text-align: center;
      width: 300rpx;
      height: 300rpx;
      background: radial-gradient(white, #0089FF);
      border-radius: 300rpx;
      box-shadow: 0 0 10rpx #0089FF;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      letter-spacing: 3rpx;
      font-size: 40rpx;

      .desc {
        font-size: 30rpx;
      }
    }

    .right {
      background: radial-gradient(#0089FF, white);
      color: white;
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
}</style>