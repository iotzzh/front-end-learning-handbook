<template>
    <van-tabbar :active="active" @change="onChange">
        <van-tabbar-item icon="gem-o">推荐</van-tabbar-item>
        <van-tabbar-item icon="newspaper-o">测试</van-tabbar-item>
        <van-tabbar-item icon="wap-home-o">首页</van-tabbar-item>
        <van-tabbar-item icon="friends-o">学习</van-tabbar-item>
        <van-tabbar-item icon="user-circle-o">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue';

const props = defineProps({
    active: {
        // type: Object as PropType<any>,
        type: Number,
        required: true,
    },
});

const { active } = toRefs(props);
const emit = defineEmits(['change:active']);


const onChange = (event:any) => {
    emit('change:active', event.detail);
    if (event.detail === 4) {
        uni.redirectTo({ url: '/pages/me/index' });
    }
}

</script>