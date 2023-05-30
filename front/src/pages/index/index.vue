<template>
  <view class="content">
    <swiper class="swiper" circular :indicator-dots="true" :autoplay="true" :interval="5000" :duration="1000">
      <swiper-item v-for="(item, index) in imgList" :key="index">
        <image :src="item" class="image"></image>
      </swiper-item>
    </swiper>
    <view class="tab-bar" style="width: 100%;">
      <u-notice-bar mode="horizontal" :is-circular="true" :list="list"></u-notice-bar>
      <!-- <van-notice-bar style="width: 100%;" text="一年之计在于春，一日之计在于晨。早起的鸟有虫吃，是时候起床了~" /> -->
    </view>

    <view style="width: 100%; display: flex; height: 300rpx;">
      <view style="flex: 1; padding: 10px 10px 0 0; background-color: blue;" >打卡区域
        <view>本年打卡：xxx</view>
        <view>考试题数：xxx</view>
      </view>
      <view style="flex: 1; padding: 10px 10px 0 0; background-color: lightblue; display: flex; flex-direction: column;" >
        <view>全国排名（问号）: 打卡xx次，题目 xx次</view>
        <view>本市排名（问号）：打卡xx次，题目 xx次</view>
      </view>
    </view>

    <view style="width: 100%; display: flex; height: 700rpx;">
      <view style="flex: 1; padding: 10px 10px 0 0; background-color: pink;" >全国列表， 各20条</view>
      <view style="flex: 1; padding: 10px 10px 0 0; background-color: lightgray; display: flex; flex-direction: column;" >
        全市列表
        各20条
      </view>
    </view>

    <!-- <ZhVanTabbar v-model:active="active" @change:active="(value:number) => active = value"></ZhVanTabbar> -->
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { onLoad, onShow, onTabItemTap } from "@dcloudio/uni-app";
const active = ref(2);

const list =  [
					'寒雨连江夜入吴',
					'平明送客楚山孤',
					'洛阳亲友如相问',
					'一片冰心在玉壶'
				];

const onChange = (event:any) => {
  console.log(event);
}


const imgList = [
  'http://qiniu-tujieqianduan.iotzzh.com/cloud-g5b019eb1b_1920.jpg',
  'http://qiniu-tujieqianduan.iotzzh.com/lake-gc521668c6_1920.jpg',
  'http://qiniu-tujieqianduan.iotzzh.com/nature-g978431efb_1920.jpg',
];

onShow(() => {
  wx.hideHomeButton();
});

onTabItemTap((item:any) =>  { 
    console.log(item) 
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
