import Vue from 'vue'
import App from './App.vue'
import store from './store/Store'
import Axios from 'axios'
import VueRouter from 'vue-router'
import router from './route/routes'
import i18n from './locals/Translations'
// import 'leaflet/dist/leaflet.css'

// import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'
import $ from 'jquery'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use($)
new Vue({
  render: h => h(App),router,store:store,i18n
}).$mount('#app')
