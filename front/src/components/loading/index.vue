<template>
	<view class="loader">
		<view class="loader-inner line-scale">
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
		</view>
		<vew class="loader-tips">加载中</vew>
	</view>
</template>

<style scoped>
	.loader {
		display: flex;
		max-width: 100%;
		height: 80vh;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.loader-tips {
		color: #333;
		display: none;
	}

	@-webkit-keyframes line-scale {
		0% {
			-webkit-transform: scaley(1);
			transform: scaley(1);
		}

		50% {
			-webkit-transform: scaley(0.4);
			transform: scaley(0.4);
		}

		100% {
			-webkit-transform: scaley(1);
			transform: scaley(1);
		}
	}

	@keyframes line-scale {
		0% {
			-webkit-transform: scaley(1);
			transform: scaley(1);
		}

		50% {
			-webkit-transform: scaley(0.4);
			transform: scaley(0.4);
		}

		100% {
			-webkit-transform: scaley(1);
			transform: scaley(1);
		}
	}

	.line-scale>view:nth-child(1) {
		-webkit-animation: line-scale 1s 0.1s infinite cubic-bezier(.2, .68, .18, 1.08);
		animation: line-scale 1s 0.1s infinite cubic-bezier(.2, .68, .18, 1.08);
	}

	.line-scale>view:nth-child(2) {
		-webkit-animation: line-scale 1s 0.2s infinite cubic-bezier(.2, .68, .18, 1.08);
		animation: line-scale 1s 0.2s infinite cubic-bezier(.2, .68, .18, 1.08);
	}

	.line-scale>view:nth-child(3) {
		-webkit-animation: line-scale 1s 0.3s infinite cubic-bezier(.2, .68, .18, 1.08);
		animation: line-scale 1s 0.3s infinite cubic-bezier(.2, .68, .18, 1.08);
	}

	.line-scale>view:nth-child(4) {
		-webkit-animation: line-scale 1s 0.4s infinite cubic-bezier(.2, .68, .18, 1.08);
		animation: line-scale 1s 0.4s infinite cubic-bezier(.2, .68, .18, 1.08);
	}

	.line-scale>view:nth-child(5) {
		-webkit-animation: line-scale 1s 0.5s infinite cubic-bezier(.2, .68, .18, 1.08);
		animation: line-scale 1s 0.5s infinite cubic-bezier(.2, .68, .18, 1.08);
	}

	.line-scale>view {
		background-color: #39CD80;
		width: 4px;
		height: 35px;
		border-radius: 2px;
		margin: 2px;
		-webkit-animation-fill-mode: both;
		animation-fill-mode: both;
		display: inline-block;
	}
</style>
