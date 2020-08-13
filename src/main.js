import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'

Vue.config.productionTip = false

require('@/assets/style/style_of_res.css')
require('@/assets/style/reset.css')
require('@/assets/style/bootstrap.min.css') // I add this because without that bootstrap css is not woring why I don't know so !

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

