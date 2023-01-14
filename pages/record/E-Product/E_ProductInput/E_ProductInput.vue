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
				手机使用时长
			</view>
			<view id="epro_time_input_container">
				<view class="outway_light_green_long_rounded_rect_like_low_width outway_main_button_color">
					<input v-model="hour" class="outdata_input"/>
				</view>
				<view style="margin-right: 30rpx; font-weight: normal;font-size: 70rpx;font-family: 'Times New Roman', Times, sans-serif">h</view>
				<view class="outway_light_green_long_rounded_rect_like_low_width outway_main_button_color">
					<input v-model="minute" class="outdata_input"/>
				</view>
				<view style="font-weight: normal;font-size: 70rpx;font-family: 'Times New Roman', Times, sans-serif">min</view>
			</view>
		</view>
		<view id="outdata_lower_button_container">
			<view class="outway_right_arrow_button outway_main_button_color" @click="epro_add_product_func" id="outdata_add_trip_button_id">添加产品</view>
			<view class="outway_right_arrow_button outway_main_button_color" @click="epro_finish_func" id="outdata_finish_trip_button_id">完成</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hour: "",
				minute: "",
<<<<<<< HEAD
				less_symbol:"< ",
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
			
			epro_add_product_func () {
				uni.switchTab({
					url:'/pages/record/record'
				})
			},
			
			epro_finish_func () {
				// alert("1:" + this.hour + '\n' + "2:" + this.minute)
				uni.switchTab({
					url:'/pages/record/record'
				})
			}
		}
	}
</script>

<style lang="scss">
	@import '@/pages/record/GoOut/scss-s/outway_common.scss';
	
	#outdata_light_rect_test {
		// border: solid red;
		line-height: 75rpx;
	}
	
	.outdata_input {
		height: 60rpx;
		width: 100rpx;
		border-bottom: solid 6rpx grey;
		display: inline-flex;
	}
	
	.outdata_float_left {
		// float: left;
	}
	
	#outdata_start_input {
		
	}
	
	#outdata_destiny_input {
		
	}
	
	#epro_time_input_container {
		height: 80rpx;
		width: 710rpx;
		display: flex;
		margin-bottom: 50rpx;
		margin-left: 70rpx;
	}
	
	.outway_light_green_long_rounded_rect_like_low_width {
		height: 80rpx;
		width: 200rpx;
		border-radius: 18rpx;
		text-align: center;
		line-height: 75rpx;
		// border: solid;
		margin-right: 30rpx;
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
