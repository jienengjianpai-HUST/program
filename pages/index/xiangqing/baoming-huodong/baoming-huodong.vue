<template>
	<view class="box font_constrain">
		<image src="../../../../static/HUST碳风格化背景.jpeg" style="width:100%;height: 100%; z-index: -1;position: fixed;opacity: 0.9;"></image>
		<view class="form-box">
			<view class="title">
				{{detail.title}}活动报名
			</view>
		<form @submit="onSubmit" >
			<view class="name-box">姓名：
			<input type="text" name="nickname" placeholder="请输入" class="input-box"></view>
			<view class="studentid-box">学院：
			<input type="text" name="major" placeholder="请输入" class="input-box"></view>
			<view class="email-box">学号：
			<input type="text" name="student_id" placeholder="请输入" class="input-box"></view>
			<view class="title-box">QQ号：
			<input type="text" name="QQid" placeholder="请输入" class="input-box"></view>
			<view class="sum-box">电话：
			<input type="text" name="tel" placeholder="请输入" class="input-box"></view>
			<!-- <view class="time-box">报名时间：
			<uni-datetime-picker v-model="datetimerange1" type="datetimerange" rangeSeparator="至" />
			</view> -->
			
			
			<button form-type="submit">开始报名</button>
		</form>
		</view>
			
	</view>
</template>

<script>
import student_id_validation from '../../../common_js/validation_funcs.js'
	let id;
	export default {
		data() {
			return {
				detail:{}
			}
		},
		onLoad(e) {
			//console.log(e)
			id=e.id
			this.getDetail();
		},

		methods:{
			getDetail(){
				uniCloud.callFunction({
					name:"GetProject",
					data:{
						id
					}
				}).then(res=>{
					console.log(res);
					this.detail=res.result.data[0]
				})
			},
			onSubmit(e){
				console.log(e);
				let detail=e.detail.value;
				if(detail.nickname==''){
					uni.showToast({
						title:'姓名不能为空！',
						icon:'error'
					})
					return
				}
				if(detail.major==''){
					uni.showToast({
						title:'学院不能为空！',
						icon:'error'
					})
					return
				}
				if (detail.student_id== ""){
					uni.showToast({
						title:"学号不能为空!",
						icon:'error'
					})
					return
				}
				else if (!(student_id_validation.student_id_validation(detail.student_id)))
				{
					uni.showToast({
						title:"学号格式错误",
						icon:'error'
					})
					return
				}
				if (detail.QQid== ""){
					uni.showToast({
						title:"qq号不能为空!",
						icon:'error'
					})
					return
				}
				if (detail.tel== ""){
					uni.showToast({
						title:"电话号码不能为空!",
						icon:'error'
					})
					return
				}
				uniCloud.callFunction({
					name:"AddToSignList",
					data:{
						detail
					}
				}).then(res=>{
					console.log(res)
					uni.showToast({
						title:"报名成功！",
						icon:'success'
					})
					uni.switchTab({
						url:"/pages/index/index"
					})
				})
			},
		}
	}
</script>

<style>
	@font-face {
		font-family:Alimama_ShuHeiTi_Bold ;
		font-weight:normal ;
		src: url("/font/Alimama_ShuHeiTi_Bold.ttf") format("truetype");
	}
	.font_constrain {
		font-family: Alimama_ShuHeiTi_Bold;
	}
.box{
	position: fixed;
	z-index: 0;
	width: 100%;
	height: 100%;
		
}
.title{
	font-size: 64rpx;
	font-weight: bolder;
	text-align: center;
	margin-bottom: 100rpx;
}
.form-box{
	
	margin: 50rpx;
	padding-bottom: 300rpx;
}
.name-box{
	background-color:rgba(255, 255, 255, 0.7);
	display: flex;
	margin: 50rpx;
	height: 80rpx;
	align-items: center;
}
.studentid-box{
	background-color:rgba(255, 255, 255, 0.7);
	display: flex;
	margin: 50rpx;
	height: 80rpx;
	align-items: center;
}
.email-box{
	background-color:rgba(255, 255, 255, 0.7);
	display: flex;
	margin: 50rpx;
	height: 80rpx;
	align-items: center;
}
.title-box{
	background-color:rgba(255, 255, 255, 0.7);
	display: flex;
	margin: 50rpx;
	height: 80rpx;
	align-items: center;
}
.sum-box{
	background-color:rgba(255, 255, 255, 0.7);
	display: flex;
	margin: 50rpx;
	height: 80rpx;
	align-items: center;
}

.input-box{
	border: 3rpx ;
	border-radius: 12px;
	height: 80rpx;
	align-items: center;
	
}
.input-box-large{
	border: 3rpx solid;
	border-radius: 12px;
	padding-bottom: 300rpx;
	height: 80rpx;
	align-items: center;
}
</style>