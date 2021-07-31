import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import NotFound from '@/views/NotFound.vue';

import ProductList from '@/views/products/AllProductsList.vue';
import ProductPage from '@/views/products/ProductPage.vue';
import CategoryPage from '@/views/products/CategoryList.vue';

import Cart from '@/views/Cart.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/all-products',
    name: 'ProductList',
    component: ProductList,
  },
  {
    path: '/products/:slug',
    name: 'ProductPage',
    component: ProductPage,
  },
  {
    path: '/categories/:slug',
    name: 'CategoryPage',
    component: CategoryPage,
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '*',
    redirect: '/404',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
