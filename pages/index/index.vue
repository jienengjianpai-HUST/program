<template>
	<view class="container">
	<uni-search-bar placeholder="搜索..." bgColor="#EEEEEE"  />
		    <swiper class="swiper" circular="true" indicator-dots="true">
				<swiper-item>
					<view class="swiper-item uni-bg-red">A</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">B</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">C</view>
				</swiper-item>
			</swiper>
    <view class="uni-flex" style="height: 300rpx;  ">
    <button  type="default" @click="navigateToNewPage1">项目申报</button>
    <button  type="default" @click="navigateToNewPage2">项目报名</button>
	<button  type="default" @click="navigateToNewPage3">我的项目</button>
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
		font-size: 14px;
		line-height: 24px;
	}
	.swiper {
			height: 300rpx;
	}
	.swiper-item {
			display: block;
			height: 300rpx;
			line-height: 300rpx;
			text-align: center;
	}
	.button-container1{}
</style>
