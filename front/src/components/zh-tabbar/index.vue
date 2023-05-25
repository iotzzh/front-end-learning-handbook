<template>
    <view class="content">
        <!-- <view class="item" v-for="(item, index) in list">
            <view>{{ item }}</view>
        </view> -->
    </view>
</template>

<script lang="ts" setup>
    // import { ref, PropType } from 'vue';
    // const list = ['1', '2', '3'];
    // interface ITab {
    //     active: number
    //     fixed: boolean
    // }

    // const props = defineProps({
    //     items: {
    //         type: String
    //     },
//   formSettings: {
//     type: Object as any, //PropType<FormSettingsModel>
//     required: true, // 必传
//   },

//   tableSettingPanel: {
//     type: Object as PropType<TableSettingPanelModel> | undefined,
//   },

//   tableSettings: {
//     type: Object as PropType<TableSettingsModel>,
//     required: true, // 必传
//   },

//   pageSettings: {
//     type: Object as PropType<pageSettingsModel>,
//     required: true, // 必传
//   },
// });
</script>

<style lang="scss" scoped>
 .content {
    height: 30px;
    width: 100%;
    display: flex;
 }
</style>