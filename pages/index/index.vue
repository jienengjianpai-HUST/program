<template>
	<view class="container gradient text"  style="position: fixed; top: 0; left: 0; right: 0; bottom: 0">
	<uni-search-bar placeholder="搜索..." bgColor="#EEEEEE"  />
		    <swiper class="swiper" circular="true" indicator-dots="true">
				<swiper-item >
					<view class="swiper-item">活动图片</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item ">活动图片</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item ">活动图片</view>
				</swiper-item>
			</swiper>
    <view class="index-button" >
		<button  class="button" type="default" @click="navigateToNewPage1">项目申报</button>
		<button  class="button" type="default" @click="navigateToNewPage2">项目报名</button>
		<button  class="button" type="default" @click="navigateToNewPage3">我的项目</button>
     </view>
</view>
	
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			navigateToNewPage1(){
				uni.navigateTo({
					url:'/pages/index/shenbao/shenbao'
				})
			},
			navigateToNewPage2(){
				uni.navigateTo({
					url:'/pages/index/baoming/baoming'
				})
			},
			navigateToNewPage3(){
				uni.navigateTo({
					url:'/pages/index/wodexiangmu/wodexiangmu'
				})
			}
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		line-height: 24px;
	}
	.swiper {
		height: 300rpx;
		border: solid 0.5rpx black;
		margin-bottom: 40rpx;
	}
	.swiper-item {
			display: block;
			height: 300rpx;
			line-height: 300rpx;
			text-align: center;
	}
	.button{
		margin-bottom: 50rpx;
	}
</style>
