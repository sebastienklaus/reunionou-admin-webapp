import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store/index.js';

Vue.use(VueRouter);

function authGuard(to, from, next) {
  if (store.state.user) {
      next(); // allow to enter route
  } else {
      next("/login"); // go to '/login';
  }
}

function isAuthGuard(to, from, next) {
  if (!store.state.user) {
      next(); // allow to enter route
  } else {
      next("/"); // go to '/login';
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    beforeEnter: authGuard
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    beforeEnter: isAuthGuard
  },
  {
    path: '/events',
    name: 'events',
    component: () => import('../views/Events.vue'),
    beforeEnter: authGuard
  },
]

const router = new VueRouter({
  routes
})

export default router
