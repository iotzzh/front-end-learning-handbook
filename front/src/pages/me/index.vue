<template>
  <view class="content">
    <view class="info">
      <image class="pic" src="../../static/me.png"></image>
      <view class="title">张中华</view>
      <view class="signature">善始者实繁，而克终者盖寡。念念不忘，必有回响，莫忘初心~</view>
      <view class="bottom-left"></view>
    </view>
    <view class="list">
      <view class="item" v-for="(item, index) in items" :key="index">
        <image class="image" :src="item.image"></image>
        <view class="title">{{ item.title }}</view>
        <image class="right-image" src="../../static/right.png"></image>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { onLoad, onShow } from "@dcloudio/uni-app";
const items = [
  { image: '../../static/home.png', title: '最近记录' },
  { image: '../../static/home.png', title: '我的收藏' },
  { image: '../../static/home.png', title: '分享给好友' },
  { image: '../../static/home.png', title: '关注公众号' },
  { image: '../../static/home.png', title: '联系客服' },
  { image: '../../static/home.png', title: '关于软件' },
];

</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  .info {
    width: 100%;
    height: 500rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom, transparent, #0089FF);
    position: relative;
    .bottom-left {
      width: 100%;
    height: 30rpx;
    background: white;
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 30rpx 30rpx 0 0;
    }

    .pic {
      width: 100rpx;
      height: 100rpx;
    }
    .title {
      padding: 10rpx;
      font-size: 16px;
      font-weight: bolder;
    }
    .signature {
      padding: 10rpx;
      font-size: 12px;
    }
  }

  .list {
    display: flex;
    flex-direction: column;
    width: 100%;
    .item {
      height: 120rpx;
      display: flex;
      align-items: center;
      background: linear-gradient(to left, transparent 1%, #0089FF 99%);
      box-shadow: 0px 0px 3px #909090;
      width: 90%;
      margin: 0 auto;
      margin-bottom: 20rpx;
      padding-left: 20rpx;
      border-radius: 30rpx;
      transition:  all 2s;
      &:hover {        
        background: linear-gradient(to right, transparent 10%, #0089FF 90%);
      }

      .image {
        width: 50rpx;
        height: 50rpx;
        padding-right: 20rpx;
      }
      .right-image {
        width: 50rpx;
        height: 50rpx;
        margin-left: auto;
      }

    }
  }
}
</style>
