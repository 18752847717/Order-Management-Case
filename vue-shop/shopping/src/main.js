import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/axios'
import store from './store'
//导入UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)//全局使用ElementUI



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
