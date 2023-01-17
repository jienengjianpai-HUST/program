<template>
	<view class="my-container gradient" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0">
		<image mode="scaleToFill" class="cushion_image" src="../../../static/弯曲背景图.png"></image>
		<view class="header_box">
			HUST碳排放
		</view>
		<view id="register1_info_box">
			<!-- <uni-forms ref="register_form" :rules="rules" :model="user_main_info" labelWidth="40rpx">
				<uni-forms-item label="昵称" required name="nickname">
					<input v-model="user_main_info.input_nickname" placeholder="请输入昵称" auto-focus="true" class="register1_input"/>
				</uni-forms-item>
				<uni-forms-item label="学号" required name="student_id">
					<input v-model="user_main_info.input_student_id" placeholder="请输入学号" class="register1_input"/>
				</uni-forms-item>
			</uni-forms> -->
			<view class="register1_light_grey_small_word">
				昵称
			</view>
			<input  class="register1_input" auto-focus="true" placeholder="昵称" v-model="input_nickname"/>
			<view class="register1_light_grey_small_word">
				学号
			</view>
			<input  class="register1_input" placeholder="学号" v-model="input_student_id"/>
			<view class="register1_light_grey_small_word">
				密码
			</view>
			<input  password="true" class="register1_input" v-model="input_pwd"/>
			<block v-if="pwd_clicked">
				<view id=""  @click="eye_switch('密码')">
					<image style="height: 40rpx;width: 60rpx;" src="../../../static/eyes/隐藏密码.png"></image>
				</view>
			</block>
			<block v-else>
				<view id=""  @click="eye_switch('密码')">
					<image style="height: 40rpx;width: 60rpx;" src="../../../static/eyes/显示密码.png"></image>
				</view>
			</block>
			<view class="register1_light_grey_small_word">
				确认密码
			</view>
			<input  password="true" class="register1_input" v-model="input_confirm_pwd"/>
			<block v-if="confirm_pwd_clicked">
				<view id="register1_eye_pwd" @click="eye_switch('确认密码')">
					<image style="height: 40rpx;width: 60rpx;" src="../../../static/eyes/隐藏密码.png"></image>
				</view>
			</block>
			<block v-else>
				<view id="register1_eye_confirm_pwd" @click="eye_switch('确认密码')">
					<image style="height: 40rpx;width: 60rpx;" src="../../../static/eyes/显示密码.png"></image>
				</view>
			</block>
		</view>
		<view id="register1_button_next" @click="check_for_next">
			下一步
		</view>
	</view>
</template>

<script>
	import student_id_validation from '../../common_js/validation_funcs.js'
	import password_validation from '../../common_js/validation_funcs.js'
	const operation = uniCloud.importObject("user_db_operation")
	export default {
		data() {
			return {
				pwd_clicked:true,
				confirm_pwd_clicked:true,
				
				input_nickname:"",
				input_student_id:"",
				input_pwd:"",
				input_confirm_pwd:"",
			};
		},
		methods:{
			eye_switch:function(loc)
			{
				if (loc == "确认密码")
				{
					this.confirm_pwd_clicked != this.confirm_pwd_clicked
				}
				else if (loc == "密码")
				{
					this.pwd_clicked != this.pwd_clicked
				}
			},
			check_for_next()
			{
				this.input_student_id = this.input_student_id.trim()
				if (this.input_nickname == "")
				{
					uni.showToast({
						title:"昵称不能为空",
						icon:'error'
					})
					return
				}
				if (this.input_student_id == "")
				{
					uni.showToast({
						title:"学号不能为空",
						icon:'error'
					})
					return
				}
				else if (!(student_id_validation.student_id_validation(this.input_student_id)))
				{
					uni.showToast({
						title:"学号格式错误",
						icon:'error'
					})
					return
				}
				if (this.input_confirm_pwd != this.input_pwd)
				{
					uni.showToast({
						title:"两次输入的密码不一致",
						icon:'error'
					})
					return
				}
				else if (this.input_pwd == "")
				{
					uni.showToast({
						title:"密码不能为空",
						icon:'error'
					})
					return
				}
				else if (!(password_validation.password_validation(this.input_pwd)))
				{
					uni.showToast({
						title:"密码格式错误",
						icon:'error'
					})
					return
				}
				uniCloud.callFunction({
					name:"user_register_primary_info",
					data:{
						nickname_:this.input_nickname,
						student_id_:this.input_student_id,
						password_:this.input_pwd,
						carbon_score_left_:0,
						carbon_score_all_:0,
					},
				}).then(res => {
					res = res.result
					console.log(res)
					if (res == "注册成功")
					{
						// console.log(this.input_student_id)
						getApp().globalData.user_infos.student_id = this.input_student_id
						// console.log(getApp().globalData.user_infos.student_id)
						uni.navigateTo({
							url:"/pages/login/register/register2"
						})
					}
					else if (res == "学号已经存在")
					{
						uni.showToast({
							title:res,
							icon:'error'
						})
						return
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	@import '@/pages/login/common_scss/login_register.scss';
	
	
</style>
