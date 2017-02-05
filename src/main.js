// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';
import 'common/stylus/index.styl';
Vue.use(VueRouter);
Vue.use(VueResource);
/* eslint-disable no-new */

let app = Vue.extend(App);

let router = new VueRouter({
  linkActiveClass: 'active',
  routes: [
    {path: '/goods', component: goods},
    {path: '/ratings', component: ratings},
    {path: '/seller', component: seller}
  ]
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(app)
});
// router.push('/goods');
