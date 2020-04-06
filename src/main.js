// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import './rem'
import 'lib-flexible/flexible'
import axios from 'axios'

import store from './store'
require('./mock'); //引入mock数据，关闭则注释该行

Vue.filter('setWH',(url,arg)=>{
return url.replace(/w\.h/,arg);
})
Vue.prototype.$axios=axios
Vue.config.productionTip = false

import Scroller from '@/components/Scroller'
Vue.component('Scroller',Scroller)

import Loading from '@/components/Loading'
Vue.component('Loading',Loading)


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  el: '#app',
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
