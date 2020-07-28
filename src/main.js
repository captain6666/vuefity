import Vue from 'vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Axios from 'axios'
import App from './App.vue'


Vue.config.productionTip = false
Vue.prototype.$axios=Axios

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
