<template>
	<view class="box">
		<view class="form-box">
			
		<form @submit="onSubmit" >
			<view class="name-box">申报人姓名：
			<input type="text" name="nickname" placeholder="请输入" class="input-box"></view>
			<view class="studentid-box">申报人学号：
			<input type="text" name="student_id" placeholder="请输入" class="input-box"></view>
			<view class="email-box">邮箱：
			<input type="text" name="email" placeholder="请输入" class="input-box"></view>
			<view class="title-box">活动标题：
			<input type="text" name="title" placeholder="请输入" class="input-box"></view>
			<view class="sum-box">活动所需人数：
			<input type="text" name="sum" placeholder="请输入" class="input-box"></view>
			<view class="time-box">报名时间：
			<uni-datetime-picker v-model="datetimerange1" type="datetimerange" rangeSeparator="至" />
			</view>
			
			<view class="time-box">活动时间：
			<uni-datetime-picker v-model="datetimerange2" type="datetimerange" rangeSeparator="至"  />
			</view>
			
			<view class="content-box">活动内容：
			<input type="text" name="content" placeholder="活动时间写在里面" class="input-box-large"></view>
			<button form-type="submit">开始报名</button>
		</form>
		</view>
			
	</view>
</template>

<script>
	export default {
		data() {
			return {
				single: '',
				datetimesingle: '',
				range: ['2021-02-1', '2021-3-28'],
				datetimerange1: [],
				datetimerange2: [],
				start: Date.now() - 1000000000,
				end: Date.now() + 1000000000
			}
		},


		methods:{
			change(e) {
				this.single = e
				console.log('change事件:', this.single = e);
			},
			changeLog(e) {
				console.log('change事件:', e);
			},
			maskClick(e){
				console.log('maskClick事件:', e);
			},
			onSubmit(e){
				console.log(e);
				let detail=e.detail.value;
				this.pushCloud2(detail)
			},
			pushCloud2(detail){
				uniCloud.callFunction({
					name:"AddToProject",
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