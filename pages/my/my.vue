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
					<view @click="this.my_check_ranking" id="my_nav_bar_ranking" class="my_nav_bar_common_selected">排名</view>
				</block>
				<block v-else>
					<view @click="this.my_check_ranking" id="my_nav_bar_ranking" class="my_nav_bar_common_unselected">排名</view>
				</block>
				<block v-if="my_nav_bar_select == 'project_participation_record'">
					<view @click="this.my_check_project_participation_record" id="my_nav_bar_project_participation_record" class="my_nav_bar_common_selected">项目参与记录</view>
				</block>
				<block v-else>
					<view @click="this.my_check_project_participation_record" id="my_nav_bar_project_participation_record" class="my_nav_bar_common_unselected">项目参与记录</view>
				</block>
				<block v-if="my_nav_bar_select == 'carbon_score_change_record'">
					<view @click="this.my_check_carbon_score_change_record" id="my_nav_bar_carbon_score_change_record" class="my_nav_bar_common_selected">碳积分收支记录</view>
				</block>
				<block v-else>
					<view @click="this.my_check_carbon_score_change_record" id="my_nav_bar_carbon_score_change_record" class="my_nav_bar_common_unselected">碳积分收支记录</view>
				</block>
			</view>
			<view id="my_each_detail_display">
				<block v-if="my_nav_bar_select == 'ranking'">
					<view class="my_green_rect" id="my_detail_ranking_ranking">排名</view>
					<view class="my_green_rect" id="my_detail_ranking_username">昵称</view>
					<view class="my_green_rect" id="my_detail_ranking_carbon_score">碳积分</view>
					<view class="my_light_green_rect_thin" id="my_detail_ranking_user_ranking">{{user_ranking}}</view>
					<view class="my_light_green_rect_thin" id="my_detail_ranking_user_username">{{username}}</view>
					<view class="my_light_green_rect_thin" id="my_detail_ranking_user_carbon_score">{{user_carbon_score}}</view>
					<view class="my_green_rect" id="my_detail_ranking_all_user_ranking_label">总排名</view>
					<view class="my_green_rect" id="my_detail_ranking_all_user_username_label">昵称</view>
					<view class="my_green_rect" id="my_detail_ranking_all_user_carbon_score_label">碳积分</view>
					<view class="my_light_green_rect_long" id="my_detail_ranking_all_user_ranking_data">
						<view class="my_detail_ranking_all_user_list" v-for="ranking in all_user_rankings">{{ranking}}</view>
					</view>
					<view class="my_light_green_rect_long" id="my_detail_ranking_all_user_username_data">
						<view class="my_detail_ranking_all_user_list" v-for="username_ in all_user_usernames">{{username_}}</view>
					</view>
					<view class="my_light_green_rect_long" id="my_detail_ranking_all_user_carbon_score_data">
						<view class="my_detail_ranking_all_user_list" v-for="carbon_score_ in all_user_carbon_scores">{{carbon_score_}}</view>
					</view>
				</block>
				<block v-else-if="my_nav_bar_select == 'project_participation_record'">
					<uni-list v-for="ranking in all_user_rankings">{{ranking}}</uni-list>
				</block>
				<block v-else-if="my_nav_bar_select == 'carbon_score_change_record'">
					carbon_score_change_record
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
				my_nav_bar_select: 'raning',
				user_ranking: 8,
				all_user_rankings: [1, 2, 3, 4, 5],
				all_user_usernames: ["环保勇士", "绿色骑士", "节约公主", "减排卫士", "能源战士"],
				all_user_carbon_scores: [1024, 512, 256, 128, 64],
			};
		},
		methods :{
			my_check_ranking() {
				this.my_nav_bar_select= "ranking"
				this.check_change_select_nav_bar()
			},
			
			check_change_select_nav_bar () {
				console.log(this.my_nav_bar_select)
			},
			
			my_check_project_participation_record () {
				this.my_nav_bar_select= "project_participation_record"
				this.check_change_select_nav_bar()
			},
			
			my_check_carbon_score_change_record () {
				this.my_nav_bar_select= "carbon_score_change_record"
				this.check_change_select_nav_bar()
			}
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
		height: 14%;
		width: 750rpx;
		margin-top: 2%;
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
		margin-bottom: 7%;
	}
	
	.my_nav_bar_common_selected {
		height: 100%;
		float: left;
		font-size: 35rpx;
		text-align: center;
		background-color: rgb(80, 250, 80);
		font-weight: bold;
	}
	
	.my_nav_bar_common_unselected {
		height: 100%;
		float: left;
		font-size: 35rpx;
		text-align: center;
		background-color: rgb(80, 250, 80);
	}
	
	#my_nav_bar_ranking {
		width: 100rpx;
		margin-left: 30rpx;
		border-top-left-radius: 18rpx;
		border-bottom-left-radius: 18rpx;
		border-right: solid 3rpx black;
	}
	
	#my_nav_bar_project_participation_record {
		width: 250rpx;
	}
	
	#my_nav_bar_carbon_score_change_record {
		width: 280rpx;
		border-left: solid 3rpx black;
		border-top-right-radius: 18rpx;
		border-bottom-right-radius: 18rpx;
	}
	
	#my_each_detail_display {
		height: 40%;
		margin-left: 20rpx;
	}
	
	.my_green_rect {
		height: 60rpx;
		width: 200rpx;
		background-color: rgb(54, 224, 103);
		float: left;
		border-radius: 13rpx;
		text-align: center;
		line-height: 55rpx;
		color: white;
		font-size: 25rpx;
		font-weight: bolder;
		font-family: Copperplate, fantasy;
		margin-right: 30rpx;
		margin-bottom: 3%;
	}
	
	#my_detail_ranking_ranking {
		
	}
	
	#my_detail_ranking_username {
		
	}
	
	#my_detail_ranking_carbon_score {
		margin-right: 0%;
	}
	
	.my_light_green_rect_thin {
		height: 60rpx;
		width: 200rpx;
		background-color: #b7fd5f;
		float: left;
		border-radius: 3rpx;
		text-align: center;
		line-height: 55rpx;
		font-size: 25rpx;
		font-weight: bolder;
		font-family: Copperplate, fantasy;
		margin-bottom: 3%;
		margin-right: 30rpx;
	}
	
	#my_detail_ranking_user_ranking {
		
	}
	
	#my_detail_ranking_user_username {
		
	}
	
	#my_detail_ranking_user_carbon_score {
		margin-right: 0%;
	}
	
	#my_detail_ranking_all_user_ranking_label {
		
	}
	
	#my_detail_ranking_all_user_username_label {
		
	}
	
	#my_detail_ranking_all_user_carbon_score_label {
		
	}
	
	.my_light_green_rect_long {
		height: 300rpx;
		width: 200rpx;
		background-color: #b7fd5f;
		float: left;
		border-radius: 3rpx;
		text-align: center;
		line-height: 55rpx;
		font-size: 25rpx;
		font-weight: bolder;
		font-family: Copperplate, fantasy;
		margin-right: 30rpx;
	}
	
	#my_detail_ranking_all_user_ranking_data {
		
	}
	
	#my_detail_ranking_all_user_username_data {
		
	}
	
	#my_detail_ranking_all_user_carbon_score_data {
		
	}
	
	.my_detail_ranking_all_user_list {
		height: 60rpx;
		width: 100%;
		float: left;
	}
</style>
