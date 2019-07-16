// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

/* var AV = require('leancloud-storage');
var APP_ID = 'a2KJgfG27jM91H5weSdUSqox-gzGzoHsz';
var APP_KEY = 'fU28rPRP3cTSCQEULPfOHdkH';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
}); */

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

