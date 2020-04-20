import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import axios from 'axios'

axios.defaults.headers.post['Content-Type']='text/plain'
Vue.prototype.$axios = axios
// axios.defaults.baseURL = 'http://49.235.218.165:8080'
axios.interceptors.request.use(config =>{
	console.log(config)
	config.headers.Authorization = window.sessionStorage.getItem('token')
	return config
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  axios
}).$mount('#app')
