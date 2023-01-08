<template>
	<view class="record-container gradient"  style="position: fixed; top: 0; left: 0; right: 0; bottom: 0">
		{{outway}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				outway: "",
			}
		},
		methods: {
			onload: function (outway_message) {
				this.outway = outway_message.way
			},
		}
	}
</script>

<style lang="scss">

</style>
