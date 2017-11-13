<template>
  <div id="app" >
    <my-header class="my-header"></my-header>
    <tabs></tabs>
    <router-view class="router-view"></router-view>

  </div>
</template>

<script>

import Header from "./components/header/Header.vue";
import Tabs from "./components/tabs/Tabs.vue";
import ShopCart from "./components/shopcart/ShopCart.vue";
import axios from "axios";

export default {
  data(){
    return {
      totalCount:null,
      msg2:null
    }
  },
  name: 'app',
  components: {
    myHeader:Header,
    tabs:Tabs,
    ShopCart
  },
  methods:{
    receive2(){
      console.log("aaa");
      this.totalCount=count;
      console.log(this.totalCount);
    }
  }

}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  height:13.34rem;
  position:relative;
  overflow:hidden;

}



  /*响应式*/
html{-webkit-text-size-adjust: none;/*不调整（拉伸）字大小*/
  font-size:100px;/*表示100px=1rem;       625%          62.5%*/}
@media screen and (min-width:320px) {
  html {
    font-size: 42.66px
  }
  body {
    font-size: 11.9448px
  }
}
@media screen and (min-width:360px) {
  html {
    font-size: 48px
  }
  body {
    font-size: 13.44px
  }
}
@media screen and (min-width:375px) {
  html {
    font-size: 50px
  }
  body {
    font-size: 14px
  }
}
@media screen and (min-width:384px) {
  html {
    font-size: 51.2px
  }
  body {
    font-size: 14.336px
  }
}
@media screen and (min-width:400px) {
  html {
    font-size: 53.34px
  }
  body {
    font-size: 14.9352px
  }
}
@media screen and (min-width:414px) {
  html {
    font-size: 55.2px
  }
  body {
    font-size: 15.456px
  }
}
@media screen and (min-width:424px) {
  html {
    font-size: 56.54px
  }
  body {
    font-size: 15.8312px
  }
}
@media screen and (min-width:480px) {
  html {
    font-size: 64px
  }
  body {
    font-size: 17.92px
  }
}
@media screen and (min-width:540px) {
  html {
    font-size: 72px
  }
  body {
    font-size: 20.16px
  }
}
@media screen and (min-width:720px) {
  html {
    font-size: 96px
  }
  body {
    font-size: 26.88px
  }
}
@media screen and (min-width:750px) {
  html {
    font-size: 100px
  }
  body {
    font-size: 28px
  }
}



  .my-header{
    position:relative;
    z-index:1000;
  }

</style>
