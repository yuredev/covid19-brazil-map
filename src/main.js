import Vue from 'vue'
import App from './App.vue'
import { LMap, LTileLayer, LMarker , LCircle} from 'vue2-leaflet';
import "leaflet/dist/leaflet.css"

import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});


Vue.config.productionTip = false

Vue.component('LMap', LMap);
Vue.component('LCircle', LCircle);
Vue.component('LTileLayer', LTileLayer);
Vue.component('LMarker', LMarker);

new Vue({
  render: h => h(App),
}).$mount('#app');
