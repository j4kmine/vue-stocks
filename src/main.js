// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResouce from 'vue-resource'
import {routes} from './routes'
import store from './store/store'
Vue.use(VueRouter)
Vue.use(VueResouce)
Vue.http.options.root = 'https://node-b7273.firebaseio.com/'
Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString()
})
const router = new VueRouter({

  mode: 'history',
  routes: routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router,
  store,
  template: '<App/>'
})
