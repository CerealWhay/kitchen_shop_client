/* eslint no-shadow: ["error", { "allow": ["state"] }] */
// import Vue from 'vue';
// import {

// } from '@/store/actions.type';
import {
  CREATE_CART,
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  UPDATE_PRODUCT_QUANTITY_IN_CART,
  UPDATE_INSTRUCTIONS_IN_CART,
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
    if (cart === null) cart = { instructions: '', cart_items: [] };
    saveCart(cart);
    state.cart = getCart();
  },
  [ADD_PRODUCT_TO_CART](state, data) {
    let cart = getCart();
    if (cart === null) cart = { instructions: '', cart_items: [] };
    if (!cart.cart_items.some((y) => JSON.stringify(y) === JSON.stringify(data))) {
      cart.cart_items.push(data);
    }
    cart.cart_items.sort((a, b) => a.price - b.price);
    saveCart(cart);
    state.cart = getCart();
  },
  [UPDATE_PRODUCT_QUANTITY_IN_CART](state, data) {
    const cart = getCart();
    const newProduct = cart.cart_items
      .splice(cart.cart_items.findIndex((el) => el.slug === data.product.slug), 1)[0];
    newProduct.quantity = data.quantity;
    newProduct.total = (data.quantity * newProduct.price).toFixed(2);
    if (!cart.cart_items.some((y) => JSON.stringify(y) === JSON.stringify(newProduct))) {
      cart.cart_items.push(newProduct);
    }
    cart.cart_items.sort((a, b) => a.price - b.price);
    saveCart(cart);
    state.cart = getCart();
  },
  [UPDATE_INSTRUCTIONS_IN_CART](state, data) {
    const cart = getCart();
    cart.instructions = data;
    saveCart(cart);
    state.cart = getCart();
  },
  [REMOVE_PRODUCT_FROM_CART](state, data) {
    const cart = getCart();
    cart.cart_items.splice(cart.cart_items.findIndex((el) => el.slug === data.slug), 1);
    cart.cart_items.sort((a, b) => a.price - b.price);
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
