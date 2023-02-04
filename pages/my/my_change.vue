<template>
	<view class="my-container gradient" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;font-weight: bold;">
		<view class="back_header" style="border-bottom: 1rpx solid;">
			<view @click="func_back" class="back_button">
				{{less_symbol}}返回
			</view>
		</view>
		<view id="mc_header" style="height: 220rpx; border-bottom: solid 1rpx;">
			<image :src="user_avatar_addr" id="my_avatar"></image>
			<view id="my_username">
				<text>{{username}}</text>
			</view>
			<view id="my_student_id">
				<text>学号：{{student_id}}</text>
			</view>
		</view>
		<view id="mc_body"></view>
	</view>
</template>

<script>
	
	export default {
		data () {
			return {
				user_avatar_addr :"../../static/initial_avatar.jpg",
				username: "我的昵称",
				student_id: "U2021XXXXX",
				less_symbol: "< "
			}
		},
		methods:{
			
		},
	}
</script>

<style lang="scss">
	@import "@/pages/my/common_scss.scss";
	#my_avatar {
		float: left;
		display: flexbox;
		border-radius: 50%;
		height: 130rpx;
		width: 130rpx;
		margin: 27rpx 0rpx 0 38rpx;
		border: 4rpx #78f12f solid;
	}
	
	#my_username {
		float: left;
		display: flexbox;
		width: 420rpx;
		font-size: 42rpx;
		margin: 27rpx 0 0 51rpx;
		// border: solid;
	}
	
	#my_student_id {
		// position: relative;
		// top: 40rpx;
		// left: 0%;
		float: left;
		display: flexbox;
		width: 210rpx;
		height: 28rpx;
		line-height: 28rpx;
		font-size: 24rpx;
		margin: 46rpx 0 0 51rpx;
		// border: solid;
	}
	
	#mc_body {
		width: 100%;
		height: 1000rpx;
		background: url("../../static/HUST碳 logo纯净版.png") center center no-repeat;
		background-size:  631rpx 631rpx;
	}
</style>