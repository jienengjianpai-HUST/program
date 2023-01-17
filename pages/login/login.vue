<template>
	<view class="gradient login-container" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0">
		<view class="title-box">
			HUST碳排放
		</view>
		<view class="login-box">
			<view  :class="owl1" id="owl" >
				<view class="hand"></view>
				<view class="hand hand-r"></view>
				<view class="arms">
					<view class="arm">
						
					</view>
					<view class="arm arm-r">
						
					</view>
				</view>
			</view>
			<view class="input-box">
			    <input type="text" placeholder="学号" v-model="student_id_input" @blur="doInput(student_id_input)">
			    <input type="password" placeholder="密码" v-model="password_input" id="password" @blur="check_password(password_input)">
				<view class="choice-box" >
					<label>
						<checkbox/><text class="check-box">记住密码</text>
					</label>
					<view class="register-box" @click="toPageRegister" >
						<text>注册账号</text>
					</view>
				</view>
			    <button @click="toPageIndex">登录</button>
			</view>
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
			};
		},
		methods: {
			toPageRegister(){
				uni.navigateTo({
					url:'/pages/login/register/register1'
				})
			},
			toPageIndex(){
				if (this.login_error_code != "")
				{
					uni.showToast({
						title:this.login_error_code,
						icon:'none'
					});
					return;
				}
				else
				{//U202120210  2023_HUST_JNJP_
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
				console.log(user_datas.ret_data)
				user_datas = user_datas.ret_data
				//var keys = Object.keys(getApp().globalData.user_infos)
				for (const i in getApp().globalData.user_infos) 
				{
					console.log(i)
					if (user_datas[i] != undefined)
					{
						getApp().globalData.user_infos[i] = user_datas[i]
					}
				}
				// U202120222 111111
				console.log(getApp().globalData.user_infos)
			},
			//输入框失去焦点触发事件
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
.gradient{
	background-color:linear-gradient(315deg, #0055ff,#00aa00) ;
	background-size: 300% 300%;
	animation: gradientBG 5s ease infinite;
}
.login-container{
	/* 100%窗口高度 */
	height: 100vh;
	/* 弹性布局 居中 */
	display: flex;
	justify-content: center;
	align-items: center;
}
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
	font-weight: 700;
}
.register-box{
	font-weight: 700;
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
</style>
