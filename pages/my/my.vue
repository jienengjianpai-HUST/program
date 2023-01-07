<template>
	<view class="my-container gradient"   style="position: fixed; top: 0; left: 0; right: 0; bottom: 0">
		<view class="header_info">
			<image src="../../static/initial_avatar.jpg" class="avatar_like_item" id="my_avatar"></image>
			<view id="my_name_and_id">
				<view id="my_username">
					<text>{{username}}</text>
				</view>
				<view id="my_student_id">
					<text>学号：{{student_id}}</text>
				</view>
			</view>
		</view>
		<view class="my_data_always_display">
			<view id="my_carbon_score">
				<view style="font-size: 45rpx;margin-bottom: 8%;">{{user_carbon_score}}</view>
				<view style="font-size: 30rpx;">碳积分</view>
			</view>
			<view id="my_activity_participation_times">
				<view style="font-size: 45rpx;margin-bottom: 8%;">{{user_activity_participation_times}}</view>
				<view style="font-size: 30rpx;">活动参与次数</view>
			</view>
			<view id="my_user_ranking" @click="this.my_check_ranking">
				<view style="font-size: 45rpx;margin-bottom: 8%;">{{user_ranking}}</view>
				<view style="font-size: 30rpx;">个人排名</view>
			</view>
		</view>
		<view id="my_detail_display">
			<view id="my_detail_nav_bar">
				<block v-if="my_nav_bar_select == 'ranking'">
					<view @click="this.my_check_ranking" id="my_nav_bar_ranking_selected">排名</view>
				</block>
				<block v-else>
					<view @click="this.my_check_ranking" id="my_nav_bar_ranking_unselected">排名</view>
				</block>
			</view>
		</view>
	</view>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				username: "我的昵称",
				student_id: "U2021XXXXX",
				user_carbon_score: 32,
				user_activity_participation_times: 64,
				user_ranking: 16,
				my_nav_bar_select: 'raning'
			};
		},
		methods :{
			my_check_ranking() {
				my_nav_bar_select= "ranking"
				this.check_change_select_nav_bar()
			},
			
			check_change_select_nav_bar () {
				console.log(this.my_nav_bar_select == 'ranking')
			},
		},
		
	}
</script>

<style lang="scss">
	.header_info {
		height: 18%;
		margin-top: 80rpx;
		margin-left: 30rpx;
	}
	
	.avatar_like_item {
		float: left;
		border-radius: 50%;
		height: 200rpx;
		width: 200rpx;
		margin-right: 40rpx;
	}
	
	.my_user_basic_info {
		margin-left: 100rpx;
		float: left;
	}
	
	#my_username {
		height: 100rpx;
		width: 600rpx;
		font-weight: bolder;
		font-size: 60rpx;
		font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
		margin-bottom: 20rpx;
	}
	
	#my_student_id {
		white-space: nowrap;
		height: 80rpx;
		width: 590rpx;
		margin-left: 40rpx;
		font-weight: bolder;
		font-size: 45rpx;
		font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
	}
	
	#my_name_and_id {
		height: 180rpx;
		width: 600rpx;
		margin-left: 20rpx;
		margin-top: 20rpx;
	}
	
	.my_data_always_display {
		height: 13%;
		width: 750rpx;
		margin-top: 8%;
		margin-bottom: 0%;
		margin-left: 30rpx;
		margin-right: 30rpx;
	}
	
	#my_carbon_score {
		width: 230rpx;
		float: left;
		text-align: center;
		font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
	}
	
	#my_activity_participation_times {
		width: 230rpx;
		float: left;
		text-align: center;
		font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
	}
	
	#my_user_ranking {
		width: 230rpx;
		float: left;
		text-align: center;
		font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
	}
	
	#my_detail_display {
		height: 50%;
		margin: 0% 20rpx 1% 20rpx;
		font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
	}
	
	#my_detail_nav_bar {
		height: 9%;
		float: left;
	}
	
	#my_nav_bar_ranking_selected {
		height: 100%;
		width: 100%;
		float: left;
		margin-left: 30rpx;
		font-size: 35rpx;
		font-weight: bold;
		text-align: center;
		background-color: rgb(20, 250, 20);
		border-top-left-radius: 18rpx;
		border-bottom-left-radius: 18rpx;
		border-right: solid 3rpx black;
	}
	
	#my_nav_bar_ranking_unselected {
		height: 100%;
		width: 100%;
		float: left;
		margin-left: 30rpx;
		font-size: 35rpx; 
		text-align: center;
		background-color: rgb(20, 250, 20);
		border-top-left-radius: 18rpx;
		border-bottom-left-radius: 18rpx;
		border-right: solid 3rpx black;
	}
</style>
