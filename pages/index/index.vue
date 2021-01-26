<template>

	<view class="wrapper" v-waterMarker="{text:'小小仙山版权所有',textColor:'rgba(180, 180, 180, 0.4)'}">
		<NavBar :navbarText="title"></NavBar>

		<view class="content">
			<view class="box11 shadow"></view>
			<view class="wrap">
				<view class="box box1 shadow1">
					<h3>Shadow 1</h3>
				</view>
				<view class="box box2 shadow2">
					<h3>Shadow 2</h3>
				</view>
				<view class="box box3 shadow3">
					<h3>Shadow 3</h3>
				</view>
				<view class="box box4 shadow4">
					<h3>Shadow 4</h3>
				</view>
				<view class="box box5 shadow5">
					<h3>Shadow 5</h3>
				</view>
				<view class="box box6 shadow6">
					<h3>Shadow 6</h3>
				</view>
				<view class="box box7 shadow7">
					<h3>Shadow 7</h3>
				</view>
				<view class="box box8 shadow8">
					<h3>Shadow 8</h3>
				</view>
			</view>
		</view>

		<!-- <image class="logo" src="/static/logo.png"></image> -->
			<view class="text-area">
			<button type="default" v-copy="copyText">复制</button>
			<button type="default" v-longpress="longpress">长按</button>
			<button type="default" v-debounce="debounceClick">防抖</button>
		</view>
		<view class="text">
			<view class="textInner">
				1565656565656
			</view>
		</view>
		<view class="loading" v-show="isShowLoading"></view>
		<BottomBtn  :buttonText="name" @openLoading="clickBtn"></BottomBtn>

	</view>
</template>

<script>
	import NavBar from '../../components/navbar.vue'
	import BottomBtn from '../../components/bottomBtn.vue'
	export default {
		data() {
			return {
				copyText: 'a copy directives',
				name: '按钮',
				title: '标题',
				isShowLoading: false,
				person: '王安石'
			}
		},
		components: {
			NavBar,
			BottomBtn
		},
		onLoad() {
			var closures = [];
			for (var i = 1; i <= 2; i++) {
			 closures.push(function () { 
					console.log(i); 
				});
			}
			console.log('closures',closures)
			closures[0]();
			closures[1]();
			// this.promise()
			var info = []
			info.push({
				'only_code': this.name
			}, {
				'phone': this.title
			})
			// info.push()
			uni.setStorageSync('info', info)
			console.log(uni.getStorageSync('info', info))
			//判断是移动端还是pc端
			const detectDeviceType = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ?
				"Mobile" : "Desktop";
			console.log(detectDeviceType()); // "Mobile" or "Desktop"
			// 获取当前的url
			const currentURL = () => window.location.href
			console.log(currentURL())
			// 在等待一定时间后调用提供的函数（单位毫秒）
			const delay = (fn, time, ...args) => setTimeout(fn, time, ...args)
			delay(function(text) {
				console.log(text)
			}, 2000, "later")
			//对象析构：从对象或数组中获取或提取值
			const employee = {
				firstName: "Marko",
				lastName: "Polo",
				position: "Software Developer",
				yearHired: 2017
			};
			let {
				firstName,
				lastName,
				position,
				yearHired
			} = employee;
			console.log('firstName', firstName) //Marko
			// Set对象

			const set = new Set(["a", "b", "c", "d", "d", "e"])
			set.add("f")
			console.log(set)
			const numbers = [1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 5];
			console.log(...new Set(numbers))
		},
		onReady() {
			// 创建对象
			// 工厂模式
			function createPerson(name, age, job) {
				var o = new Object();
				o.name = name;
				o.age = age;
				o.job = job;
				return o;
			}
			// 原型模式
			function createPerson() {}
			createPerson.prototype.name = "james"
			createPerson.prototype.age = 9
			createPerson.prototype.job = "student"
			createPerson.prototype.callme = function() {
				console.log('callme')
			}
			var person1 = new createPerson();
			person1.callme()
			console.log(person1)
			console.log(typeof(person1))
			// 闭包
			function a() {
				var n = 0

				function add() {
					n++
					console.log('n', n)
				}
				return add
			}
			var a1 = a()
			a1()
			a1()
			//监听页面滚动
			window.addEventListener('scroll', this.scrollToTop)
			// this.doIt()
		},
		methods: {
			scrollToTop() {
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				console.log(scrollTop)
			},
			longpress() {
				console.log(111111)
			},
			debounceClick() {
				console.log('once')
			},
			
			// 防抖
			debounce(fn, wait) {
			  var timer = null;
			  return function() {
			    var context = this,
			      args = arguments;
			
			    // 如果此时存在定时器的话，则取消之前的定时器重新记时
			    if (timer) {
			      clearTimeout(timer);
			      timer = null;
			    }
			
			    // 设置定时器，使事件间隔指定事件后执行
			    timer = setTimeout(() => {
			      fn.apply(context, args);
			    }, wait);
			  };
			},
			// 函数节流的实现;
			 throttle(fn, delay) {
			  var preTime = Date.now();
			
			  return function() {
			    var context = this,
			      args = arguments,
			      nowTime = Date.now();
			
			    // 如果两次时间间隔超过了指定时间，则执行函数。
			    if (nowTime - preTime >= delay) {
			      preTime = Date.now();
			      return fn.apply(context, args);
			    }
			  };
			},
			clickBtn(info) {
				// 函数防抖的实现
				this.throttle(setTimeout(()=>{console.log('boom')},2000))
				this.isShowLoading = !this.isShowLoading
				// console.log(info)
				// const greet = (name) => `Hello ${name}`;
				// console.log(greet)
				// console.log(`Hello I'm ${this.person} !`)
			},
			promise() {
				//异步函数
				async function test() {
				  return "1"
				}
				// console.log(test()) // -> Promise {<resolved>: "1"}
				var p = new Promise((resolve, reject) => {
					setTimeout(() => {
						console.log(1)
						resolve()
					})
				}).then((res) => {
					setTimeout(() => {
						console.log(2)
					})
				}).then((res) => {
					setTimeout(() => {
						console.log(3)
					})
				}).catch((err) => {
					console.log(err)
				})
			},
			takeLongTime(n){
				return new Promise(resolve=>{
					setTimeout(()=>resolve(n+200),n)
				})
			},
			step1(n) {
			    console.log(`step1 with ${n}`);
			    return this.takeLongTime(n);
			},
			
			step2(n) {
			    console.log(`step2 with ${n}`);
			    return this.takeLongTime(n);
			},
			
			step3(n) {
			    console.log(`step3 with ${n}`);
			    return this.takeLongTime(n);
			},
			async doIt(){
				const time1 = 300;
				const time2 = await this.step1(time1)
				const time3 = await this.step2(time2)
				const result = await this.step3(time3)
				console.log(`result is ${result}`);
			}

		}
	}
</script>

<style lang="scss">
	@mixin rounded-corners() {
		-moz-border-radius: 10rpx;
		-webkit-border-radius: 10rpx;
		border-radius: 10rpx;
	}

	@mixin view-color($normal, $normalBgc) {
		color: $normal;
		background-color: $normalBgc;

	}

	@mixin box-shadow {
		box-shadow: 0 0 10px #eee;
		;
	}

	.content {
		margin-top: 88rpx;
		margin-bottom: 200rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@keyframes loading-360 {
		0% {
			transform: rotate(0deg);
			/*动画起始的时候旋转了0度*/
		}

		100% {
			transform: rotate(360deg);
			/*动画结束的时候旋转了360度*/
		}
	}

	.loading {
		width: 50rpx;
		height: 50rpx;
		display: inline-block;
		border: 5rpx solid #f3f3f3;
		/*设置四周边框大小，并将颜色设置为浅白色*/
		border-top: 3px solid red;
		/*将上边框颜色设置为红色高亮，以便旋转的时候能够看到旋转的效果*/
		border-radius: 50%;
		/*将边框和内容区域都变成圆形*/
		animation: loading-360 0.8s infinite linear;
		/*给圆环添加旋转360度的动画，并且是无限次*/
	}


	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	.text {
		width: 400rpx;
		height: 400rpx;
		@include rounded-corners;
		@include view-color($uni-color-primary, $uni-bg-color-grey);
		@include box-shadow;

		.textInner {
			color: $uni-color-primary;

			:hover {
				color: $uni-color-warning;
			}
		}
	}

	.box11 {
		width: 300px;
		height: 100px;
		background: #ccc;
		border-radius: 10px;
		margin: 10px;
	}

	.shadow {
		position: relative;
		min-width: 656rpx;
		box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.3),
			0px 0px 20px rgba(0, 0, 0, 0.1) inset;
	}

	.shadow::before,
	.shadow::after {
		content: "";
		position: absolute;
		z-index: -1;
	}

	.shadow::before,
	.shadow::after {
		content: "";
		position: absolute;
		z-index: -1;
		bottom: 15px;
		left: 10px;
		width: 50%;
		height: 20%;
	}

	.shadow::before,
	.shadow::after {
		content: "";
		position: absolute;
		z-index: -1;
		bottom: 15px;
		left: 10px;
		width: 50%;
		height: 20%;
		box-shadow: 0 15px 10px rgba(0, 0, 0, 0.7);
		transform: rotate(-3deg);
	}

	.shadow::after {
		right: 10px;
		left: auto;
		transform: rotate(3deg);
	}

	/////////////////////////////////////////////
	body {
		background: #E6EEF6;
	}

	.wrap {
		margin-left: 24rpx;
	}

	.box {
		width: 40%;
		height: 200px;
		float: left;
		background-color: white;
		margin: 25px 15px;
		border-radius: 5px;
	}

	.box h3 {
		font-family: 'Didact Gothic', sans-serif;
		font-weight: normal;
		text-align: center;
		padding-top: 60px;
		color: #fff;
	}

	.box1 {
		background-color: #EBA39E;
	}

	.box2 {
		background-color: #EDE89A;
	}

	.box3 {
		background-color: #9EEBA1;
	}

	.box4 {
		background-color: #9EEBBF;
	}

	.box5 {
		background-color: #9ED9EB;
	}

	.box6 {
		background-color: #9EB3EB;
	}

	.box7 {
		background-color: #DB9EEB;
	}

	.box8 {
		background-color: #C49EEB;
	}

	.shadow1,
	.shadow2,
	.shadow3,
	.shadow4,
	.shadow5,
	.shadow6,
	.shadow7,
	.shadow8 {
		position: relative;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.1) inset;
	}

	/*****************************************************************dashed border
	****************************************************************/
	.shadow1 h3,
	.shadow2 h3,
	.shadow3 h3,
	.shadow4 h3,
	.shadow5 h3,
	.shadow6 h3,
	.shadow7 h3,
	.shadow8 h3 {
		width: 87%;
		height: 260rpx;
		align-items: center;
		margin-left: 6%;
		border: 2px dashed #F7EEEE;
		border-radius: 5px;
	}

	/****************************************************************
	*styling shadows
	****************************************************************/
	.shadow1:before,
	.shadow1:after {
		position: absolute;
		content: "";
		bottom: 12px;
		left: 15px;
		top: 80%;
		width: 45%;
		background: #9B7468;
		z-index: -1;
		-webkit-box-shadow: 0 20px 15px #9B7468;
		-moz-box-shadow: 0 20px 15px #9B7468;
		box-shadow: 0 20px 15px #9B7468;
		-webkit-transform: rotate(-6deg);
		-moz-transform: rotate(-6deg);
		transform: rotate(-6deg);
	}

	.shadow1:after {
		-webkit-transform: rotate(6deg);
		-moz-transform: rotate(6deg);
		transform: rotate(6deg);
		right: 15px;
		left: auto;
	}

	.shadow2:before {
		position: absolute;
		content: "";
		width: 80%;
		top: 140px;
		bottom: 15px;
		left: 30px;
		background-color: #9F8641;
		z-index: -1;
		-webkit-box-shadow: 0 23px 17px 0 #9F8641;
		-moz-box-shadow: 0 23px 17px 0 #9F8641;
		box-shadow: 0 23px 17px 0 #9F8641;
		-webkit-transform: rotate(-4deg);
		-moz-transform: rotate(-4deg);
		transform: rotate(-4deg);
	}

	.shadow3:before,
	.shadow3:after {
		content: "";
		position: absolute;
		bottom: 0;
		top: 2px;
		left: 15px;
		right: 15px;
		z-index: -1;
		border-radius: 100px/30px;
		-webkit-box-shadow: 0 0 30px 2px #479F41;
		-moz-box-shadow: 0 0 30px 2px #479F41;
		box-shadow: 0 0 30px 2px #479F41;
	}

	.shadow4:before,
	.shadow4:after {
		position: absolute;
		content: "";
		top: 14px;
		bottom: 14px;
		left: 0;
		right: 0;
		box-shadow: 0 0 25px 3px #548E7F;
		border-radius: 100px/10px;
		z-index: -1;
	}

	.shadow5:before,
	.shadow5:after {
		position: absolute;
		content: "";
		box-shadow: 0 10px 25px 20px #518C96;
		top: 40px;
		left: 10px;
		bottom: 50px;
		width: 15%;
		z-index: -1;
		-webkit-transform: rotate(-8deg);
		-moz-transform: rotate(-8deg);
		transform: rotate(-8deg);
	}

	.shadow5:after {
		-webkit-transform: rotate(8deg);
		-moz-transform: rotate(8deg);
		transform: rotate(8deg);
		right: 10px;
		left: auto;
	}

	.shadow6:before,
	.shadow6:after {
		position: absolute;
		content: "";
		top: 100px;
		bottom: 5px;
		left: 30px;
		right: 30px;
		z-index: -1;
		box-shadow: 0 0 40px 13px #486685;
		border-radius: 100px/20px;
	}

	.shadow7:before,
	.shadow7:after {
		position: absolute;
		content: "1";
		top: 25px;
		left: 20px;
		bottom: 150px;
		width: 80%;
		z-index: -1;
		-webkit-transform: rotate(-6deg);
		-moz-transform: rotate(-6deg);
		transform: rotate(-6deg);
	}

	.shadow7:before {
		box-shadow: 10px -10px 30px 15px #984D8E;
	}

	.shadow7:after {
		-webkit-transform: rotate(7deg);
		-moz-transform: rotate(7deg);
		transform: rotate(7deg);
		bottom: 25px;
		top: auto;
		box-shadow: 10px 10px 30px 15px #984D8E;
	}

	.shadow8 {
		box-shadow:
			-6px -6px 8px -4px rgba(250, 254, 118, 0.75),
			6px -6px 8px -4px rgba(254, 159, 50, 0.75),
			6px 6px 8px -4px rgba(255, 255, 0, 0.75),
			6px 6px 8px -4px rgba(0, 0, 255, 2.75);
	}
</style>
