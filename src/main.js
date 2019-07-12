import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import router from './router'
import Mint from 'mint-ui';//mint-ui框架
import 'mint-ui/lib/style.css'
import store from './store/index'
require('./mock.js')

Vue.config.productionTip = false
Vue.use(Mint);
Vue.use(Router)
new Vue({
  Router,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
