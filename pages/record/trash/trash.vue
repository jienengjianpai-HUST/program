<template>
    <view class="datainput-container">
        <view class="title">
        	数据输入
        </view>
		
		
		<view class="inputbox">
			<view class="text"> 一次性塑料袋 X   </view>
			<uni-easyinput  placeholder="请输入个数" class="input1"></uni-easyinput>
		</view>
		
		<view class="button-down">
			<button @click="toZhiwan">下一项</button>
		</view>
	</view>
</template>
	
	
	
	
<script>
	export default {
		data() {
			return {
				
			}
		},
		methods:{
			toZhiwan(){
				uni.navigateTo({
					url:'/pages/record/trash/zhiwan/zhiwan'
				})
			}
		}
		
	}
</script>

<style lang="scss">
.title{
	border: 3rpx solid;
	text-align: center;
	margin: 100rpx;
	padding: 50rpx;
}
.inputbox{
	display: flex;
	border: 4rpx solid black;
	margin: 50rpx;
	padding: 100rpx;
}
.text{
	margin-top: 20rpx;
}
.input1{
	border-width:100rpx;
	margin-left: 20rpx;
}
</style>
