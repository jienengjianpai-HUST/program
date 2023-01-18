<template>
	<view class="box">
		<view class="form-box">
			
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
	export default {
		data() {
			return {
				
			}
		},


		methods:{
			
			onSubmit(e){
				console.log(e);
				let detail=e.detail.value;
				this.pushCloud2(detail)
			},
			pushCloud2(detail){
				uniCloud.callFunction({
					name:"AddToProject_Sign_List",
					data:{
						detail
					}
				}).then(res=>{
					console.log(res)
				})
			},
		}
	}
</script>

<style>
.form-box{
	
	margin: 50rpx;
	padding-bottom: 300rpx;
}
.name-box{
	display: flex;
}
.studentid-box{
	display: flex;
}
.email-box{
	display: flex;
}
.title-box{
	display: flex;
}
.sum-box{
	display: flex;
}
.content-box{
	
}
.input-box{
	border: 3rpx solid;
	border-radius: 12px;
}
.input-box-large{
	border: 3rpx solid;
	border-radius: 12px;
	padding-bottom: 300rpx;
}
</style>