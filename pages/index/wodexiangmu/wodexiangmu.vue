<template>
	<view class="box font_constrain">
			
		<image src="../../../static/background/07_mohu.png" style="width:100%;height: 100%; z-index: -1;position: fixed;opacity: 0.9;"></image>
		
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
@font-face {
	font-family:Alimama_ShuHeiTi_Bold ;
	font-weight:normal ;
	src: url("/font/Alimama_ShuHeiTi_Bold.ttf") format("truetype");
	}
.font_constrain {
	font-family: Alimama_ShuHeiTi_Bold;
}
.box{
	position: fixed;
	z-index: 0;
	width: 100%;
	height: 100%;
		
}
</style>
