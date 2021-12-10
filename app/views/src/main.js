import Vue from 'vue'
import App from './App.vue'
import store from './store/Store'
import Axios from 'axios'
import VueRouter from 'vue-router'
import router from './route/routes'
import i18n from './locals/Translations'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
// import 'vue-material/dist/theme/default-dark.css'

Vue.use(VueMaterial)
Vue.component('v-select', vSelect)
Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}
Vue.config.productionTip = false
Vue.use(VueRouter)
new Vue({
  render: h => h(App),router,store:store,i18n
}).$mount('#app')
