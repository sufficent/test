<template>
	<view class="bottom">
		<view class="bottomBtn">
			<button type="default"  @click="btnClick">{{buttonText}}</button>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				aaa:'loading'
			}
		},
		props:{
			buttonText:''
		},
		methods:{
			btnClick(){
				this.$emit('openLoading',this.aaa)
				console.log('点击了按钮~')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.bottom{
		// background-color: #FFFFFF;
		position: fixed;
		bottom: 5%;
		left: 0;
		right: 0;
		z-index: 10;
		padding-bottom: 0;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
		.bottomBtn{
			display: flex;
			justify-content: center;
			align-items: center;
			
			button{
				width: 90%;
				background-color:$uni-color-primary;
				color: $uni-bg-color;
				padding: 10rpx 0;
				border-radius: 10rpx;
				box-shadow: 4px 4px 10px #aaaaaa;
			}
			button:active{
				color: $uni-color-primary;
				background-color:$uni-bg-color;
			}
		}
	}
</style>
