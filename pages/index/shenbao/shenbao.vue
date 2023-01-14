<template>
	<view class="container" >
		<uni-section title="申报人姓名"  type="line" padding="1rpx" >
					<uni-easyinput class="uni-mt-5" trim="all" v-model="value" placeholder="请输入内容" @input="input"></uni-easyinput>
		</uni-section>
		<uni-section title="申报人学号"  type="line" padding="1rpx" >
					<uni-easyinput class="uni-mt-5" trim="all" v-model="value" placeholder="请输入内容" @input="input"></uni-easyinput>
		</uni-section>
		<uni-section title="活动名称"  type="line" padding="1rpx" >
					<uni-easyinput class="uni-mt-5" trim="all" v-model="value" placeholder="请输入内容" @input="input"></uni-easyinput>
		</uni-section>
		<uni-section title="活动所需人数"  type="line" padding="1rpx" >
					<uni-easyinput class="uni-mt-5" trim="all" v-model="value" placeholder="请输入内容" @input="input"></uni-easyinput>
		</uni-section>
		<uni-section title="活动内容"  type="line" padding="30rpx" class="container11" >
					<uni-easyinput class="uni-mt-5" trim="all" v-model="value" placeholder="请输入内容" type="textarea" @input="input"></uni-easyinput>
		</uni-section>
		<view class="uni-flex" style="height: 300rpx;  ">
				<button  type="default" >提交</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.container11{
	
}
</style>
