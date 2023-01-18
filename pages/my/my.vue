<template>
	<view class="my-container gradient"   style="position: fixed; top: 0; left: 0; right: 0; bottom: 0">
		<image mode="heightFix" src="../../static/HUST碳风格化背景.jpeg" style="position: absolute;top: 0%;height: 100%; z-index: -1;"></image>
		<view class="header_info">
			<image :src="user_avatar_addr" class="avatar_like_item" id="my_avatar"></image>
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
				<view @click="this.my_check_project_participation_record" id="my_nav_bar_project_participation_record" class="my_nav_bar_common_unselected">项目参与记录</view>
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
					<scroll-view id="my_detail_participation_scroll" scroll-y="true" scroll-top=0>
						<view class="my_detail_participation_activity_area" v-for="user_participation in user_participations">
							<text class="my_detail_participation_activity_area_project_name">{{user_participation.project_name}}</text>
							<image class="my_detail_participation_activity_area_image" :src="user_participation.src"></image>
							<text class="my_detail_participation_activity_area_texts" id="my_detail_participation_activity_area_time">时间：{{user_participation.time}}</text>
							<text class="my_detail_participation_activity_area_texts" id="my_detail_participation_activity_area_addr">地点：{{user_participation.addr}}</text>
							<text class="my_detail_participation_activity_area_texts" id="my_detail_participation_activity_area_people">人数：{{user_participation.people}}</text>
						</view>
					</scroll-view>
				</block>
				<block v-else-if="my_nav_bar_select == 'carbon_score_change_record'">
					<view class="my_light_green_rect_carbon_1" id="my_detail_carbon_project_name_label">项目名称</view>
					<view class="my_light_green_rect_carbon_2" id="my_detail_carbon_carbon_change_label">收入/支出</view>
					<scroll-view id="my_detail_carbon_scroll"  scroll-y="true" scroll-top=0>
						<view v-for="user_carbon_project in user_carbon_projects">
							<view class="my_light_green_rect_carbon_1">{{user_carbon_project.project_name}}</view>
							<view class="my_light_green_rect_carbon_2">{{user_carbon_project.change_record}}</view>
						</view>
					</scroll-view>
				</block>
			</view>
		</view>
	</view>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				user_property:[],
				user_avatar_addr :"../../static/initial_avatar.jpg",
				username: "我的昵称",
				student_id: "U2021XXXXX",
				user_carbon_score: 32,
				user_activity_participation_times: 64,
				user_ranking: 16,
				my_nav_bar_select: 'project_participation_record',
				user_ranking: 8,
				all_user_rankings: [1, 2, 3, 4, 5],
				all_user_usernames: ["环保勇士", "绿色骑士", "节约公主", "减排卫士", "能源战士"],
				all_user_carbon_scores: [1024, 512, 256, 128, 64],
				user_participations: [
					{
						project_name: "面向大一学生的节能科普活动",
						src: "../../static/节能活动照片.jpg", 
						time: "2022年3月17日", 
						addr: "华中科技大学紫菘学生活动中心", 
						people: 46,
					},
					
					{
						project_name: "面向大二学生的节能科普活动",
						src: "../../static/节能活动照片.jpg", 
						time: "2022年7月23日", 
						addr: "华中科技大学韵苑5栋门口", 
						people: 78,
					},
					
					{
						project_name: "面向大三学生的节能科普活动",
						src: "../../static/节能活动照片.jpg", 
						time: "2023年1月7日", 
						addr: "华中科技大学爱因斯坦广场", 
						people: 190,
					},
				],
				user_carbon_projects: [
					{
						project_name: "面向大一学生的节能科普活动",
						change_record: 4,
					},
					{
						project_name: "面向大二学生的节能科普活动",
						change_record: -8,
					},
					{
						project_name: "面向大三学生的节能科普活动",
						change_record: -2,
					},
					{
						project_name: "面向大四学生的节能科普活动",
						change_record: -2,
					},
					{
						project_name: "面向武大学生的节能科普活动",
						change_record: -2,
					},
					{
						project_name: "面向地大学生的节能科普活动",
						change_record: -2,
					},
					{
						project_name: "面向中南学生的节能科普活动",
						change_record: -2,
					},
					{
						project_name: "面向华师学生的节能科普活动",
						change_record: -2,
					},
				]
			};
		},
		methods :{
			my_check_ranking () {
				this.my_nav_bar_select = "ranking"
				this.check_change_select_nav_bar()
			},
			
			my_check_project_participation_record () {
				this.my_nav_bar_select = "project_participation_record"
				this.check_change_select_nav_bar()
			},
			
			my_check_carbon_score_change_record () {
				this.my_nav_bar_select = "carbon_score_change_record"
				this.check_change_select_nav_bar()
			},
			
			check_change_select_nav_bar () {
				console.log(this.my_nav_bar_select)
			},
		},
		onLoad() {
			// const db = uniCloud.database();
			// db.collection("person_test").
			// where("name == '张三'").
			// get().
			// then((res)=>{
			// 	console.log(res)
			// 	var all_info = res.result.data
			// 	if (all_info.length == 1)
			// 	{
			// 		this.user_property = all_info[0]
			// 	}
			// 	console.log(this.user_property)
			// }).catch((err)=>{
			// 	console.log(err.code); // 打印错误码
			// 	console.log(err.message); // 打印错误内容
			// })
		}
		
	}
</script>

<style lang="scss">
	.header_info {
		height: 240rpx;
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
		height: 180rpx;
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
		height: 750rpx;
		margin: 0rpx 20rpx 0rpx 20rpx;
		font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
		// border: solid blue;
	}
	
	#my_detail_nav_bar {
		height: 60rpx;
		float: left;
		margin-bottom: 40rpx;
	}
	
	.my_nav_bar_common_selected {
		height: 60rpx;
		float: left;
		font-size: 35rpx;
		text-align: center;
		background-color: rgb(80, 250, 80);
		font-weight: bold;
	}
	
	.my_nav_bar_common_unselected {
		height: 60rpx;
		float: left;
		font-size: 35rpx;
		text-align: center;
		background-color: rgb(80, 250, 80);
	}
	
	#my_nav_bar_ranking {
		width: 110rpx;
		
		
		border-right: solid 3rpx black;
	}
	
	#my_nav_bar_project_participation_record {
		margin-left: 10rpx;
		width: 670rpx;
		border-radius: 18rpx;
	}
	
	#my_nav_bar_carbon_score_change_record {
		width: 300rpx;
		border-left: solid 3rpx black;
		
	}
	
	#my_each_detail_display {
		float: left;
		height: 690rpx;
		width: 700rpx;
		margin-left: 0rpx;
		font-size: 25rpx;
		font-weight: bolder;
		font-family: Copperplate, fantasy;
	}
	
	.my_green_rect {
		height: 60rpx;
		width: 210rpx;
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
		width: 210rpx;
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
		margin-right: 0%;
	}
	
	.my_light_green_rect_long {
		height: 300rpx;
		width: 210rpx;
		background-color: #b7fd5f;
		float: left;
		border-radius: 3rpx;
		text-align: center;
		line-height: 55rpx;
		font-size: 25rpx;
		font-weight: bolder;
		font-family: Copperplate, fantasy;
		margin-right: 30rpx;
		// border: solid azure;
	}
	
	#my_detail_ranking_all_user_ranking_data {
		
	}
	
	#my_detail_ranking_all_user_username_data {
		
	}
	
	#my_detail_ranking_all_user_carbon_score_data {
		margin-right: 0%;
	}
	
	.my_detail_ranking_all_user_list {
		height: 60rpx;
		width: 100%;
		float: left;
	}
	
	#my_detail_participation_scroll {
		height: 600rpx;
		width: 690rpx;
		// margin-top: 60rpx;
		// border: solid red;
	}
	
	.my_detail_participation_activity_area {
		height: 270rpx;
		width: 690rpx;
		float: left;
		margin-bottom: 25rpx;
		margin-left: 4rpx;
		background-color: azure;
		border-radius: 18rpx;
	}
	
	.my_detail_participation_activity_area_project_name {
		float: left;
		width: 100%;
		text-align: center;
		font-size: 30rpx;
	}
	
	.my_detail_participation_activity_area_image {
		height: 180rpx;
		width: 160rpx;
		float: left;
		margin: 20rpx 30rpx 0rpx 20rpx;
	}
	
	.my_detail_participation_activity_area_texts {
		width: 440rpx;
		float: left;
		margin: 5rpx 0rpx 25rpx 0rpx;
	}
	
	#my_detail_participation_activity_area_time {
		margin-top: 20rpx;
	}
	
	#my_detail_participation_activity_area_addr {
		
	}
	
	#my_detail_participation_activity_area_people {
		margin: 5rpx 0rpx 0rpx 0rpx;
	}
	
	.my_light_green_rect_carbon_1 {
		float: left;
		height: 100rpx;
		width: 430rpx;
		line-height: 95rpx;
		background-color: #36e067;
		text-align: center;
		font-weight: normal;
		margin-top: 20rpx;
	}
	
	.my_light_green_rect_carbon_2 {
		float: left;
		height: 100rpx;
		width: 230rpx;
		line-height: 95rpx;
		background-color: #21c433;
		text-align: center;
		font-weight: normal;
		margin-left: 20rpx;
		margin-top: 20rpx;
	}
	
	#my_detail_carbon_project_name_label {
		margin-top: 0rpx;
		font-weight: bold;
	}
	
	#my_detail_carbon_carbon_change_label {
		margin-top: 0rpx;
		font-weight: bold;
	}
	
	#my_detail_carbon_scroll {
		margin-top: 100rpx;
		height: 500rpx;
		// border: solid red;
	}
</style>
