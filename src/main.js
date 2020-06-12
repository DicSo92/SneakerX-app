import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Ionic from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css';
Vue.use(Ionic);


let bus = new Vue
Vue.prototype.$bus = bus


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
