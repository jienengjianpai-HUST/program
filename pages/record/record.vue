<template>
	<view class="record-container">
		<view class="item">
			<view class="item1">
				<button>出行</button>
			</view>
			<view class="item2">
				<button>电子产品使用时间</button>
			</view>
			<view class="item3">
				<button @click="toTrash">生活垃圾</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			toTrash(){
				uni.navigateTo({
					url:'/pages/record/trash/trash'
				})
			}
		}
	}
</script>

<style lang="scss">
.item{
	margin: 50rpx;
}
.item1{
	margin: 50rpx;
}
.item2{
	margin: 50rpx;
}
.item3{
	margin: 50rpx;
}
</style>
