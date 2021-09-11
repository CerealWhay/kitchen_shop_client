/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import Vue from 'vue';
import {
  GET_POSTS,
  GET_SELECTED_POST,
} from '@/store/actions.type';
import {
  START_LOADING,
  STOP_LOADING,
  SET_POSTS,
  SET_SELECTED_POST,
} from '@/store/mutations.type';
import router from '@/router';

const state = {
  posts: [],
  selected_post: {},
};

const getters = {
};

const actions = {
  [GET_POSTS](context) {
    context.commit(START_LOADING);
    return new Promise((resolve, reject) => {
      Vue.axios.get('api/v1/journal/get_posts/')
        .then((response) => {
          context.commit(SET_POSTS, response.data);
          resolve(response);
          context.commit(STOP_LOADING);
        })
        .catch((error) => {
          reject(error.response.status);
          context.commit(STOP_LOADING);
        });
    });
  },
  [GET_SELECTED_POST](context, data) {
    context.commit(START_LOADING);
    return new Promise((resolve, reject) => {
      Vue.axios.get(`api/v1/journal/get_selected_post?id=${data}`)
        .then((response) => {
          context.commit(SET_SELECTED_POST, response.data);
          resolve(response);
          context.commit(STOP_LOADING);
        })
        .catch((error) => {
          router.push({ name: 'NotFound' });
          reject(error.response.status);
          context.commit(STOP_LOADING);
        });
    });
  },
};

const mutations = {
  [SET_POSTS](state, data) {
    state.posts = data;
  },
  [SET_SELECTED_POST](state, data) {
    state.selected_post = data;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
