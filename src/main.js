import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import vuetify from '@/plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = process.env.VUE_APP_BACKEND_DOMAIN;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
