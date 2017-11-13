<template>
  <div v-if="datas!=null">
    <!--header-->
    <div class="header" >
      <!--header-content-->
      <div class="header-content">
        <div class="picdiv">
          <img :src="datas.avatar" class="pic">
        </div>

        <div class="titdiv">
          <img src="./images/1.png" class="pinpai">
          <p class="tit">{{datas.name}}</p>
          <p class="send">{{datas.description}}</p>
          <div class="sup">
            <!--<img src="./images/3.png">-->
            <div class="icon" :class="pics[datas.supports[0].type]"></div>
            {{datas.supports[0].description}}</div>
        </div>

        <!--supports-->
        <div class="support" @click="detailShow=true">
          <span>{{datas.supports.length}}个</span>
          <i class="icon-keyboard_arrow_right"></i>
        </div>
      </div>
      <!--header-content end-->
      <!--模糊背景-->
      <div class="background">
        <img :src="datas.avatar">
      </div>
      <!--模糊背景 end-->
      <!--公告-->
      <div class="notdiv">
        <img src="./images/2.png">
        <p class="nottit" style="margin:0;">{{datas.bulletin}}</p>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
      <!--公告 end-->
    </div>
    <!--header end-->



    <!--**************************弹出层***********************-->

    <div class="detail" v-show="detailShow">
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <!--supports-->
          <div class="supports" >
            <div class="supports-box">
              <div class="tit">{{datas.name}}</div>
              <!--星-->
              <star class="star" :score="datas.score" ></star>
              <!--星 end-->
              <!--优惠信息-->
              <div class="supports-tit">
                <span class="left-line"></span>
                <span class="tit-text">优惠信息</span>
                <span class="right-line"></span>
              </div>
              <!--优惠信息 end-->
              <!--supports-content-->
              <div class="supports-content">
                <div class="supports-item" v-for="item in datas.supports">
                  <div class="item-pic" :class="pics[item.type]"  ></div>
                  <p class="item-text">{{item.description}}</p>
                </div>
              </div>
              <!--supports-content end-->
              <!--商家公告-->
              <div class="text-tit">
                <span class="left-line"></span>
                <span class="tit-text">商家公告</span>
                <span class="right-line"></span>
              </div>
              <div class="text-content">{{datas.bulletin}}</div>
              <!--商家公告 end-->
            </div>
          </div>
          <!--supports end-->
        </div>
      </div>
      <div class="detail-close">
        <i class="icon-close" @click="detailShow=false"></i>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import Star from "../star/Star.vue";
  export default {
    data(){
      return {
        datas: null,
        pics: ["decrease","discount","guarantee","invoice","special"],
        detailShow:false
      }
    },
    created(){
      let that=this;
      let url="http://localhost:8080/static/data.json";
      axios.get(url).then((res)=>{
        console.log(res.data.seller);
        that.datas=res.data.seller;
      }).catch((err)=>{
        console.log(err);
      });
    },
    components:{
      Star
    }
  }
</script>

<style>

  /*响应式*/
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

  /*header样式*/

  .header{
    height:2.68rem;
    background-color:rgba(7,17,27,0.5);
    position:relative;
    overflow:hidden;
    width:100%;
  }
  .header .header-content{
    margin-top:0.48rem;
    margin-left:0.48rem;
  }
  .header .picdiv{
    width:1.28rem;
    height:1.28rem;
    float:left;
    background:green;
  }
  .header .picdiv .pic{
    width:1.28rem;
    height:1.28rem;
    border-radius:4px;
  }
  .header .titdiv {
    float:left;
    margin-left:0.32rem;
    margin-top:0.04rem;
  }
  .header .titdiv .pinpai{
    float:left;
    width:0.6rem;
    height:0.32rem;
    margin-bottom:0.16rem;
  }
  .header .titdiv .tit{
    float:left;
    font-size:0.32rem;
    color:rgb(255,255,255);
    font-weight:bold;
    line-height:0.36rem;
    margin-left:0.12rem;
  }
  .header .titdiv .send{
    clear:both;
    font-size:0.24rem;
    color:rgb(255,255,255);
    font-weight:200;
    line-height:0.24rem;
    margin-bottom:0.2rem;
  }
  .header .titdiv .sup{
    font-size:0.2rem;
    color:rgb(255,255,255);
    font-weight:200;
    line-height:0.24rem;
    margin-top:0.2rem;
  }
  .header .titdiv .sup .icon{
    float:left;
    width:0.24rem;
    height:0.24rem;
    margin-right:0.08rem;
    background-size:contain;
  }
  .header .notdiv{
    width:100%;
    height:0.56rem;
    background-color:rgba(7,17,27,0.2);
    padding:0 0.24rem 0 0.24rem;
    position:absolute;
    bottom:0;
    /*left:0;*/
  }
  .header .notdiv img{
    width:0.44rem;
    height:0.24rem;
    margin-top:0.16rem;
    float:left;
    margin-right:0.08rem;
  }
  .header .notdiv .nottit{
    float:left;
    width:80%;
    font-size:0.2rem;
    color:rgb(255,255,255);
    font-weight:200;
    line-height:0.56rem;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .header .notdiv .icon-keyboard_arrow_right{
    float:left;
    margin-left:0.08rem;
    line-height:0.56rem;
    color:rgb(255,255,255);
  }
  .header .support{
    position:absolute;
    right:0.24rem;
    bottom:0.92rem;
    height:0.48rem;
    padding:0 0.16rem;
    background-color:rgba(0,0,0,0.2);
    margin-right: 0.24rem;
    border-radius:0.24rem;
    line-height:0.48rem;
  }
  .header .support span{
    font-size:0.2rem;
    color:rgb(255,255,255);
    font-weight:200;
  }
  .header .support i{
    font-size:0.2rem;
    color:rgb(255,255,255);
    font-weight:200;
    float:right;
    line-height:0.48rem;
  }
  .header .background img{
    width:100%;
    /*height:100%;*/
    position:absolute;
    z-index:-1;
    top:0;
    left:0;
    filter:blur(10px);
  }
  /******************弹出层***************************/
  .detail{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 100%;
    /*overflow: auto;*/
    background: rgba(7, 17, 27, .8);
    padding-bottom:1.28rem;
    box-sizing:border-box;
  }
  .detail .detail-wrapper{
    min-height:100%;
    width:100%;
    overflow:hidden;
  }
  .detail-wrapper .detail-main{
    /*padding-bottom:1.28rem;*/
  }
  .detail  .detail-close{
    position:relative;
    font-size:0.64rem;
    color:rgba(255,255,255,0.5);
    margin: 0px auto 0 auto;
    width: 0.64rem;
    height:1.28rem;
    clear:both;
  }
  .detail .clearfix{
    display:inline-block;
  }
  .detail .clearfix:after{
    display:block;
    content:"";
    height:0;
    line-height:0;
    clear:both;
  }
  .supports{
    /*filter:blur(10px);*/
    overflow:hidden;
    position:absolute;
    top:0;
    left:0;
  }
  .supports .supports-box{
    margin:1.28rem 0.72rem 0 0.72rem;
  }
  .supports .supports-box .star{
    margin-top:0.32rem;
  }

  .supports .tit{
    font-size:0.32rem;
    font-weight:700;
    color:rgb(255,255,255);
    line-height:0.32rem;
    margin-top:1.28rem;
    text-align:center;
  }
  .supports .supports-tit,.supports .text-tit{
    font-size:0.28rem;
    font-weight:700;
    color:rgb(255,255,255);
    line-heigth:0.28rem;
    margin-top:0.56rem;
    height:0.28rem;
    text-align:center;
  }
  .supports .left-line,.supports .right-line{
    float:left;
    width:2.24rem;
    height:0.02rem;
    background:rgba(255,255,255,0.2);
    line-height:0.28rem;
    margin-top:0.14rem;
  }
  .supports .right-line{
    float:right;
  }

  .supports .tit-text{
    text-align:center;
  }
  .supports .supports-content,.text-content{
    margin-top:0.48rem;
    margin-left:0.24rem;
    margin-right:0.24rem;
  }
  .supports .supports-content .supports-item{
    margin-bottom:0.24rem;
  }
  .supports .supports-content .supports-item .item-pic{
    width:0.32rem;
    height:0.32rem;
    margin-right:0.12rem;
    float:left;
    background-size:contain;
  }
  .supports .supports-content .supports-item .item-text{
    font-size:0.24rem;
    font-weight:200;
    color:rgb(255,255,255);
    line-height:0.32rem;
  }
  .supports .text-content{
    font-size:0.24rem;
    font-weight:200;
    color:rgb(255,255,255);
    line-height:0.48rem;
  }

  .decrease{
    background-image:url("images/decrease_1@2x.png");
  }
  .discount{
    background-image:url("images/discount_1@2x.png");
  }
  .guarantee{
    background-image:url("images/guarantee_1@2x.png");
  }
  .invoice{
    background-image:url("images/invoice_1@2x.png");
  }
  .special{
    background-image:url("images/special_1@2x.png");
  }
</style>
