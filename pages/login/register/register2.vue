<template>
	<view class="my-container gradient"   style="position: fixed; top: 0; left: 0; right: 0; bottom: 0">
		<view class="header_box">
			HUST碳排放
		</view>
		<view id="register2_center_box">
			<view id="register2_center_text">
				我们已向您的学生邮
				箱发送了一个验证码，
				请输入：
			</view>
			<view id="register2_center_form">
				<uni-forms ref="valiform" ></uni-forms>
			</view>
		</view>
		<view>
			<image @click="set_a" :src="image_src" mode="scaleToFill" style="height: 200rpx; width: 200rpx;"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				image_src: "../../../static/initial_avatar.jpg",
			}
		},
		methods:{
			set_a() {
				this.image_src = "../../../static/节能活动照片.jpg"
			}
		},
		onLoad() {
			uni.navigateTo({
				url:"/pages/login/register/register3"
			})
		}
	}
</script>

<style>
</style>