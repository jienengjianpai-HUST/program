<template>
	<view class="record-container gradient outway_overall_font_adjustment"  style="position: fixed; top: 0; left: 0; right: 0; bottom: 0">
		<view class="outway_header">
<<<<<<< HEAD
			<view class="outway_back" @click="func_back('/pages/record/GoOut')" id="outway_back_id"> {{less_symbol}}返回</view>
=======
			<view class="outway_back" @click="func_back('/pages/record/GoOut')" id="outway_back_id"> &lt;&emsp;返回</view>
>>>>>>> 8d66c7d92a27b545a026f57836c4c4bf84fd84fb
		</view>
		<!-- {{outway}} -->
		<view id="outway_main_button_container" style="height: 560rpx;">
			<view class="outway_diamond_label outway_main_button_color">数据输入</view>
			<view class="outway_light_green_long_rounded_rect outway_main_button_color outdata_float_left" id="outdata_light_rect_test">
				<input class="outdata_input" id="outdata_start_input" placeholder="出发点" v-model="start"/>&ensp;&rarr;&ensp;<input class="outdata_input" id="outdata_destiny_input" placeholder="目的地" v-model="destiny"/>
			</view>
			<view id="outdata_trip_type_button_container">
				<block v-if="outdata_select_trip_type == 'round'">
					<view class="outway_light_green_long_rounded_rect_like_low_width outway_main_button_color outdata_trip_type_selected" id="outdata_round_trip_label" @click="outdata_select_trip_type_func('round')">往返</view>
				</block>
				<block v-else>
					<view class="outway_light_green_long_rounded_rect_like_low_width outway_main_button_color outdata_trip_type_unselected" id="outdata_round_trip_label" @click="outdata_select_trip_type_func('round')">往返</view>
				</block>
				<block v-if="outdata_select_trip_type == 'single'">
					<view class="outway_light_green_long_rounded_rect_like_low_width outway_main_button_color outdata_trip_type_selected" id="outdata_single_trip_label" @click="outdata_select_trip_type_func('single')">单程</view>
				</block>
				<block v-else>
					<view class="outway_light_green_long_rounded_rect_like_low_width outway_main_button_color outdata_trip_type_unselected" id="outdata_single_trip_label" @click="outdata_select_trip_type_func('single')">单程</view>
				</block>
			</view>
			<view class="outway_light_green_long_rounded_rect outway_main_button_color outdata_float_left">
				次数：<input class="outdata_input" id="outdata_destiny_input" placeholder="" v-model="times"/>
			</view>
		</view>
		<view id="outdata_lower_button_container">
			<view class="outway_right_arrow_button outway_main_button_color" @click="outdata_add_trip_func" id="outdata_add_trip_button_id">添加行程</view>
			<view class="outway_right_arrow_button outway_main_button_color" @click="outdata_finish_trip_func" id="outdata_finish_trip_button_id">完成</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				outway: "",
				outdata_select_trip_type: "round",
				start: "",
				destiny: "",
				times: "",
<<<<<<< HEAD
				less_symbol: "< ",
=======
>>>>>>> 8d66c7d92a27b545a026f57836c4c4bf84fd84fb
			}
		},
		methods: {
			func_back: function (url) {
				// url:string
				uni.navigateBack({
					url:url
				})
			},
			
			func_goto: function (url) {
				uni.navigateTo({
					url:url
				})
			},
			
			outdata_select_trip_type_func: function (str) {
				this.outdata_select_trip_type = str
			},
			
			outdata_add_trip_func () {
				uni.navigateTo({
					url:'/pages/record/GoOut/OutWaySelection/OutWaySelection',
				})
			},
			outdata_finish_trip_func () {
				//alert("start:" + this.start + '\n' + "destiny:" + this.destiny + '\n' + "times:" + this.times)
				uni.switchTab({
					url:'/pages/record/record',
				})
			},
			
		},
		onLoad: function (outway_message) {
			this.outway = outway_message.way
		},
	}
</script>

<style lang="scss">
	@import '@/pages/record/GoOut/scss-s/outway_common.scss';
	
	#outdata_light_rect_test {
		// border: solid red;
		line-height: 60rpx;
	}
	
	.outdata_input {
		height: 60rpx;
		width: 30%;
		border-bottom: solid 1rpx grey;
		display: inline-flex;
	}
	
	.outdata_float_left {
		// float: left;
	}
	
	#outdata_start_input {
		
	}
	
	#outdata_destiny_input {
		
	}
	
	#outdata_trip_type_button_container {
		height: 80rpx;
		width: 100%;
		display: flex;
		margin-bottom: 50rpx;
	}
	
	.outway_light_green_long_rounded_rect_like_low_width {
		height: 80rpx;
		width: 16%;
		border-radius: 18rpx;
		text-align: center;
		line-height: 75rpx;
		// border: solid;
	}
	
	.outdata_trip_type_selected {
		font-weight: bolder;
	}
	
	.outdata_trip_type_unselected {
		font-weight: normal;
	}
	
	#outdata_round_trip_label {
		margin: 0rpx 0% 0rpx 26%;
	}
	
	#outdata_single_trip_label {
		margin: 0rpx 22% 0rpx 16%;
	}
	
	#outdata_lower_button_container {
		margin-left: 40%;
	}
	
	#outdata_add_trip_button_id {
		width: 280rpx;
		margin-bottom: 30rpx;
	}
	
	#outdata_finish_trip_button_id {
		width: 280rpx;
	}
</style>
