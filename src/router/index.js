import Vue from 'vue';
import VueRouter from 'vue-router';
// eslint-disable-next-line import/no-cycle
import {
  isAuthenticated,
  isNotAuthenticated,
} from '@/router/guards';

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import NotFound from '@/views/NotFound.vue';

import Auth from '@/views/user/Auth.vue';
import Register from '@/views/user/Register.vue';
import Profile from '@/views/user/Profile.vue';

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
    path: '/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: isAuthenticated,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    beforeEnter: isAuthenticated,
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    beforeEnter: isNotAuthenticated,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter: isNotAuthenticated,
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
