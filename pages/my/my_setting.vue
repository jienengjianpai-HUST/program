<template>
	<view class="my-container" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;font-weight: bold;">
		<view class="back_header" style="border-bottom: 1rpx solid;">
			<view @click="func_back" class="back_button">
				{{less_symbol}}返回
			</view>
		</view>
		<view id="my_setting_personal_info_region">
			<view id="my_setting_personal_info_label" style="font-size: 24rpx;font-weight: bold;margin: 10rpx 0 0 38rpx;width: 100%;">
				个人资料
			</view>
			<image :src="user_avatar_addr" id="my_avatar"></image>
			<view id="my_username">
				<text>{{username}}</text>
			</view>
			<view id="my_setting_info_change" @click="my_setting_change_info">
				修改{{" "+large_symbol}}
			</view>
			<view id="my_student_id">
				<text>学号：{{student_id}}</text>
			</view>
		</view>
		<view id="my_setting_other_setting_region">
			<view id="my_setting_other_setting_label" style="height: 58rpx;line-height: 58rpx; font-size: 24rpx;font-weight: bold;margin: 10rpx 0 0 38rpx;width: 100%;">
				其他设置
			</view>
			<view id="ms_version_info" class="ms_option">
				版本信息
				<view style="margin-left: 370rpx;display: inline;">{{version_info}}</view>
				<view class="ms_go_symbol">{{large_symbol}}</view>
			</view>
			<view style="float: right; width: 690rpx;height: 0rpx;border-bottom: 1rpx solid;"></view>
			<view style="height: 2rpx;"></view>
			<view id="ms_user_protocol" class="ms_option" @click="func_go('user_protocol')">
				用户协议
				<view class="ms_go_symbol">{{large_symbol}}</view>
			</view>
			<view style="float: right; width: 690rpx;height: 0rpx;border-bottom: 1rpx solid;"></view>
			<view style="height: 2rpx;"></view>
			<view id="ms_privacy_policy" class="ms_option" @click="func_go('privacy_policy')">
				隐私政策
				<view class="ms_go_symbol">{{large_symbol}}</view>
			</view>
			<!-- <view style="float: right; width: 690rpx;height: 0rpx;border-bottom: 1rpx solid;"></view> -->
		</view>
		<view style="border-top: solid 1rpx black;border-bottom: solid 1rpx black;color: red; font-size: 50rpx;justify-content: center;align-items: center;text-align: center;" @click="logout">
			退出登录
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				less_symbol:"< ",
				large_symbol:">",
				user_avatar_addr :"../../static/initial_avatar.jpg",
				username: "我的昵称",
				student_id: "U2021XXXXX",
				version_info:"V1.0.0",
			};
		},
		methods: {
			func_back () {
				uni.navigateBack();
			},
			my_setting_change_info () {
				uni.navigateTo({
					url:"my_change"
				})
			},
			func_go (u) {
				if (u == "user_protocol")
				{
					u = "/pages/my/my_user_protocol"
				}
				else if (u == "privacy_policy")
				{
					u = "/pages/my/my_privacy_policy"
				}
				uni.navigateTo({
					url:u
				})
			},
			logout () {
				console.log("Logout!")
			}
		}
	}
</script>

<style lang="scss">
	@import "@/pages/my/common_scss.scss";
	
	#my_setting_personal_info_region {
		height: 222rpx;
		// border: solid;
		border-bottom: solid 1rpx;
	}
	
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
		width: 220rpx;
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
	
	#my_setting_info_change {
		float: right;
		display: flexbox;
		width: 100rpx;
		height:  84rpx;
		line-height: 84rpx;
		// border: solid;
		margin: 50rpx 52rpx 0 0;
	}
	
	.ms_option {
		font-size: 32rpx;
		height: 68rpx;
		width: 100%;
		// border-bottom: solid 1rpx;
		line-height: 68rpx;
		margin-left: 38rpx;
		width: 674rpx;
	}
	
	#ms_user_protocol {
		
	}
</style>