import Vue from 'vue'
import App from './App'
import Directives from './pages/index.js'

Vue.use(Directives)

Vue.config.productionTip = false

App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
