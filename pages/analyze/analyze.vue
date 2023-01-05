
<template>
	<view class="container gradient"  style="position: fixed; top: 0; left: 0; right: 0; bottom: 0">
		<view class="title-1 text">
			<text>总量特征，趋势及成因
			</text>
		</view>
		<!--中间还缺少一个图表-->
		<view class="reason-container">
			<view class="reason-title text">
				成因
			</view>
			<view class="reason-content text">
				<text  id="reason-content1" cols="30" rows="10">
					内容待补充
					内容待补充
					内容待补充
					内容待补充
					内容待补充
					内容待补充
					内容待补充
					内容待补充
					内容待补充
					
				</text>
			</view>
		</view>
		<view class="button-container">
			<button class="button" @click="toPagefenxi1"> 下一项  </button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			toPagefenxi1(){
				uni.navigateTo({
					url:"/pages/analyze/fenxi1/fenxi1",
					animationType: 'pop-in',
					animationDuration: 200
				})
			}
		}
		
		
	}
</script>

<style lang="scss">
.container {
	padding: 20px;
	font-size: 14px;
	line-height: 24px;
}
.title-1{
	display: block;
	height: 100rpx;
	line-height: 100rpx;
	text-align: center;
	border: solid black ;
	border-radius: 18rpx;
	background-color: aliceblue;
}
.reason-container{
	padding: 100rpx;
}
.button-container{
	display: flex;
}
</style>
