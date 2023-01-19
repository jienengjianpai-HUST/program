<template>
    <view class="baoming-box font_constrain">
		<image src="../../../static/HUST碳风格化背景.jpeg" style="width:100%;height: 100%; z-index: -1;position: fixed;opacity: 0.9;"></image>
		<view class="back_button" @click="toPageIndex()">
		</view>
		<scroll-view  class="scroll-box" scroll-y="true" >
		<view class="item-box" v-for="item in userArr" :key="item._id" @click="toPageInformation(item._id)">
			<view style="float: ">
			<view >活动名：{{item.title}}</view>
			<view >发起人：{{item.nickname}}</view>
			<view >最大人数：{{item.sum}}</view>
			<view >已报名人数：{{item.sign_people}}</view>
			</view>
		</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userArr:[],
			};
		},
		onLoad(){
			uniCloud.callFunction({
				name:"ShowProject",
				data:{}
			}).then(res=>{
				//console.log(res)
				this.userArr=res.result.data
			})
		},
		methods:{
			toPageInformation(e){
				uni.navigateTo({
					url:"/pages/index/xiangqing/xiangqing?id="+e
				})
			},
			toPageIndex(){
				uni.switchTab({
					url:"/pages/index/index"
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
.baoming-box{
	position: fixed;
	z-index: 0;
	width: 100%;
	height: 100%;
		
}
.scroll-box{
	height: 85%;
}
.item-box{
	padding: 100rpx;
	border:3rpx solid;
	border-radius: 12px;
	margin: 40rpx;
	background-color:rgba(255, 255, 255, 0.7); 
}
.back_button{
	width:0;
	height:0;
	border-top:30rpx solid transparent;
	border-right:30rpx solid black;
	border-bottom:30rpx solid transparent;
	padding: 1rpx;
}
</style>
