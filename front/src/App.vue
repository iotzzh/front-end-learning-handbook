<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";

const statusBarH = ref(0);
const customBarH = ref(0);

onLaunch(() => {});


onShow(() => {
  console.log("App Show");
});

onHide(() => {
  console.log("App Hide");
});
</script>

<template>
  <view class="content">
    首页
  </view>
</template>

<style lang="scss">
    @import "@/uni_modules/vk-uview-ui/index.scss";
</style>