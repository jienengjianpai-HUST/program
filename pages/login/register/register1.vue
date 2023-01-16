<template>
	<view>
		<view class="header_box">
			HUST碳排放
		</view>
		<view id="register1_info_box">
			<view class="register1_light_grey_small_word">
				昵称
			</view>
			<input value="BirB" class="register1_input" auto-focus="true" placeholder="昵称" v-model="input_nickname"/>
			<view class="register1_light_grey_small_word">
				学号
			</view>
			<input value="U202120215" class="register1_input" placeholder="学号" v-model="input_student_id"/>
			<view class="register1_light_grey_small_word">
				密码
			</view>
			<input value="123456" password="true" class="register1_input" v-model="input_pwd"/>
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
			<input value="123456" password="true" class="register1_input" v-model="input_confirm_pwd"/>
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
				var pattern = new RegExp("[\\w]{6,20}")
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
				else if (!(pattern.test(this.input_pwd)))
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
					},
					success(res) {
						console.log("success")
						console.log(res)
					},
					fail(res) {
						console.log("fail")
						console.log(res)
					}
				})
				// const collection = uniCloud.database().collection("user")
				// let res = collection.add({
				// 	nickname: this.input_nickname,
				// 	student_id: this.input_student_id,
				// 	password: this.input_pwd,
				// }).catch(err => {
				// 	console.log(err)
				// })
				// console.log(res)
				// var pattern = new RegExp("^PERMISSION_ERROR")
				// if (pattern.test(res))
				// {
				// 	uniCloud.callFunction({
				// 		name:"user_register_primary_info",
				// 		data:{
				// 			nickname_:this.input_nickname,
				// 			student_id_:this.input_student_id,
				// 			password_:this.input_pwd,
				// 		},
				// 		success(res_cloud) {
				// 			console.log(res_cloud)
				// 		},
				// 		fail:function(res_cloud){
				// 			console.log(res_cloud)
				// 			uni.showToast({
				// 				title:"学号已存在",
				// 				icon:'error'
				// 			})
				// 		},
						
				// 	})
				// }
			}
		}
	}
</script>

<style lang="scss">

</style>
