<template>
	<view class="community-container">
		<view class="button_top" >
			<button @click="toPageTaolun">讨论</button>
			<button >奖励</button>
		</view>
		<view class="title-container">
			<text>碳积分奖励兑换</text>
		</view>
		<!--缺一个动态显示的社区-->
		<view class="jiangli-container" style="height: 200rpx;">
			<view class="part1">
				<image src="../../../static/c1.png" style=" height: 180rpx; width: 100rpx; float: left;"></image>
			</view>
			<view class="part2" style="float: ;" >
				<view class="name">
					名称：
				</view>
				<view class="number">
					数量：
				</view>
				<view class="required">
					所需碳积分
				</view>
			</view>
			<view class="button-duihuan" style="float: right;">
				<button>兑换</button>
			</view>
		</view>
		<view class="jiangli-container" style="height: 200rpx;">
			<view class="part1">
				<image src="../../../static/c2.png" style=" height: 180rpx; width: 100rpx; float: left;"></image>
			</view>
			<view class="part2" style="float: ;" >
				<view class="name">
					名称：
				</view>
				<view class="number">
					数量：
				</view>
				<view class="required">
					所需碳积分
				</view>
			</view>
			<view class="button-duihuan" style="float: right;">
				<button>兑换</button>
			</view>
		</view>
		<view class="jiangli-container" style="height: 200rpx;">
			<view class="part1">
				<image src="../../../static/c3.png" style=" height: 180rpx; width: 100rpx; float: left;"></image>
			</view>
			<view class="part2" style="float: ;" >
				<view class="name">
					名称：
				</view>
				<view class="number">
					数量：
				</view>
				<view class="required">
					所需碳积分
				</view>
			</view>
			<view class="button-duihuan" style="float: right;">
				<button>兑换</button>
			</view>
		</view>
		<view class="jiangli-container" style="height: 200rpx;">
			<view class="part1">
				<image src="../../../static/c4.png" style=" height: 180rpx; width: 100rpx; float: left;"></image>
			</view>
			<view class="part2" style="float: ;" >
				<view class="name">
					名称：
				</view>
				<view class="number">
					数量：
				</view>
				<view class="required">
					所需碳积分
				</view>
			</view>
			<view class="button-duihuan" style="float: right;">
				<button>兑换</button>
			</view>
		</view>
		<view class="jiangli-container" style="height: 200rpx;">
			<view class="part1">
				<image src="../../../static/c5.png" style=" height: 180rpx; width: 100rpx; float: left;"></image>
			</view>
			<view class="part2" style="float: ;" >
				<view class="name">
					名称：
				</view>
				<view class="number">
					数量：
				</view>
				<view class="required">
					所需碳积分
				</view>
			</view>
			<view class="button-duihuan" style="float: right;">
				<button>兑换</button>
			</view>
		</view>
		
		
		<view class="float-fab">
			<button style="position: fixed; bottom: 20px; right: 20px;" @click="toPageMyprize">我的奖励</button>
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
			toPageTaolun(){
				uni.switchTab({
					url:'/pages/community/community'
				})
			},
			
			toPageMyprize(){
				uni.navigateTo({
					url:'/pages/community/jiangli/myprize/myprize'
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
	margin-top: 10rpx;
	margin-left: 50rpx;
	margin-right: 50rpx;
	padding: 20rpx;
}
.jiangli-container{
	padding: 30rpx;
	border: 4rpx solid black;
	margin: 10rpx;
}

</style>
