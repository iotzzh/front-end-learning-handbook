<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";

const statusBarH = ref(0);
const customBarH = ref(0);

onLaunch(() => {
  uni.getSystemInfo({
                success: (e) => {
                    // 获取手机状态栏高度
                    let statusBar = e.statusBarHeight as number;
                    let customBar
                    
                    // #ifndef MP
                    customBar = statusBar + (e.platform == 'android' ? 50 : 45)
                    // #endif
                    
                    // #ifdef MP-WEIXIN
                    // 获取胶囊按钮的布局位置信息
                    let menu = wx.getMenuButtonBoundingClientRect()
                    // 导航栏高度 = 胶囊下距离 + 胶囊上距离 - 状态栏高度
                    customBar = menu.bottom + menu.top - statusBar
                    // #endif
                    
                    // #ifdef MP-ALIPAY
                    // customBar = statusBar + e.titleBarHeight
                    // #endif
                    
                    // 注意：此方法不支持原生Nvue页面
                    // Vue.prototype.statusBarH = statusBar
                    // Vue.prototype.customBarH = customBar
                    
                    // 支持nvue页面写法（兼容H5/小程序/APP/APP-Nvue）
                    statusBarH.value = statusBar
                    customBarH.value = customBar
                }
            })
});


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
