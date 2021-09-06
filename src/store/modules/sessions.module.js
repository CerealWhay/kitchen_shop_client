/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import Vue from 'vue';
import {
  CHECK_OR_CREATE_SESSION,
  CERATE_CUSTOMER,
} from '@/store/actions.type';
import {
  START_LOADING,
  STOP_LOADING,
} from '@/store/mutations.type';

const state = {
};

const getters = {
};

const actions = {
  [CHECK_OR_CREATE_SESSION](context) {
    context.commit(START_LOADING);
    return new Promise((resolve, reject) => {
      Vue.axios.get('api/v1/users/session/check_or_create_session/', { withCredentials: true })
        .then((response) => {
          resolve(response);
          context.commit(STOP_LOADING);
        })
        .catch((error) => {
          reject(error.response.status);
          context.commit(STOP_LOADING);
        });
    });
  },
  [CERATE_CUSTOMER](context, data) {
    context.commit(START_LOADING);
    return new Promise((resolve, reject) => {
      Vue.axios.post('api/v1/users/session/create_customer/', data, { withCredentials: true })
        .then((response) => {
          resolve(response);
          context.commit(STOP_LOADING);
        })
        .catch((error) => {
          reject(error.response.status);
          context.commit(STOP_LOADING);
        });
    });
  },
};

const mutations = {
};

export default {
  state,
  actions,
  mutations,
  getters,
};
