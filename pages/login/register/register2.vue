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
	</view>
</template>

<script>
	export default {
		methods:{
			
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