<template>
	<view class="gradient" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0">
		<view class="content">
				<form @submit="formSubmit">
				<view class="avatorWrapper">
					<view class="avator">
					</view>
				</view>
				<view class="form">
					<view class="inputWrapper">
						<input  class="input"  name="yonghuming"  type="text" value="" placeholder="请输入用户名" @blur="spggBlur"/>
						
					</view>
					<view class="inputWrapper">
						<input  class="input"  name="mima"  type="password" value="" placeholder="请输入密码" @blur="spggBlur1"/>
					</view>
					
					
				</view>
				<button form-type="submit" class="loginBtn">确认登录</button>
				</form>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				yonghuming:"",
				mima:"",
			};
		},
		onLoad() {
		
		},
	}
</script>

<style lang="scss">
.gradient{
	background-color:linear-gradient(315deg, #0055ff,#00aa00) ;
	background-size: 300% 300%;
	animation: gradientBG 5s ease infinite;
}

@keyframes gradientBG {
	    0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
}
</style>
