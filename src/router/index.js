import Vue from 'vue';
import VueRouter from 'vue-router';
import {
  // isAuthenticated,
  isNotAuthenticated,
} from '@/router/guards';
import Home from '../views/Home.vue';
import Auth from '../views/Auth.vue';
import Register from '../views/Register.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
