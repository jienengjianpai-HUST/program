<template>
	<view class="community-container">
		<view class="button_top">
			<button>社区</button>
			<button @click="toPageJiangli">奖励</button>
		</view>
		<view class="title-container">
			社区公告
		</view>
		<view class="community-content">
			<uni-card >
				<text>内容待补充</text>
				<template v-slot:actions>
					<view class="card-actions">
						<view class="card-actions-item" >
							<uni-icons type="redo" size="18" color="#999"></uni-icons>
							<text class="card-actions-item-text">分享</text>
						</view>
						<view class="card-actions-item" >
							<uni-icons type="heart" size="18" color="#999"></uni-icons>
							<text class="card-actions-item-text">点赞</text>
						</view>
						<view class="card-actions-item">
							<uni-icons type="chatbubble" size="18" color="#999"></uni-icons>
							<text class="card-actions-item-text">评论</text>
						</view>
					</view>
				</template>
			</uni-card>
		</view>
		<view class="community-content">
			<uni-card >
				<text>内容待补充</text>
				<template v-slot:actions>
					<view class="card-actions">
						<view class="card-actions-item" >
							<uni-icons type="redo" size="18" color="#999"></uni-icons>
							<text class="card-actions-item-text">分享</text>
						</view>
						<view class="card-actions-item" >
							<uni-icons type="heart" size="18" color="#999"></uni-icons>
							<text class="card-actions-item-text">点赞</text>
						</view>
						<view class="card-actions-item">
							<uni-icons type="chatbubble" size="18" color="#999"></uni-icons>
							<text class="card-actions-item-text">评论</text>
						</view>
					</view>
				</template>
			</uni-card>
		</view>
		<view class="community-content">
			<uni-card >
				<text>内容待补充</text>
				<template v-slot:actions>
					<view class="card-actions">
						<view class="card-actions-item" >
							<uni-icons type="redo" size="18" color="#999"></uni-icons>
							<text class="card-actions-item-text">分享</text>
						</view>
						<view class="card-actions-item" >
							<uni-icons type="heart" size="18" color="#999"></uni-icons>
							<text class="card-actions-item-text">点赞</text>
						</view>
						<view class="card-actions-item">
							<uni-icons type="chatbubble" size="18" color="#999"></uni-icons>
							<text class="card-actions-item-text">评论</text>
						</view>
					</view>
				</template>
			</uni-card>
		</view>
		<view class="community-content">
			<uni-card >
				<text>内容待补充</text>
				<template v-slot:actions>
					<view class="card-actions">
						<view class="card-actions-item" >
							<uni-icons type="redo" size="18" color="#999"></uni-icons>
							<text class="card-actions-item-text">分享</text>
						</view>
						<view class="card-actions-item" >
							<uni-icons type="heart" size="18" color="#999"></uni-icons>
							<text class="card-actions-item-text">点赞</text>
						</view>
						<view class="card-actions-item">
							<uni-icons type="chatbubble" size="18" color="#999"></uni-icons>
							<text class="card-actions-item-text">评论</text>
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
		methods: {
			toPageJiangli(){
				uni.navigateTo({
					url:'/pages/community/jiangli/jiangli'
				})
			}
		}
}
</script>

<style lang="scss">
.button_top{
	display: flex;
}
.title-container{
	text-align: center;
	border: 4rpx solid black;
	margin-top: 20rpx;
	margin-left: 50rpx;
	margin-right: 50rpx;
	padding: 30rpx;
}
.card-actions{
	display: flex;
}
</style>
