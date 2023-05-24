<template>
  <view class="content">
	  <view>{{ current }}</view>
  </view>
</template>

<script setup lang="ts">
	import { ref, onMounted } from 'vue'
	const current = ref(0);
	
	onMounted(() => {
		console.log(current.value);
	});
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
