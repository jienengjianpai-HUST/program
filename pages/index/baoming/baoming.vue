<template>
    <view class="baoming-box">
		<view class="item-box" v-for="item in userArr" :key="item._id">
			<view style="float: ">
			<view >活动名：{{item.title}}</view>
			<view >发起人：{{item.nickname}}</view>
			<view >最大人数：{{item.sum}}</view>
			<button @click="toPageInformation(item._id)">查看详情</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userArr:[],
			};
		},
		onLoad(){
			uniCloud.callFunction({
				name:"ShowProject",
				data:{}
			}).then(res=>{
				console.log(res)
				this.userArr=res.result.data
			})
		},
		methods:{
			toPageInformation(e){
				uni.navigateTo({
					url:"/pages/index/xiangqing/xiangqing?id="+e
				})
			}
		}
	}
</script>

<style lang="scss">
button{
	padding: 30rpx;
}
.item-box{
	padding: 100rpx;
	border:3rpx solid;
	border-radius: 12px;
	margin: 40rpx;
}
</style>
