// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import "./assets/style/reset.css"
import "./assets/style/style.css"

import VueRouter from "vue-router"
import App from './App.vue'
import Goods from "./components/goods/Goods.vue"
import Rating from "./components/ratings/Ratings.vue"
import Seller from "./components/seller/Seller.vue"



Vue.config.productionTip = false;
Vue.use(VueRouter);
const router=new VueRouter({
  routes:[
    {path:"/goods",component:Goods},
    {path:"/ratings",component:Rating},
    {path:"/seller",component:Seller},
    {path:"/",redirect:"/goods"}
  ]
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
});
