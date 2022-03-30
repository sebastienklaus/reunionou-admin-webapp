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
    name: 'Events',
    component: () => import('../views/Events.vue'),
    beforeEnter: authGuard
  },
  {
    path: '/events/:id',
    name: 'Event',
    component: () => import('../views/EventPage.vue'),
    beforeEnter: authGuard
  },
  {
    path: '/members',
    name: 'Members',
    component: () => import('../views/Members.vue'),
    beforeEnter: authGuard
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
