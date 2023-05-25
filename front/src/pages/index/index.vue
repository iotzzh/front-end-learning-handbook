<template>
  <view class="content">
    <swiper class="swiper" circular :indicator-dots="true" :autoplay="true" :interval="5000"
				:duration="1000">
				<swiper-item v-for="(item, index) in imgList" :key="index">
					<image :src="item" class="image"></image>
				</swiper-item>
			</swiper>
  </view>
</template>

<script setup lang="ts">
	import { ref, onMounted } from 'vue'

  const imgList = [
    'http://qiniu-tujieqianduan.iotzzh.com/cloud-g5b019eb1b_1920.jpg',
    'http://qiniu-tujieqianduan.iotzzh.com/lake-gc521668c6_1920.jpg',
    'http://qiniu-tujieqianduan.iotzzh.com/nature-g978431efb_1920.jpg',
  ];
	

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
