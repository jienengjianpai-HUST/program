<template>
	<view class="baoming-container gradient" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0">
		<uni-search-bar placeholder="搜索..." bgColor="#EEEEEE"  />
		<view class="community-content text">
			<uni-card @click="toPagexiangqing">
				<template v-slot:actions>
					<view class="card-actions1 " style="float: left;">
						<view class="card-actions-item" >
							<text class="card-actions-item-text">项目名称</text>
						</view>
						<view class="card-actions-item" >
							<text class="card-actions-item-text">地点</text>
						</view>
						<view class="card-actions-item" >
							<text class="card-actions-item-text">时间</text>
						</view>
						<view class="card-actions-item">
							<text class="card-actions-item-text">碳积分</text>
						</view>
						<view class="card-actions-item">
							<text class="card-actions-item-text">发起者</text>
						</view>
					</view>
					<view class="card-actions2" style="float: right;">
						<image src="../../../static/c3.png" style="height: 150rpx; width: 100rpx;"></image>
						<view class="card-actions2-item">
							已报名：报名人数/总人数
						</view>
					</view>
				</template>
			</uni-card>
			
			<uni-card @click="toPagexiangqing">
				<template v-slot:actions>
					<view class="card-actions1" style="float: left;">
						<view class="card-actions-item" >
							<text class="card-actions-item-text">项目名称</text>
						</view>
						<view class="card-actions-item" >
							<text class="card-actions-item-text">地点</text>
						</view>
						<view class="card-actions-item" >
							<text class="card-actions-item-text">时间</text>
						</view>
						<view class="card-actions-item">
							<text class="card-actions-item-text">碳积分</text>
						</view>
						<view class="card-actions-item">
							<text class="card-actions-item-text">发起者</text>
						</view>
					</view>
					<view class="card-actions2" style="float: right;">
						<image src="../../../static/c3.png" style="height: 150rpx; width: 100rpx;"></image>
						<view class="card-actions2-item">
							已报名：报名人数/总人数
						</view>
					</view>
				</template>
			</uni-card>
			
			<uni-card @click="toPagexiangqing">
				<template v-slot:actions>
					<view class="card-actions1" style="float: left;">
						<view class="card-actions-item" >
							<text class="card-actions-item-text">项目名称</text>
						</view>
						<view class="card-actions-item" >
							<text class="card-actions-item-text">地点</text>
						</view>
						<view class="card-actions-item" >
							<text class="card-actions-item-text">时间</text>
						</view>
						<view class="card-actions-item">
							<text class="card-actions-item-text">碳积分</text>
						</view>
						<view class="card-actions-item">
							<text class="card-actions-item-text">发起者</text>
						</view>
					</view>
					<view class="card-actions2" style="float: right;">
						<image src="../../../static/c3.png" style="height: 150rpx; width: 100rpx;"></image>
						<view class="card-actions2-item">
							已报名：报名人数/总人数
						</view>
					</view>
				</template>
			</uni-card>
			
			<uni-card @click="toPagexiangqing">
				<template v-slot:actions>
					<view class="card-actions1" style="float: left;">
						<view class="card-actions-item" >
							<text class="card-actions-item-text">项目名称</text>
						</view>
						<view class="card-actions-item" >
							<text class="card-actions-item-text">地点</text>
						</view>
						<view class="card-actions-item" >
							<text class="card-actions-item-text">时间</text>
						</view>
						<view class="card-actions-item">
							<text class="card-actions-item-text">碳积分</text>
						</view>
						<view class="card-actions-item">
							<text class="card-actions-item-text">发起者</text>
						</view>
					</view>
					<view class="card-actions2" style="float: right;">
						<image src="../../../static/c3.png" style="height: 150rpx; width: 100rpx;"></image>
						<view class="card-actions2-item">
							已报名：报名人数/总人数
						</view>
					</view>
				</template>
			</uni-card>
			
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
			toPagexiangqing(){
				uni.navigateTo({
					url:'/pages/index/xiangqing/xiangqing'
				})
			}
		}
	}
</script>

<style lang="scss">
.card-actions2{
	margin-bottom: 20rpx;
}
.card-actions1{
	margin-left: 50rpx;
}
</style>
