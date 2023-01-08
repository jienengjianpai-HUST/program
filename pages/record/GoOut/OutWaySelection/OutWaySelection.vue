<template>
	<view class="my-container gradient outway_overall_font_adjustment"  style="position: fixed; top: 0; left: 0; right: 0; bottom: 0">
		<view class="outway_header">
			<view class="outway_back" @click="func_back('/pages/record/record')"> &lt;&emsp;返回</view>
		</view>
		<view id="outway_main_button_container">
			<view class="outway_diamond_label">出行方式登记</view>
			<block v-if="selected_way == 'walking'">
				<view class="outway_light_green_long_rounded_rect_selected" @click="outway_select_way('walking')">步行</view>
			</block>
			<block v-else>
				<view class="outway_light_green_long_rounded_rect_unselected" @click="outway_select_way('walking')">步行</view>
			</block>
			<block v-if="selected_way == 'bicycle'">
				<view class="outway_light_green_long_rounded_rect_selected" @click="outway_select_way('bicycle')">自行车</view>
			</block>
			<block v-else>
				<view class="outway_light_green_long_rounded_rect_unselected" @click="outway_select_way('bicycle')">自行车</view>
			</block>
			<block v-if="selected_way == 'EV'">
				<view class="outway_light_green_long_rounded_rect_selected" @click="outway_select_way('EV')">电动车</view>
			</block>
			<block v-else>
				<view class="outway_light_green_long_rounded_rect_unselected" @click="outway_select_way('EV')">电动车</view>
			</block>
			<block v-if="selected_way == 'schoolbus'">
				<view class="outway_light_green_long_rounded_rect_selected" @click="outway_select_way('schoolbus')">校车</view>
			</block>
			<block v-else>
				<view class="outway_light_green_long_rounded_rect_unselected" @click="outway_select_way('schoolbus')">校车</view>
			</block>
		</view>
		<view id="outway_right_arrow_button_container">
			<view class="outway_right_arrow_button" @click="outway_func_goto_with_fix_url" id="outway_right_arrow_button_to_data_input">下一步</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				selected_way: "",
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
			
			outway_func_goto_with_fix_url () {
				uni.navigateTo({
					url:'pages/record/GoOut/OutDataInput/OutDataInput?way=' + this.selected_way
				})
			},
			
			outway_select_way (way_selected) {
				this.selected_way = way_selected
			},
		}
	}
</script>

<style lang="scss">
	
	.outway_overall_font_adjustment {
		font-family: Copperplate, fantasy;
		font-size: 40rpx;
		font-weight: bold;
	}
	
	.outway_header {
		height: 200rpx;
	}
	
	.outway_back {
		float: left;
		margin: 60rpx 0rpx 0rpx 60rpx;
		height: 50rpx;
		width: 150rpx;
		backcolor: transparent;
		// border: solid;
	}
	
	#outway_main_button_container {
		
	}
	
	.outway_diamond_label {
		
	}
	
	.outway_light_green_long_rounded_rect_selected {
		
	}
	
	.outway_light_green_long_rounded_rect_unselected {
		
	}
	
	#outway_right_arrow_button_container {
		
	}
	
	.outway_right_arrow_button {
		
	}
	
	#outway_right_arrow_button_to_data_input {
		
	}
</style>
