<template>
<<<<<<< HEAD
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
=======
	<view class="gradient login-container" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0">
		<view class="title-box">
			HUST碳排放
		</view>
		<view class="login-box">
			
			<view  :class="owl1" id="owl" >
				<view class="hand"></view>
				<view class="hand hand-r"></view>
				<view class="arms">
					<view class="arm"></view>
					<view class="arm arm-r"></view>
				</view>
			</view>
			<view class="input-box">
			    <input type="text" placeholder="学号" v-model="user_name" @blur="doInput(user_name)">
			    <input type="password" placeholder="密码" v-model="password" id="password"  >
				<view class="choice-box" >
					<label>
						<checkbox  :value="true" /><text class="check-box">记住密码</text>
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
	export default {
		data() {
			
			return {
				owl1:'owl',
				owl2:'owl2',
			};
		},
		methods: {
			toPageRegister(){
				uni.navigateTo({
					url:'/pages/login/register/register'
				})
			},
			toPageIndex(){
				uni.switchTab({
					url:'/pages/index/index'
				})
			},
			//输入框失去焦点触发事件
			 doInput(val){
						    if(val[0]!='U'){
							    this.testname = 1
							    uni.showToast({
									title:"学号格式错误",
									icon:'none'
							    });
							    return;
						    }
							if(val[0]=='U'){
							    this.testname = 0
							    uni.showToast({
									title:"学号格式正确",
									icon:'none'
							    });
							    return;
							}
						},
			
			
		}
>>>>>>> 8d66c7d92a27b545a026f57836c4c4bf84fd84fb
	}
</script>

<style lang="scss">
<<<<<<< HEAD
.gradient{
	background-color:linear-gradient(315deg, #0055ff,#00aa00) ;
	background-size: 300% 300%;
	animation: gradientBG 5s ease infinite;
=======
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
>>>>>>> 8d66c7d92a27b545a026f57836c4c4bf84fd84fb
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
<<<<<<< HEAD
=======
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
    background-color: #fff;
}
.input-box input:focus{
    outline: 1px solid lightseagreen;
}
.input-box button{
    border: none;
    height: 45px;
    background-color:mediumspringgreen;
    color: #fff;
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
>>>>>>> 8d66c7d92a27b545a026f57836c4c4bf84fd84fb
</style>
