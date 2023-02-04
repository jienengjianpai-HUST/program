<template>
	<view class="my-container" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;font-weight: bold;">
		<view class="back_header">
			<view @click="func_back" class="back_button">
				{{less_symbol}}返回
			</view>
		</view>
		<view class="ms_title">
			隐私政策
		</view>
		<view class="ms_content">
			更新日期：<br>
			【2022】年【11】月【03】日<br>
			生效日期：<br>
			【2022】年【11】月【10】日<br>
			版本：2022 年 11 月版<br>
			本政策包含以下内容：<br>
			一、我们如何收集和使用您的个人信息<br>
			二、我们如何使用 Cookie 和同类技术<br>
			三、我们如何共享、转让、公开披露您的个人信息<br>
			四、我们如何保存及保护您的个人信息<br>
			五、您的权利<br>
			六、我们如何处理未成年人的个人信息<br>
			七、您的个人信息如何在全球范围转移<br>
			八、本政策如何更新<br>
			九、如何联系我们<br>

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