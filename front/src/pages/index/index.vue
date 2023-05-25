<template>
  <view class="content">
    <swiper class="swiper" circular :indicator-dots="true" :autoplay="true" :interval="5000" :duration="1000">
      <swiper-item v-for="(item, index) in imgList" :key="index">
        <image :src="item" class="image"></image>
      </swiper-item>
    </swiper>
    <view class="tab-bar" style="width: 100%;">
      <van-notice-bar style="width: 100%;" text="一年之计在于春，一日之计在于晨。早起的鸟有虫吃，是时候起床了~" />
    </view>

    <van-tabbar>
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </view>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { onLoad, onShow } from "@dcloudio/uni-app";
const active = ref(0);

const imgList = [
  'http://qiniu-tujieqianduan.iotzzh.com/cloud-g5b019eb1b_1920.jpg',
  'http://qiniu-tujieqianduan.iotzzh.com/lake-gc521668c6_1920.jpg',
  'http://qiniu-tujieqianduan.iotzzh.com/nature-g978431efb_1920.jpg',
];

onShow(() => {
  wx.hideHomeButton();
});

</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .swiper {
    width: 100%;
    height: 300rpx;

    .image {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
