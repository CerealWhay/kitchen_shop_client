import Vue from 'vue';
import Vuex from 'vuex';

import auth from './modules/auth.module';
import loading from './modules/loading.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    loading,
  },
});
