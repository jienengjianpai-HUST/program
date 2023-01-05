<template>
    <view class="datainput-container gradient"  style="position: fixed; top: 0; left: 0; right: 0; bottom: 0">
        <view class="title text">
        	数据输入
        </view>
		
		
		<view class="inputbox">
			<view class="text"> 快递信封 X   </view>
			<uni-easyinput  placeholder="请输入个数" class="input1"></uni-easyinput>
		</view>
		
		<view class="button-down">
			<button class="button" @click="toRecord">完成</button>
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
			toRecord(){
				uni.switchTab({
					url:'/pages/record/record'
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
.button{
	margin: 40rpx;
}
</style>
