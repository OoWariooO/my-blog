// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import axios from 'axios'
import store from './store/store.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Routes from './routes'
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.prototype.$http = axios;
Vue.config.productionTip = false
//自定义过滤器
Vue.filter('toupcase',(value)=>{return value.toUpperCase()});
Vue.filter('snippet',(value)=>{return value.slice(0,100)+'...'});
/* eslint-disable no-new */

//创建路由
const router = new VueRouter({
  routes:Routes,
  mode:'history'
})
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
