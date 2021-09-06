const PRODUCTS_KEY = 'savedproducts';

export const saveProducts = (data) => {
  window.localStorage.setItem(PRODUCTS_KEY, JSON.stringify(data));
};

export const getProducts = () => {
  const session = window.localStorage.getItem(PRODUCTS_KEY);
  if (session) {
    return JSON.parse(session);
  }
  return null;
};

export const destroyProducts = () => {
  window.localStorage.removeItem(PRODUCTS_KEY);
};

export default {
  saveProducts, getProducts, destroyProducts,
};
