/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import { START_LOADING, STOP_LOADING } from '@/store/mutations.type';

const state = {
  loadingActive: false,
};

const actions = {};

const mutations = {
  [START_LOADING](state) {
    state.loadingActive = true;
  },
  [STOP_LOADING](state) {
    state.loadingActive = false;
  },
};

export default { state, actions, mutations };
