<template>
	<view class="my-container gradient"   style="position: fixed; top: 0; left: 0; right: 0; bottom: 0">
		<view class="header_box">
			HUST碳排放
		</view>
		<view id="register3_avatar_setting_box">
			<view id="register3_avatar_setting_button_box">
				<image mode="scaleToFill" src="../../../static/initial_avatar.jpg" style="border-radius: 50%;height: 154rpx;width: 154rpx;"  @click="set_avatar"></image>
				<image mode="scaleToFill" src="../../../static/照相机.png" style="height: 44rpx;width: 44rpx;"></image>
				<view id="register3_text_setting_avatar">
					请设置您的头像
				</view>
			</view>
			<view id="register3_form">
				<uni-forms ref="info_form" :model="user_infos" labelWidth="120rpx" labelAlign="center" labelPosition="left" :rules="rules">
					<uni-forms-item label="生日" required name="birthday">
						<uni-datetime-picker type="date" :clear-icon="true" v-model="user_infos.birthday" :border="false" style="width: 600rpx;"></uni-datetime-picker>
					</uni-forms-item>
					<uni-forms-item label="性别" required name="sex">
						<uni-data-select v-model="user_infos.sex" :localdata="sexs"></uni-data-select>
					</uni-forms-item>
				</uni-forms>
				<view id="register3_submit_btn_box">
					<view id="register3_submit_btn" @click="submit_form('info_form')">
						完成注册
					</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user_infos:{
					birthday:"",
					sex:""
				},
				sexs: [{
					text: '男',
					value: '男'
				}, {
					text: '女',
					value: '女'
				}],
				rules:{
					birthday:{
						rules:[{
							required: true,
							errorMessage: "生日不能为空"
						}]
					},
					sex:{
						rules:[{
							required: true,
							errorMessage: "性别不能为空"
						}]
					},
				}
			}
		},
		methods: {
			set_avatar(){
				
			},
			submit_form: function(form){
				this.$refs[form].validate().then(res => {
					uni.showToast({
						title: `信息填写成功！`,
						icon:'success'
					})
					//getApp().globalData.user_infos.student_id = "U202120211"
					uniCloud.callFunction({
						name:"user_register_secondary_info",
						data:{
							student_id:getApp().globalData.user_infos.student_id,
							birthday:this.user_infos.birthday,
							sex:this.user_infos.sex
						},
					}).then(res => {
						res = res.result
						console.log(res)
						if (res == "注册成功")
						{
							uni.navigateTo({
								url:"/pages/login/login"
							})
						}
						else if (res == "注册失败")
						{
							uni.showToast({
								title: `网络故障，请重试`,
								icon:'loading'
							})
							return 
						}
					}).catch(err => {
						console.log(err)
						uni.showToast({
							title: `网络故障，请重试`,
							icon:'loading'
						})
						return
					})
					
				}).catch(err_val => {
					return
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
