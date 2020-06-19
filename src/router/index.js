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
      props: true,
      name: 'contact',
      component: () =>
          import(/* webpackChunkName: "about" */ '@/views/Contact.vue'),
    },
    {
      path: '/catalog',
      props: true,
      name: 'catalog',
      component: () =>
          import(/* webpackChunkName: "about" */ '@/views/Catalog.vue'),
    },
    {
      path: '/catalog/:slug',
      name: 'product',
      props: true,
      component: () => import('@/views//Product.vue'),
    },
    // {
    //   path: '/:bookId',
    //   props: true,
    //   name: 'book',
    //   component: () =>
    //       import(/* webpackChunkName: "about" */ '@/views/Book.vue'),
    // },
    // {
    //   path: '/:bookId/viewer',
    //   props: true,
    //   name: 'viewer',
    //   component: () =>
    //       import(/* webpackChunkName: "about" */ '@/views/Viewer.vue'),
    // },
  ]
});
export default router

router.beforeEach( (to, from, next) => {
  next()
})
