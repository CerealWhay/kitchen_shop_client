import Vue from 'vue';
import Vuex from 'vuex';

import loading from './modules/loading.module';
import products from './modules/products.module';
import sessions from './modules/sessions.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    loading,
    products,
    sessions,
  },
});
