<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
	 <text style="font-size: 20px; font-weight: 700;">前端学习手册</text>
      <text class="title">{{ title.name }}</text>
      <text class="title">111</text>
      <text>This is in vue3.</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const title = reactive({ name: 'zzh', age: 18 })
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
