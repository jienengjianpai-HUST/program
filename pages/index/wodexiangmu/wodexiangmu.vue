<template>
	<view class="box font_constrain">
		<image src="../../../static/background/07_mohu.png" style="width:100%;height: 100%; z-index: -1;position: fixed;opacity: 0.9;"></image>
		<view class="back_button" @click="toBack()">
		</view>
		
		<view class="pro-box">
			正在进行
			<scroll-view scroll-y="true" class="scroll-box">
				<view @click="">
					123{{}}
				</view>
				<view @click="">
					123{{}}
				</view>
				<view @click="">
					123{{}}
				</view>
				<view @click="">
					123{{}}
				</view>
				<view @click="">
					123{{}}
				</view>
				<view @click="">
					123{{}}
				</view>
				<view @click="">
					123{{}}
				</view>
				
				<view @click="">
					123{{}}
				</view>
				<view @click="">
					123{{}}
				</view>
				<view @click="">
					123{{}}
				</view>
				
			</scroll-view>
		</view>
		
		<view class="pro-box">
			已报名
			<scroll-view scroll-y="true" class="scroll-box">
				<view @click="">
					123{{}}
				</view>
				<view @click="">
					123{{}}
				</view>
				<view @click="">
					123{{}}
				</view>
				<view @click="">
					123{{}}
				</view>
				<view @click="">
					123{{}}
				</view>
				<view @click="">
					123{{}}
				</view>
				<view @click="">
					123{{}}
				</view>
				
				<view @click="">
					123{{}}
				</view>
				<view @click="">
					123{{}}
				</view>
				<view @click="">
					123{{}}
				</view>
				
			</scroll-view>
		</view>
		
		<view class="pro-box" >
			已结束
			<scroll-view scroll-y="true" class="scroll-box">
				<view @click="">
					123{{}}
				</view>
				<view @click="">
					123{{}}
				</view>
				<view @click="">
					123{{}}
				</view>
				<view @click="">
					123{{}}
				</view>
				<view @click="">
					123{{}}
				</view>
				<view @click="">
					123{{}}
				</view>
				<view @click="">
					123{{}}
				</view>
				
				<view @click="">
					123{{}}
				</view>
				<view @click="">
					123{{}}
				</view>
				<view @click="">
					123{{}}
				</view>
				
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onLoad(e){
			console.log(e)
			//info为_id
			this.info=e; 
		},
		methods:{
			toBack(){
				uni.switchTab({
					url:"/pages/index/index"
				})
			}
		}
	}
</script>

<style lang="scss">
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
.back_button{
	width:0;
	height:0;
	border-top:30rpx solid transparent;
	border-right:30rpx solid black;
	border-bottom:30rpx solid transparent;
	padding: 1rpx;
}
.pro-box{
	height: 23%;
	align-items: center;
	border: 3rpx ;
	margin: 10%;
	padding-top: 5px;
	text-align: left;
	line-height: 30px;
	background-color:rgba(255, 255, 255, 0.7); 
	border-radius: 12px;
}
.scroll-box{
	height: 75%;
}
</style>
