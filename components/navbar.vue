<template>
	<view class="navbar">
		<view class="zhanwei"  :style="{ 'height': statusBarHeight + 'px'}"></view>
		<view class="wrapper">
			<view class="content">
				<view class="left" @click="back">
					返回	
				</view>
				<view class="center">
					{{navbarText}}
				</view>
				<view class="right"></view>
			</view>
		</view>
	</view>
</template>

<script>
	let systemInfo = uni.getSystemInfoSync();
	export default{
		data(){
			return{
				statusBarHeight: systemInfo.statusBarHeight,
			}
		},
		props:{
			navbarText:''
		},
		methods:{
			back(){
				uni.navigateBack({
					delta:1
				})
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	@mixin flex {
		display: flex;
	}
	@mixin jc-c {
		display: flex;
		justify-content: center;
	}
	@mixin fd-row {
		display: flex;
		flex-direction: row;
	}
	@mixin fd-col {
		display: flex;
		flex-direction: column;
	}
	.navbar{
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 999;
		@include fd-col;
		.zhanwei{
			width: 100%;
		}
		.wrapper{
			width: 100%;
			@include jc-c;
			background-color:$uni-color-primary;
			.content{
				height: 88rpx;
				width: 94%;
				@include flex;
				justify-content: space-between;
				.left{
					flex: 1;
					@include flex;
					justify-content: flex-start;
					align-items: center;
					color: #FFFFFF;
				}
				.center{
					flex: 1;
					@include jc-c;
					align-items: center;
					color: #FFFFFF;
				}
				.right{
					flex: 1;
				}
			}
		}
	}

</style>
