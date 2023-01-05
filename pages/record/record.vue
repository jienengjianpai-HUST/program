<template>
	
	<view class="record-container gradient"  style="position: fixed; top: 0; left: 0; right: 0; bottom: 0">
		<view class="item">
			<view class="item1">
				<button class="button">出行</button>
			</view>
			<view class="item2">
				<button class="button">电子产品使用时间</button>
			</view>
			<view class="item3">
				<button class="button" @click="toTrash">生活垃圾</button>
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
.item1{
	margin: 30rpx;
	padding: 115rpx;
}
.item2{
	margin: 30rpx;
	padding: 115rpx;
}
.item3{
	margin: 30rpx;
	padding: 115rpx;
}
</style>
