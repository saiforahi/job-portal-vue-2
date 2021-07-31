import Vue from 'vue'
import App from './App.vue'
import store from './store/Store'
import Axios from 'axios'
import VueRouter from 'vue-router'
import router from './route/routes'
import i18n from './locals/Translations'
import 'leaflet/dist/leaflet.css'

import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

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
