<template>
	<view class="baoming-box font_constrain"  >
		<image src="../../../static/HUST碳风格化背景.jpeg" style="width:100%;height: 100%; z-index: -1;position: fixed;opacity: 0.9;"></image>
		<view class="back_button" @click="toBack()">
		</view>
		<view class="header_text">
			活动详情
		</view>
		<view class="item-box1" >
			<view class="title1">活动名：{{detail.title}}</view>
			<!-- <view >地点：</view> -->
			<view >碳积分：</view>
			<view >发起人：{{detail.nickname}}</view>
		</view>
		
		<view class="item-box1" >
			<view class="title2">活动流程</view>
			<view >报名开始时间：{{detail.sign_start}}</view>
			<view >报名结束时间：{{detail.sign_end}}</view>
			<view >活动举行时间：{{detail.pro_start}}</view>
		</view>
		
		<view class="item-box1" >
			<view class="title3">活动内容</view>
			<view class="content">{{detail.content}}</view>
		</view>
		
		<view class="button-box" style="display: flex;">
			
			<button @click="toPageSign(detail._id)">开始报名</button>
		</view>
	</view>
	
</template>

<script>
	let id ;
	export default {
		data() {
			return {
				detail:{}
			};
		},
		onLoad(e) {
			console.log(e)
			id=e.id
			this.getDetail();
		},
		methods:{
			getDetail(){
				uniCloud.callFunction({
					name:"GetProject",
					data:{
						id
					}
				}).then(res=>{
					console.log(res);
					this.detail=res.result.data[0]
					//this.detail=res.result.data[0]
				})
			},
			toPageSign(e){
				uni.navigateTo({
					url:"/pages/index/xiangqing/baoming-huodong/baoming-huodong?id="+e
				})
			},
			toBack(){
				uni.navigateTo({
					url:"/pages/index/baoming/baoming"
				})
			}
		}
		
	}
</script>

<style lang="scss">
@font-face {
	font-family:Alimama_ShuHeiTi_Bold ;
	font-weight:normal ;
	src: url("/font/Alimama_ShuHeiTi_Bold.ttf") format("truetype");
}
.font_constrain {
	font-family: Alimama_ShuHeiTi_Bold;
}
.back_button{
	width:0;
	height:0;
	border-top:30rpx solid transparent;
	border-right:30rpx solid black;
	border-bottom:30rpx solid transparent;
	padding: 1rpx;
}
.baoming-box{
	position: fixed;
	z-index: 0;
	width: 100%;
	height: 100%;
	
}
.item-box1{
	padding: 80rpx;
	border:  3rpx ;
	border-radius: 12px;
	margin-bottom: 30rpx;
	margin-left: 30rpx;
	margin-right: 30rpx;
	margin-top: 30rpx;
	font-weight: bolder;
	//backdrop-filter: blur(3px);
	//background-color: white;
	//opacity: 0.7;
	background-color:rgba(255, 255, 255, 0.4); 
}
.button-box button{
	padding: 20rpx;
	background-color: rgb(147, 255, 32);
	border-radius: 14px;
}
.button-box font{
	color: white;
}
.header_text {
	margin-top: 30rpx;
	height: 100rpx;
	font-weight: bolder;
	font-size: 72rpx;
	line-height: 120rpx;
	text-align: center;
}
</style>
