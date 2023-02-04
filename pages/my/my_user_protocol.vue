<template>
	<view class="my-container" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;font-weight: bold;">
		<view class="back_header">
			<view @click="func_back" class="back_button">
				{{less_symbol}}返回
			</view>
		</view>
		<view class="ms_title">
			用户协议
		</view>
		<view class="ms_content">
			特别提示<br>
			感谢您阅读并使用“XXX"平台（以下称“平台"）提供的各项服务。您在申请注册成为平台用户之前,应当认真阅读本协议。且您务必审慎阅读、充分理解各条款内容，特别是免除或者限制责任的条款、法律适用和争议解决条款。免除或者限制责任的条款,您应重点阅读.您的注册、登录、使用等行为将视为对本协议的接受，并同意接受本协议各项条款的约束。如您对协议有任何疑问，可向平台客服咨询. 用户在仔细阅读并同意所有服务条款完成注册程序后，即时成为平台的正式用户.本注册协议自用户注册成功之日起，在用户与平台之间发生法律效力。
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
</style>