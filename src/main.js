import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import FlashMessage from '@smartweb/vue-flash-message';
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import VueLetterAvatar from 'vue-letter-avatar';


Vue.prototype.$api = axios.create({
  baseURL: "http://docketu.iutnc.univ-lorraine.fr:62016/",
});

Vue.prototype.$api.interceptors.request.use(function (config) {
  if (store.state.token) {
      config.headers.Authorization = store.state.token;
  }
  return config;
});

Vue.config.productionTip = false

//FlashMessage component
Vue.use(FlashMessage);

//Leaflet components
Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('l-popup', LPopup);
Vue.component('l-tooltip', LTooltip);

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});


Vue.use(VueLetterAvatar);

Vue.use(require('vue-moment'));

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
