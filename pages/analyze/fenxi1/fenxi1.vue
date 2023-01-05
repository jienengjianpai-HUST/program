
<template>
	<view class="container gradient"  style="position: fixed; top: 0; left: 0; right: 0; bottom: 0">
		<view class="title-1 text" >
			<text>结构特征，趋势及成因
			</text>
		</view>
		<!--中间还缺少一个图表-->
		<view class="reason-container text">
			<view class="reason-title">
				成因
			</view>
			<view class="reason-content">
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
			<button class="button" @click="toPageAnalyze"> 上一项  </button>
			<button class="button" @click="toPagefenxi2" > 下一项  </button>
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
			toPageAnalyze(){
				uni.switchTab({
					url:'/pages/analyze/analyze'
				})
			},
			toPagefenxi2(){
				uni.navigateTo({
					url:"/pages/analyze/fenxi2/fenxi2"
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
