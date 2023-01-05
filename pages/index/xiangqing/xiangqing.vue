<template>
	<view class="xiangqing-container gradient" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0">
		<view class="xiangqing-box1">
			<view class="box1-title text1">
				活动流程
			</view>
			<view class="box1-title text">
				报名开始时间：
			</view>
			<view class="box1-title text">
				报名结束时间:
			</view>
			<view class="box1-title text">
				活动开始时间:
			</view>
			<view class="box1-title text">
				活动结束时间:
			</view>
		</view>
		
		<view class="xiangqing-box2">
			<view class="box1-title text1">
				活动内容
				
			</view>
			
			
		</view>
		
		<view class="xiangqing-box3 text1">
			<view class="box1-title">
				活动评论
			</view>
			
			
		</view>
		<view class="baoming-button">
			<button @click="toPagebaominghuodong" style="text-align: center; margin: 50rpx;" class="button"> 开始报名</button>
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
			toPagebaominghuodong(){
				uni.navigateTo({
					url:'/pages/index/xiangqing/baoming-huodong/baoming-huodong'
				})
			}
		}
	}
</script>



<style lang="scss">
.xiangqing-box1{
	border: solid black  7rpx;
	margin: 30rpx;
	border-radius: 15rpx;
}
.xiangqing-box2{
	border: solid black 7rpx;
	margin: 30rpx;
}
.xiangqing-box3{
	border: solid black 7rpx;
	margin: 30rpx;
}
.text{
	font-size: 35rpx;
}
.text1{
	font-size: 45rpx;
	font-weight: bold;
}
</style>
