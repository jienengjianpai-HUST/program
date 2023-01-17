<template>
	<view class="my-container gradient font_constrain"   style="position: fixed; top: 0; left: 0; right: 0; bottom: 0">
		<image mode="scaleToFill" class="cushion_image_1" src="../../../static/弯曲背景图.png"></image>
		<image mode="scaleToFill" class="cushion_image_2" src="../../../static/白板背景.png"></image>
		<view class="header_box">
			<view class="header_text">
				HUST碳排放
			</view>
		</view>
		<view id="register3_avatar_setting_box">
			<view id="register3_avatar_setting_button_box">
				<image mode="scaleToFill" :src="image_src" id="avatar_id" style="border-radius: 50%;height: 274rpx;width: 274rpx; border: green 6rpx solid; margin: 0% 130rpx 35rpx 130rpx;"></image>
				<image mode="scaleToFill" src="../../../static/照相机.png" style="height: 77rpx;width: 77rpx; position: absolute; top: 520rpx; left: 474rpx;" @click="set_avatar"></image>
				<view id="register3_text_setting_avatar">
					请设置您的头像
				</view>
			</view>
		</view>
		<view id="register3_form">
			<uni-forms ref="info_form" :model="user_infos" labelWidth="120rpx" labelAlign="center" labelPosition="left" :rules="rules">
				<uni-forms-item label="生日" required name="birthday">
					<uni-datetime-picker type="date" :clear-icon="true" v-model="user_infos.birthday" :border="false" style="width: 420rpx; border-radius: 10rpx; border: 1rpx solid lightgrey; margin-bottom: 69rpx;"></uni-datetime-picker>
				</uni-forms-item>
				<uni-forms-item label="性别" required name="sex">
					<uni-data-select v-model="user_infos.sex" :localdata="sexs" style="width: 420rpx;"></uni-data-select>
				</uni-forms-item>
			</uni-forms>
		</view>
		<view id="register3_submit_btn_box">
			<view class="register_green_primary_button" @click="submit_form('info_form')">
				完成注册
			</view>
		</view>
	</view>
</template>

<script>
	const operation = uniCloud.importObject("user_db_operation")
	export default {
		data() {
			return {
				image_src: "../../../static/initial_avatar.jpg",
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
			set_avatar()
			{
				const t = this
				uni.chooseImage({
					count:1,
					success(res) {
						t.image_src = res.tempFilePaths[0]
						//t.image_src = "../../../static/节能活动照片.jpg"
						console.log(t.image_src)
					},
					fail() {
						uni.showToast({
							title:"请重试",
							icon:'error'
						})
					}
				})
			},
			upload_image(image_path)
			{
				getApp().globalData.user_infos.student_id = "U202120211"
				getApp().globalData.user_infos._id = "63c3f1acf43e607808f7c488"
				uniCloud.uploadFile({
					filePath: image_path,
					cloudPath: String(getApp().globalData.user_infos._id) + "_avatar.jpg",
					onUploadProgress(progressEvent) {
						console.log(progressEvent);
						var percentCompleted = Math.round(
							(progressEvent.loaded * 100) / progressEvent.total
						);
					}
				}).then(res => {
					console.log(res)
					
				}).catch(err => {
					console.log(err)
				})
			},
			submit_form: function(form){
				if (this.image_src == "../../../static/initial_avatar.jpg")
				{
					uni.showToast({
						title: '请设置头像',
						icon:'error'
					})
					return 
				}
				this.$refs[form].validate().then(res => {
					uniCloud.callFunction({
						name:"user_register_secondary_info",
						data:{
							student_id:getApp().globalData.user_infos.student_id,
							birthday:this.user_infos.birthday,
							sex:this.user_infos.sex,
							avatar:this.image_src
						},
					}).then(res => {
						res = res.result
						console.log(res)
						if (res == "注册成功")
						{
							this.upload_image(this.image_src)
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
	@import '../common_scss/login_register.scss';
	
	#register3_avatar_setting_box {
		height: 386rpx;
		margin: 0% 103rpx 40rpx 103rpx;
		width: 544rpx;
		// border: 1rpx solid;
	}
	
	#register3_text_setting_avatar {
		text-align: center;
		font-size: 30rpx;
		font-weight: 500;
		font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
	}
	
	#register3_form {
		font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
		font-size: 42rpx;
		height: 301rpx;
		margin: 0% 75rpx 40rpx 75rpx;
		// border: 1rpx solid;
	}
	
	#register3_submit_btn_box {
		//margin: 0% 172rpx 0% 172rpx;
	}
</style>
