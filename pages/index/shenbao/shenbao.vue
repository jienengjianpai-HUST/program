<template>
	<view class="box font_constrain">
			
		<image src="../../../static/background/07_mohu.png" style="width:100%;height: 100%; z-index: -1;position: fixed;opacity: 0.9;"></image>
		<view class="back_button" @click="toPageIndex()">
		</view>
		<view class="item-box">
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
			<view class="time-choice">
				<uni-datetime-picker type="datetime" :clear-icon="false" v-model="sign_start" hideSecond="true" @change="changeLog(sign_start)"/>
				<uni-datetime-picker type="datetime" :clear-icon="false" v-model="sign_end" hideSecond="true"  @change="changeLog(sign_end)"/>
			</view>
					
			</view>
			
			<view class="time-box">活动时间：
			<view class="time-choice">
				<uni-datetime-picker type="datetime" :clear-icon="false" v-model="pro_start" hideSecond="true" @change="changeLog(pro_start)"/>
				<uni-datetime-picker type="datetime" :clear-icon="false" v-model="pro_end" hideSecond="true" @change="changeLog(pro_end)"/>
			</view>
					
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
				sign_start:'',
				sign_end:'',
				pro_start:'',
				pro_end:'',
				datetimesingle: '',
				range: ['2021-02-1', '2021-3-28'],
				datetimerange1: [],
				datetimerange2: [],
				start: Date.now() - 1000000000,
				end: Date.now() + 1000000000,
			}
		},


		methods:{
			toPageIndex(){
				uni.switchTab({
					url:"/pages/index/index"
				})
			},

			changeLog(e) {
				console.log(e);
				
			},
			
			onSubmit(e){
				console.log(e);
				let detail=e.detail.value;
				uniCloud.callFunction({
						name:"AddToProject",
						data:{
							detail,
							sign_start:this.sign_start,
							sign_end:this.sign_end,
							pro_start:this.pro_start,
							pro_end:this.pro_end,
							
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
@font-face {
	font-family:Alimama_ShuHeiTi_Bold ;
	font-weight:normal ;
	src: url("/font/Alimama_ShuHeiTi_Bold.ttf") format("truetype");
	}
.font_constrain {
	font-family: Alimama_ShuHeiTi_Bold;
}
.time-choice{
	display: flex;
	
}
.box{
	position: fixed;
	z-index: 0;
	width: 100%;
	height: 100%;
		
}
.back_button{
	width:0;
	height:0;
	border-top:30rpx solid transparent;
	border-right:30rpx solid black;
	border-bottom:30rpx solid transparent;
	padding: 1rpx;
}
.item-box{
	margin: 30rpx;

}
.name-box{
	display: flex;
	margin-bottom: 40rpx;
}
.studentid-box{
	display: flex;
	margin-bottom: 40rpx;
}
.email-box{
	display: flex;
	margin-bottom: 40rpx;
}
.title-box{
	display: flex;
	margin-bottom: 40rpx;
}
.sum-box{
	display: flex;
	margin-bottom: 40rpx;
}
.content-box{
	margin-bottom: 40rpx;
	background-color:rgba(255, 255, 255, 0.4); 
	border: white;
	border-radius: 12px;
	margin-top: 40rpx;
}
.time-box{
	
}
.input-box{
	border: 3rpx solid;
	border-radius: 12px;
}
.input-box-large{
	border: 3rpx ;
	border-radius: 12px;
	padding-bottom: 300rpx;
}
button{
	float: right;
	background-color: greenyellow;
}
</style>