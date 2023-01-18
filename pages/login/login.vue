<template>
	<view class="gradient login-container font_constrain" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0">
		<image src="../../static/login_images/登录底部背景图.png" style="position: absolute; top: 880rpx; left:50rpx;z-index: -1;"></image>
		<view class="header_box">
			<view class="header_text">
				HUST碳排放
			</view>
		</view>
		<view id="logo_box" style="height: 280rpx;margin: 3rpx 0% 0rpx 0%;">
			<image src="../../static/logo.png" mode="scaleToFill" style="height: 205rpx; width: 205rpx; border-radius: 50%; border: 4rpx green solid; margin: 0% 270rpx 40rpx 270rpx;"></image>
		</view>
		<view class="login_box">
			<view class="input_icon">
				<image mode="scaleToFill" src="../../static/login_images/学号小图标.png" class="input_icon_image"></image>
			</view>
			<input type="text" class="login_input" id="login_input_1" placeholder="学号" v-model="student_id_input" @blur="doInput(student_id_input)"/>
		</view>
		<view class="login_box">
			<view class="input_icon">
				<image mode="scaleToFill" src="../../static/login_images/密码小图标.png" class="input_icon_image" style="margin: 15rpx 0rpx 0rpx 20rpx;"></image>
			</view>
			<input type="password" class="login_input" id="login_input_2" placeholder="密码" v-model="password_input"/>
		</view>
		<view id="login_options" style="font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; font-weight: 100; line-height: 45rpx; display: flex; height: 47rpx; margin: 0rpx 102rpx 20rpx 102rpx;">
			<!-- @click="this.remeber_pwd = !this.remeber_pwd" -->
			<checkbox-group @change="check_reme">
				<label> 
					<checkbox :checked="this.remeber_pwd" value="reme"/><text style="font-weight: 100;">记住密码</text>
				</label>
			</checkbox-group>
			
			<view id="register" @click="toPageRegister" style="margin: 0% 0% 0% 210rpx;">注册账号</view>
		</view>
		<view id="login_button" style="height: 144rpx; margin-top: 80rpx;">
			<button type="default" style="width: 270rpx; font-weight:900; font-size: 45rpx;" @click="toPageIndex">登录</button>
		</view>
	</view>
</template>

<script >
	import student_id_validation from '../common_js/validation_funcs.js'
	import password_validation from '../common_js/validation_funcs.js'
	const operation = uniCloud.importObject("user_db_operation")
	export default {
		data() {
			return {
				login_error_code:"学号为空",
				owl1:'owl',
				owl2:'owl2',
				student_id_input:"",
				password_input:"",
				remeber_pwd:false, //true means remember
			};
		},
		mounted() {
			const stu_id = uni.getStorageSync('stu_id')
			const pwd = uni.getStorageSync('pwd')
			console.log(stu_id) // U202120211 2023_HUST_JNJP
			console.log(pwd) // U202120211 2023_HUST_JNJP
			if (stu_id && pwd)
			{
				this.remeber_pwd = true
				this.student_id_input = stu_id
				this.password_input = pwd
			}
			else
			{
				this.remeber_pwd = false
				this.student_id_input = ""
				this.password_input = ""
			}
		},
		methods: {
			check_reme(e){
				this.remeber_pwd = !this.remeber_pwd
			},
			remeber_password_or_not()
			{
				if (this.remeber_pwd)
				{
					console.log("reme")
					console.log(this.student_id_input)
					console.log(this.password_input)
					uni.setStorageSync("stu_id", this.student_id_input)
					uni.setStorageSync("pwd", this.password_input)
				}
				else
				{
					uni.removeStorageSync("stu_id")
					uni.removeStorageSync("pwd")
				}
			},
			toPageRegister(){
				uni.navigateTo({
					url:'/pages/login/register/register1'
				})
			},
			toPageIndex(){
				if (this.student_id_input && this.login_error_code == "学号为空")
				{
					this.login_error_code = ""
				}
				if ((this.password_input == "") && this.login_error_code == "")
				{
					this.login_error_code = "密码为空"
				}
				if (this.login_error_code != "")
				{
					uni.showToast({
						title:this.login_error_code,
						icon:'none'
					});
					return;
				}
				else
				{//U202120210  2023_HUST_JNJP_ pages/login/login
					var login_status = ""
					uniCloud.callFunction({
						name:"user_password_request",
						data:{
							stu_id_input: this.student_id_input,
							pwd_input: this.password_input,
						}
					}).then(res => {
						login_status = res.result
						console.log(login_status)
						if (login_status == "OK")
						{
							uni.showToast({
								title:"登录成功",
								icon:"success"
							})
							this.remeber_password_or_not()
							this.load_user_infos()
							uni.switchTab({
								url:'/pages/index/index'
							})
						}
						else if(login_status == "inexist student_id")
						{
							uni.showToast({
								title:"学号不存在",
								icon:'none'
							});
						}
						else if (login_status == "incorrect password")
						{
							uni.showToast({
								title:"密码错误",
								icon:'none'
							});
						}
					}).catch((err) => {
						console.error(err)
						uni.showToast({
							title:"请重试",
							icon:'error'
						})
					})
				}
				
			},
			async load_user_infos(){
				var user_datas = await operation.get_user_infos(this.student_id_input)
				// console.log(user_datas.ret_data)
				user_datas = user_datas.ret_data
				//var keys = Object.keys(getApp().globalData.user_infos)
				for (const i in getApp().globalData.user_infos) 
				{
					// console.log(i)
					if (user_datas[i] != undefined)
					{
						getApp().globalData.user_infos[i] = user_datas[i]
					}
				}
				console.log(getApp().globalData.user_infos)
			},
			doInput(val){
				if (student_id_validation.student_id_validation(val))
				{
					this.testname = 0
					this.login_error_code = ""
				}
				else
				{
					this.testname = 1
					this.login_error_code = "学号格式错误"
				}
			},
			check_password(password_input){
				if (password_validation.password_validation(password_input))
				{
					this.login_error_code = ""
				}
				else
				{
					this.login_error_code = "密码格式错误"
				}
			}
			
		}
	}
</script>

<style lang="scss">
	@import 'common_scss/login_register.scss';
.gradient{
	background-color:linear-gradient(315deg, #0055ff,#00aa00) ;
	background-size: 300% 300%;
	animation: gradientBG 5s ease infinite;
}
// .login-container{
// 	/* 100%窗口高度 */
// 	height: 100vh;
// 	/* 弹性布局 居中 */
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// }
.title-box{
	position:fixed;
	top: 120rpx;
	font-size: 80rpx;
	font-weight: bolder;
}
.gradient{
	background-color:linear-gradient(175deg, #ff00ff,#ff007f) ;
	background-size: 500% 500%;
	animation: gradientBG 4s ease infinite;
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
.choice-box{
	display: flex;
	
}
.login-box{
	position: relative;
	width: 400rpx;
}
.input-box{
    /* 弹性布局 垂直排列 */
    display: flex;
    flex-direction:column;
}
.input-box input{
    height: 40px;
    border-radius: 5px;
    /* 缩进15像素 */
    text-indent: 15px;
    outline: none;
    margin-bottom: 15px;
    background-color: #ffffff;
}
.input-box input:focus{
    outline: 1px solid lightseagreen;
}
.input-box button{
    border: none;
    height: 45px;
    background-color:mediumspringgreen;
    color: #ffffff;
    border-radius: 3px;
    cursor: pointer;
	font-weight: bolder;
}
.check-box{
    margin-right: 40rpx;
	font-weight: 500;
}
.register-box{
	font-weight: 500;
}

/**/
/* 接下来是猫头鹰的样式 */
.owl{
    width: 211px;
    height: 108px;
    /* 背景图片 */
    background: url("../../static/owl-login.png") no-repeat;
    /* 绝对定位 */
    position: absolute;
    top: -100px;
    /* 水平居中 */
    left: 50%;
    transform: translateX(-50%);
}
.owl .hand{
    width: 34px;
    height: 34px;
    border-radius: 40px;
    background-color: #472d20;
    /* 绝对定位 */
    position: absolute;
    left: 12px;
    bottom: -8px;
    /* 沿Y轴缩放0.6倍（压扁） */
    transform: scaleY(0.6);
    /* 动画过渡 */
    transition: 0.3s ease-out;
}
.owl .hand.hand-r{
    left: 170px;
}
.owl2 .hand{
    transform: translateX(42px) translateY(-15px) scale(0.7);
}
.owl2 .hand.hand-r{
    transform: translateX(-42px) translateY(-15px) scale(0.7);
}
.owl .arms{
    position: absolute;
    top: 58px;
    width: 100%;
    height: 41px;
    overflow: hidden;
}
.owl .arms .arm{
    width: 40px;
    height: 65px;
    position: absolute;
    left: 20px;
    top: 40px;
    background: url("../../static/owl-login-arm.png") no-repeat;
    transform: rotate(-20deg);
    transition: 0.3s ease-out;
}
.owl .arms .arm.arm-r{
    transform: rotate(20deg) scaleX(-1);
    left: 158px;
}
.owl2 .arms .arm{
    transform: translateY(-40px) translateX(40px);
}
.owl2 .arms .arm.arm-r{
    transform: translateY(-40px) translateX(-40px) scaleX(-1);
}

	#login_input_1 {
		margin-bottom: 40rpx;
		// background-image: url("../../static/login_images/学号小图标.png");
	}
	
	#login_input_2 {
		// background-image: url('../../static/login_images/密码小图标.png');
	}
</style>
