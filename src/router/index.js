import Vue from 'vue'
import Home from '../views/Home.vue'

import { IonicVueRouter } from '@ionic/vue';

Vue.use(IonicVueRouter);

let router = new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contact',
      name: 'contact',
      component: () =>
          import(/* webpackChunkName: "about" */ '@/views/Contact.vue'),
    },
    {
      path: '/search',
      name: 'search',
      component: () =>
          import(/* webpackChunkName: "about" */ '@/views/Search.vue'),
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: () =>
          import(/* webpackChunkName: "about" */ '@/views/Catalog.vue'),
    },
    {
      path: '/catalog/:slug',
      name: 'product',
      props: true,
      component: () => import('@/views/Product.vue'),
    },
    {
      path: '/news',
      name: 'news',
      component: () =>
          import(/* webpackChunkName: "about" */ '@/views/News.vue'),
    },
    {
      path: '/news/:slug',
      name: 'actuality',
      props: true,
      component: () => import('@/views/Actuality.vue'),
    },
  ]
});
export default router

router.beforeEach( (to, from, next) => {
  next()
})
