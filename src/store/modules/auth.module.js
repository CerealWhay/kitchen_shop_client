/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import {
  LOGIN,
  LOGOUT,
  REGISTER,
  GET_ADDRESS,
  CHANGE_ADDRESS,
  CHANGE_PERSONAL_DATA,
} from '@/store/actions.type';
import Vue from 'vue';
import {
  PURGE_AUTH,
  SET_ACCOUNT,
  SET_TOKEN,
  SET_ERROR,
  START_LOADING,
  STOP_LOADING,
  SET_ADDRESS,
} from '@/store/mutations.type';
import {
  destroySession,
  saveToken,
  getToken,
  saveSession,
  setHeader,
  getSession,
} from '@/common/session';
import { unpackForRequest } from '@/common/register';

const state = {
  isAuthenticated: !!getToken(),
  token: getToken(),
  account: getSession(),
  address: {},
};

const getters = {
  isAuthenticated(state) {
    return state.isAuthenticated;
  },
};

const actions = {
  [LOGIN](context, credentials) {
    context.commit(START_LOADING);
    return new Promise((resolve, reject) => {
      Vue.axios.post('api/v1/users/auth/base/login/', credentials)
        .then((response) => {
          context.commit(SET_ACCOUNT, response.data);
          context.commit(SET_TOKEN, response.data);
          resolve(response);
          context.commit(STOP_LOADING);
        })
        .catch((error) => {
          context.commit(SET_ERROR, error.response);
          reject(error.response.status);
          context.commit(STOP_LOADING);
        });
    });
  },
  [REGISTER](context, data) {
    context.commit(START_LOADING);
    const request = unpackForRequest(data);
    return new Promise((resolve, reject) => {
      Vue.axios.post('api/v1/users/auth/base/register/', request)
        .then(() => {
          resolve();
          context.commit(STOP_LOADING);
        })
        .catch((error) => {
          reject(error);
          context.commit(STOP_LOADING);
        });
    });
  },
  [LOGOUT](context) {
    return new Promise((resolve, reject) => {
      Vue.axios.post('api/v1/users/auth/base/logout/')
        .then(() => {
          resolve();
          context.commit(PURGE_AUTH);
        })
        .catch((error) => {
          context.commit(PURGE_AUTH);
          reject(error);
        });
    });
  },
  [CHANGE_ADDRESS](context, data) {
    setHeader();
    return new Promise((resolve, reject) => {
      Vue.axios.post('api/v1/users/user_data/set_address/', data)
        .then(() => {
          resolve();
          context.commit(STOP_LOADING);
        })
        .catch((error) => {
          reject(error);
          context.commit(STOP_LOADING);
        });
    });
  },
  [GET_ADDRESS](context) {
    setHeader();
    return new Promise((resolve, reject) => {
      Vue.axios.get('api/v1/users/user_data/get_address/')
        .then((response) => {
          context.commit(SET_ADDRESS, response.data);
          resolve();
          context.commit(STOP_LOADING);
        })
        .catch((error) => {
          reject(error);
          context.commit(STOP_LOADING);
        });
    });
  },
  [CHANGE_PERSONAL_DATA](context, data) {
    setHeader();
    return new Promise((resolve, reject) => {
      Vue.axios.post('api/v1/users/user_data/change_personal_data/', data)
        .then((response) => {
          context.commit(SET_ACCOUNT, response.data);
          resolve();
          context.commit(STOP_LOADING);
        })
        .catch((error) => {
          reject(error);
          context.commit(STOP_LOADING);
        });
    });
  },
};

const mutations = {
  [SET_ACCOUNT](state, data) {
    saveSession(data.user);
    state.account = getSession();
  },
  [SET_TOKEN](state, data) {
    state.isAuthenticated = true;
    state.wrongCredentials = false;
    saveToken(data.token);
    state.token = getToken();
    setHeader();
  },
  [SET_ERROR](state, response) {
    if (response.status === 401) {
      state.isAuthenticated = false;
      state.account = {};
    }
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false;
    state.wrongCredentials = false;
    state.address = {};
    destroySession();
    state.account = getSession();
    state.token = getToken();
  },
  [SET_ADDRESS](state, data) {
    state.address = data;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
