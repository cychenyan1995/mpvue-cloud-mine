import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

// 云开发 初始化
wx.cloud.init({
    env: 'cy-cloud-w4is3',
    traceUser: true
})
const app = new Vue(App)
app.$mount()