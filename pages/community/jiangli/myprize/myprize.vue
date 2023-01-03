<template>
    <view class="myprize-container">
    	<view class="title-myprize">
    		<text >我的奖励</text>
    	</view>
    </view>
	
	
	<view class="jiangli-container" style="height: 200rpx;">
		<view class="picture">
			<image src="../../../../static/c9.png "  style="height: 150rpx; width: 100rpx;"></image>
		</view>
		<view class="part2" style="" >
			<view class="name">
				名称：
			</view>
			<view class="cost">
				碳积分:
			</view>
		</view>		
	</view>
	
	<view class="jiangli-container" style="height: 200rpx;">
		<view class="picture">
			<image src="../../../../static/c9.png "  style="height: 150rpx; width: 100rpx;"></image>
		</view>
		<view class="part2" style="" >
			<view class="name">
				名称：
			</view>
			<view class="cost">
				碳积分:
			</view>
		</view>		
	</view>
	
	<view class="jiangli-container" style="height: 200rpx;">
		<view class="picture">
			<image src="../../../../static/c9.png "  style="height: 150rpx; width: 100rpx;"></image>
		</view>
		<view class="part2" style="" >
			<view class="name">
				名称：
			</view>
			<view class="cost">
				碳积分:
			</view>
		</view>		
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.title-myprize{
	text-align: center;
	border: 3rpx solid black;
	padding: 20rpx;
	margin: 50rpx;
}
.jiangli-container{
	margin: 20rpx;
	border: 4rpx solid black;
	display: flex;
}
.picture{
	margin-left: 20rpx ;
}
.part2{
	margin-left: 140rpx;
	margin-top: 40rpx;
}
</style>
