/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import Vue from 'vue';
import {
  GET_PRODUCTS,
  GET_CATEGORIES,
  GET_SELECTED_PRODUCT,
  SEARCH_PRODUCTS,
} from '@/store/actions.type';
import {
  START_LOADING,
  STOP_LOADING,
  SET_PRODUCTS,
  SET_CATEGORIES,
  SET_SELECTED_PRODUCT,
  SET_SEARCH_RESULTS,
} from '@/store/mutations.type';
import router from '@/router';
// import {
//   saveProducts, getProducts,
// } from '@/common/products';

const state = {
  products: [],
  categories: [],
  selected_product: {},
  search_results: {},
};

const getters = {
  getProductBySlug: (state) => (slug) => state.products.find((product) => product.slug === slug),
};

const actions = {
  [GET_PRODUCTS](context, data) {
    context.commit(START_LOADING);
    return new Promise((resolve, reject) => {
      Vue.axios.post('api/v1/products/products/get_products/', data)
        .then((response) => {
          context.commit(SET_PRODUCTS, response.data);
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
  [SEARCH_PRODUCTS](context, data) {
    context.commit(START_LOADING);
    return new Promise((resolve, reject) => {
      Vue.axios.post('api/v1/products/products/search_products/', data)
        .then((response) => {
          context.commit(SET_SEARCH_RESULTS, response.data);
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
  [GET_SELECTED_PRODUCT](context, data) {
    context.commit(START_LOADING);
    return new Promise((resolve, reject) => {
      Vue.axios.post('api/v1/products/products/get_selected_product/', data)
        .then((response) => {
          context.commit(SET_SELECTED_PRODUCT, response.data);
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
  [GET_CATEGORIES](context) {
    context.commit(START_LOADING);
    return new Promise((resolve, reject) => {
      Vue.axios.get('api/v1/products/categories/get_categories/')
        .then((response) => {
          context.commit(SET_CATEGORIES, response.data);
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
  [SET_PRODUCTS](state, data) {
    state.products = data;
    // saveProducts(data);
  },
  [SET_SEARCH_RESULTS](state, data) {
    state.search_results = data;
    // saveProducts(data);
  },
  [SET_SELECTED_PRODUCT](state, data) {
    state.selected_product = data;
    // saveProducts(data);
  },
  [SET_CATEGORIES](state, data) {
    state.categories = data;
    // saveProducts(data);
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
