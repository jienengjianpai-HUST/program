<template>
    <view class="datainput-container">
        <view class="title">
        	数据输入
        </view>
		
		
		<view class="inputbox">
			<view class="text">快递盒（大）X   </view>
			<uni-easyinput  placeholder="请输入个数" class="input1"></uni-easyinput>
		</view>
		
		<view class="button-down">
			<button @click="toWaimaihe">上一项</button>
			<button @click="toKuaidihesmall">下一项</button>
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
			toKuaidihesmall(){
				uni.navigateTo({
					url:'/pages/record/trash/kuadihe-small/kuadihe-small'
				})
			},
			toWaimaihe(){
				uni.navigateTo({
					url:'/pages/record/trash/waimaihe/waimaihe'
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
.button-down{
	display: flex;
}
</style>