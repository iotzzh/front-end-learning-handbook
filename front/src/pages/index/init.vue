<template>
    <view class="content" style="width: 100vw; height: 100vh;">
        <Loading></Loading>
    </view>
</template>

<script setup>
import { onLoad, onShow } from "@dcloudio/uni-app";
import Loading from "../../components/loading/index"

onLoad((option) => {
    setTimeout(() => {
       uni.switchTab({ url: '/pages/index/index' });
    }, 2000);
}); 


</script>