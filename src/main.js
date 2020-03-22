import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import VueMultianalytics from 'vue-multianalytics'
let gaConfig = {
  appName: 'Test', // Mandatory
  appVersion: '0.1', // Mandatory
  trackingId: 'UA-161604548-1', // Mandatory
  debug: true, // Whether or not display console logs debugs (optional)
  options: {
    'clientId': '35009a79-1a05-49d7-b876-2b884d0f825b',
    'siteSpeedSampleRate': 10
  }
}

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

Vue.use(VueMultianalytics, {
  modules: {
    ga: gaConfig,
  }
})

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')




