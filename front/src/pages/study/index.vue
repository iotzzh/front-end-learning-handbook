<template>
  <view class="content">
    <view class="title-box" :style="{ height: barHeight}">前端学习手册</view>
    <view class="subject">

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
}
</style>