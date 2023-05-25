<template>
    <view class="content">
        <view v-for="(item, index) in list">
            <view>{{ item }}</view>
        </view>
        <van-button type="primary">测试按钮</van-button>

    </view>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';

    const list = ['1', '2', '3'];
</script>

<style lang="scss" scoped>
 .content {
    height: 30px;
    width: 100%;
 }
</style>