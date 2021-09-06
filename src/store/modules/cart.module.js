/* eslint no-shadow: ["error", { "allow": ["state"] }] */
// import Vue from 'vue';
// import {

// } from '@/store/actions.type';
import {
  CREATE_CART,
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  UPDATE_PRODUCT_IN_CART,
} from '@/store/mutations.type';
import {
  saveCart,
  getCart,
  // destroyCart,
} from '@/common/cart';

const state = {
  cart: getCart(),
};

const getters = {
};

const actions = {

};

const mutations = {
  [CREATE_CART](state) {
    let cart = getCart();
    if (cart === null) cart = [];
    saveCart(cart);
    state.cart = getCart();
  },
  [ADD_PRODUCT_TO_CART](state, data) {
    let cart = getCart();
    if (cart === null) cart = [];
    if (!cart.some((y) => JSON.stringify(y) === JSON.stringify(data))) cart.push(data);
    cart.sort((a, b) => a.price - b.price);
    saveCart(cart);
    state.cart = getCart();
  },
  [UPDATE_PRODUCT_IN_CART](state, data) {
    const cart = getCart();
    const newProduct = cart.splice(cart.findIndex((el) => el.slug === data.product.slug), 1)[0];
    newProduct.quantity = data.quantity;
    newProduct.total = (data.quantity * newProduct.price).toFixed(2);
    if (!cart.some((y) => JSON.stringify(y) === JSON.stringify(newProduct))) cart.push(newProduct);
    cart.sort((a, b) => a.price - b.price);
    saveCart(cart);
    state.cart = getCart();
  },
  [REMOVE_PRODUCT_FROM_CART](state, data) {
    const cart = getCart();
    cart.splice(cart.findIndex((el) => el.slug === data.slug), 1);
    cart.sort((a, b) => a.price - b.price);
    saveCart(cart);
    state.cart = getCart();
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
