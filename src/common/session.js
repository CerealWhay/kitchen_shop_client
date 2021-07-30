import Vue from 'vue';

const TOKEN_KEY = 'savedtoken';
const ACCOUNT_KEY = 'savedaccount';

export const saveSession = (data) => {
  window.localStorage.setItem(ACCOUNT_KEY, JSON.stringify(data));
};

export const getSession = () => {
  const session = window.localStorage.getItem(ACCOUNT_KEY);
  if (session) {
    return JSON.parse(session);
  }
  return null;
};

export const saveToken = (data) => {
  window.localStorage.setItem(TOKEN_KEY, JSON.stringify(data));
};

export const getToken = () => {
  const session = JSON.parse(window.localStorage.getItem(TOKEN_KEY));
  if (session) {
    return session;
  }
  return null;
};

export const destroySession = () => {
  window.localStorage.removeItem(TOKEN_KEY);
  window.localStorage.removeItem(ACCOUNT_KEY);
  Vue.axios.defaults.headers.common.Authorization = '';
};

export const setHeader = () => {
  Vue.axios.defaults.headers.common.Authorization = `Token ${getToken()}`;
};

export default {
  saveSession,
  saveToken,
  getToken,
  getSession,
  destroySession,
  setHeader,
};
