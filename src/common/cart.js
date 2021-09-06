const PRODUCTS_KEY = 'cart';

export const saveCart = (data) => {
  window.localStorage.setItem(PRODUCTS_KEY, JSON.stringify(data));
};

export const getCart = () => {
  const session = window.localStorage.getItem(PRODUCTS_KEY);
  if (session) {
    return JSON.parse(session);
  }
  return null;
};

export const destroyCart = () => {
  window.localStorage.removeItem(PRODUCTS_KEY);
};

export default {
  saveCart, getCart, destroyCart,
};
