import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import ReturnPolicy from '@/views/ReturnPolicy.vue';
import ContactUs from '@/views/ContactUs.vue';
import NotFound from '@/views/NotFound.vue';

import Journal from '@/views/journal/Journal.vue';
import PostPage from '@/views/journal/PostPage.vue';

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
    path: '/return-policy',
    name: 'ReturnPolicy',
    component: ReturnPolicy,
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: ContactUs,
  },
  {
    path: '/journal',
    name: 'Journal',
    component: Journal,
  },
  {
    path: '/journal/:id',
    name: 'PostPage',
    component: PostPage,
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
