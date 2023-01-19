<template>
	<view class="container font_constrain" >
		<image src="../../static/background/07_mohu.png" style="width:100%;height: 100%; z-index: -1;position: fixed;opacity: 0.9;"></image>
	<uni-search-bar placeholder="搜索..." bgColor="#EEEEEE"  />
		    <!-- <swiper class="swiper" circular="true" indicator-dots="true">
				<swiper-item >
					<view class="swiper-item">活动图片</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item ">活动图片</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item ">活动图片</view>
				</swiper-item>
			</swiper> -->
    <view class="index-button" >
		<button  class="button" type="default" @click="navigateToNewPage1">项目申报</button>
		<button  class="button" type="default" @click="navigateToNewPage2">项目报名</button>
		<button  class="button" type="default" @click="navigateToNewPage3(Userinfo._id)">我的项目</button>
     </view>
	 
	 <view class="outline-box">
	 	<view class="outline1">
	 		序号
	 	</view>
	 </view>
</view>
	
</template>

<script>
	export default {
		data() {
			return {
				Userinfo:{},
			}
		},
		onLoad() {
			let Userinfo = getApp().globalData.user_infos;
			console.log(Userinfo);
			this.Userinfo=Userinfo;
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
			navigateToNewPage3(e){
				uni.navigateTo({
					url:'/pages/index/wodexiangmu/wodexiangmu?id='+e
				})
			}
		}
	}
</script>

<style>
	@font-face {
		font-family:Alimama_ShuHeiTi_Bold ;
		font-weight:normal ;
		src: url("/font/Alimama_ShuHeiTi_Bold.ttf") format("truetype");
	}
	.font_constrain {
		font-family: Alimama_ShuHeiTi_Bold;
	}
	.container {
		position: fixed;
		z-index: 0;
		width: 100%;
		height: 100%;
	}
	.index-button{
		background-color:rgba(255, 255, 255, 0.4);
		height: 40%;
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
		border: white;
		margin-bottom: 50rpx;
		margin-left: 50rpx;
		margin-right: 50rpx;
	}
</style>
