<template>
    <view class="content">
      <view class="title-box" :style="{ height: barHeight}">推荐</view>
      <u-grid :col="2" :border="true" align="center" class="items">
		<u-grid-item v-for="(item, index) in recommendList" :key="index">
			<u-icon :name="item.icon" :size="65" style="color: #0089FF;"></u-icon>
			<view class="grid-text">{{ item.text }}</view>
		</u-grid-item>
	</u-grid>
    </view>
  </template>
  
  <script lang="ts" setup>
  import { computed, ref, onMounted } from 'vue';

  const recommendList = [
    { text: '后台（vue2）', icon: 'photo' },
    { text: '图标库', icon: 'level' },
    { text: '后台管理系统（vue2）', icon: 'woman' },
    { text: '后台管理系统（vue2）', icon: 'order' },
    { text: '后台管理系统（vue2）', icon: 'hourglass' },
    { text: '后台管理系统（vue2）', icon: 'volume-off-fill' },
    { text: '后台管理系统（vue2）', icon: 'tags-fill' },
    { text: '后台管理系统（vue2）', icon: 'grid-fill' },
    { text: '后台管理系统（vue2）', icon: 'checkmark-circle-fill' },
    { text: '后台管理系统（vue2）', icon: 'play-left' },
    { text: '后台管理系统（vue2）', icon: 'bag-fill' },
    { text: '后台管理系统（vue2）', icon: 'google' },
  ];
  
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

    &:deep(.u-grid-item) {
      padding: 10rpx;
    }

    &:deep(.u-grid-item-box) {
      // border: 1px solid red;
      box-shadow: 0rpx 3rpx 10rpx #0089FF;
      padding: 50rpx;
    }
  }
  </style>