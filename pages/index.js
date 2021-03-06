import Vue from 'vue'
// 复制
const copy = {
	bind(el, {
		value
	}) {
		el.$value = value
		el.handler = () => {
			if (!el.$value) {
				// 值为空的时候，给出提示。可根据项目UI仔细设计
				console.log('无复制内容')
				return
			}
			// 动态创建 textarea 标签
			const textarea = document.createElement('textarea')
			// 将该 textarea 设为 readonly 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域
			textarea.readOnly = 'readonly'
			textarea.style.position = 'absolute'
			textarea.style.left = '-9999px'
			// 将要 copy 的值赋给 textarea 标签的 value 属性
			textarea.value = el.$value
			// 将 textarea 插入到 body 中
			document.body.appendChild(textarea)
			// 选中值并复制
			textarea.select()
			const result = document.execCommand('Copy')
			if (result) {
				console.log('复制成功') // 可根据项目UI仔细设计
			}
			document.body.removeChild(textarea)
		}
		// 绑定点击事件，就是所谓的一键 copy 啦
		el.addEventListener('click', el.handler)
	},
	// 当传进来的值更新的时候触发
	componentUpdated(el, {
		value
	}) {
		el.$value = value
	},
	// 指令与元素解绑的时候，移除事件绑定
	unbind(el) {
		el.removeEventListener('click', el.handler)
	},
}
// 长按
const longpress = {
	bind: function(el, binding, vNode) {
		if (typeof binding.value !== 'function') {
			throw 'callback must be a function'
		}
		// 定义变量
		let pressTimer = null
		// 创建计时器（ 2秒后执行函数 ）
		let start = (e) => {
			if (e.type === 'click' && e.button !== 0) {
				return
			}
			if (pressTimer === null) {
				pressTimer = setTimeout(() => {
					handler()
				}, 2000)
			}
		}
		// 取消计时器
		let cancel = (e) => {
			if (pressTimer !== null) {
				clearTimeout(pressTimer)
				pressTimer = null
			}
		}
		// 运行函数
		const handler = (e) => {
			binding.value(e)
		}
		// 添加事件监听器
		el.addEventListener('mousedown', start)
		el.addEventListener('touchstart', start)
		// 取消计时器
		el.addEventListener('click', cancel)
		el.addEventListener('mouseout', cancel)
		el.addEventListener('touchend', cancel)
		el.addEventListener('touchcancel', cancel)
	},
	// 当传进来的值更新的时候触发
	componentUpdated(el, {
		value
	}) {
		el.$value = value
	},
	// 指令与元素解绑的时候，移除事件绑定
	unbind(el) {
		el.removeEventListener('click', el.handler)
	},
}
//水印
function addWaterMarker(str, parentNode, font, textColor) {
	// 水印文字，父元素，字体，文字颜色
	var can = document.createElement('canvas')
	parentNode.appendChild(can)
	can.width = 200
	can.height = 150
	can.style.display = 'none'
	var cans = can.getContext('2d')
	cans.rotate((-20 * Math.PI) / 180)
	cans.font = font || '16px Microsoft JhengHei'
	cans.fillStyle = textColor || 'rgba(180, 180, 180, 0.3)'
	cans.textAlign = 'left'
	cans.textBaseline = 'Middle'
	cans.fillText(str, can.width / 10, can.height / 2)
	parentNode.style.backgroundImage = 'url(' + can.toDataURL('image/png') + ')'
}
// 防抖
const debounce = {
	inserted: function(el, binding) {
		let timer
		el.addEventListener('click', () => {
			if (timer) {
				clearTimeout(timer)
			}
			timer = setTimeout(() => {
				binding.value()
			}, 1000)
		})
	},
}


const waterMarker = {
	bind: function(el, binding) {
		addWaterMarker(binding.value.text, el, binding.value.font, binding.value.textColor)
	},
}
// 自定义指令
const directives = {
	copy,
	waterMarker,
	longpress,
	debounce
}
console.log(directives)
export default {
	install(Vue) {
		Object.keys(directives).forEach((key) => {
			Vue.directive(key, directives[key])
		})
	}
}
