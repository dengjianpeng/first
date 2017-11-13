<template>
  <div v-if="seller!=null">
    <div class="sellerScroll" ref="sellerScroll">
      <div class="seller" v-if="seller!=null">
        <div class="seller-top">
          <div class="top-content">
            <div class="dayun">
              <p class="seller-name">{{seller.name}}</p>
              <!--星级组件-->
              <star :aaaa="16" :score="seller.score" class="star"></star>
              <p class="month-sell">月售{{seller.sellCount}}单</p>
              <div class="favorite">
                <i class="icon-favorite"></i>
                <p class="favorite-text">已收藏</p>
              </div>
            </div>
            <div class="send-info">
              <div >
                <p class="send-text">起送价</p>
                <p class="send-num"><span>{{seller.minPrice}}</span>元</p>
              </div>
              <div >
                <p class="send-text">商家配送</p>
                <p class="send-num"><span>{{seller.deliveryPrice}}</span>元</p>
              </div>
              <div >
                <p class="send-text">平均配送时间</p>
                <p class="send-num"><span>{{seller.deliveryTime}}</span>分钟</p>
              </div>
            </div>

          </div>
        </div>

        <!---------------bulletin-supports------------------->
        <div class="bulletin-supports">
          <div class="bulletin-content">
            <div class="bulletin-name">公告与活动</div>
            <div class="bulletin-content">{{seller.bulletin}}</div>

            <div class="supports-item" v-for="support in seller.supports">
              <i :class="backgrounds[support.type]"></i>
              <span>{{support.description}}</span>
            </div>

          </div>
        </div>
        <!------------------pics------------------------------>
        <div class="pics">
          <div class="pics-content">
            <p class="pics-tit">商家实景</p>
            <div class="imgs-scroll" ref="imgsScroll">
              <div class="imgs">
                <img :src="pic" v-for="pic in seller.pics">
              </div>
            </div>

          </div>

        </div>
        <!-----------------------infos------------------------>
        <div class="infos">
          <div class="infos-content">
            <p class="infos-tit">商家信息</p>
            <ul class="infos-list">
              <li class="infos-item" v-for="info in seller.infos">
                <span class="info-text">{{info}}</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
    <shop-cart class="shop-car" :selectFoods="selectFoods"></shop-cart>
  </div>


</template>

<script>
  import axios from "axios";
  import Star from "../star/Star.vue";
  import BetterScroll from "better-scroll";
  import ShopCart from "../shopcart/ShopCart.vue";

  export default{
    data(){
      return {
        seller:null,
        imgScroll:null,
        backgrounds:["decrease","discount","guarantee","invoice","special"],
        goods:null,
      }
    },
    components:{
      Star,
      ShopCart,
    },
    computed:{
      selectFoods(){
        let foods=[];
        this.goods.forEach(good=>{
          good.foods.forEach(food=>{
            if(food.count){
              foods.push(food);
            }
          })
        });
        return foods;
      },
    },
    created(){
      let that=this;
      let url="http://localhost:8080/static/data.json";
      axios.get(url).then((res)=>{
        that.seller=res.data.seller;
        that.goods=res.data.goods;
        that.$nextTick(()=>{
          that.imgScroll=new BetterScroll(that.$refs.imgsScroll,{
            click:true,
            scrollX:true,
          });
          that.sellerScroll=new BetterScroll(that.$refs.sellerScroll,{
            click:true,
          })
        })
      })
    },
  }
</script>

<style>
  .sellerScroll{
    position:absolute;
    width:100%;
    top:3.48rem;
    bottom:0.92rem;
    overflow: hidden;
  }
  .shop-cart{
    position:absolute;
    bottom:0;
  }
  .seller{
    background-color:#f3f5f7;
  }
  .seller-top{
    border-bottom:2px solid rgba(7,17,27,0.1);
    background-color:white;
  }
  .seller-top .top-content{
    margin:0.36rem;
  }
  .seller-top .top-content .dayun{
    padding-bottom:0.36rem;
    border-bottom:1px solid rgba(7,17,27,0.1);
    position:relative;
  }
  .seller-top .top-content .dayun .star{
    float:left;
    margin-top:0.16rem;
    margin-right:0.16rem;
  }
  .seller-top .top-content .dayun .seller-name{
    font-size:0.28rem;
    color:rgb(7,17,27);
  }
  .seller-top .top-content .dayun .month-sell{
    font-size:0.2rem;
    color:rgb(77,85,93);
    line-height:0.36rem;
    margin-top:0.16rem;
  }
  .seller-top .top-content .dayun .favorite{
    position:absolute;
    top:0;
    right:0;
    text-align:center;
  }
  .seller-top .top-content .dayun .favorite .icon-favorite{
    font-size:0.48rem;
    color:rgb(240,20,20);
  }
  .seller-top .top-content .dayun .favorite .favorite-text{
    margin-top:0.08rem;
    font-size:0.2rem;
    color:rgb(77,85,93);
  }
  .seller-top .top-content .send-info{
    display:flex;
    margin:0.36rem 0;
  }
  .seller-top .top-content .send-info div{
    flex:1;
    border-right:1px solid rgba(7,17,27,0.1);
    text-align:center;
  }
  .seller-top .top-content .send-info div:last-child{
    border-right:none;
  }
  .seller-top .top-content .send-info .send-text{
    font-size:0.2rem;
    color:rgb(147,153,159);

  }
  .seller-top .top-content .send-info .send-num{
    margin-top:0.08rem;
  }
  .seller-top .send-info .send-num span{

    font-size:0.48rem;
    font-weight:200;
    color:rgb(7,17,27);
  }

  .bulletin-supports{
    border-top:2px solid rgba(7,17,27,0.1);
    border-bottom:2px solid rgba(7,17,27,0.1);
    margin-top:0.32rem;
    background-color:white;
  }
  .bulletin-supports .bulletin-content{
    margin:0.36rem;
  }
  .bulletin-supports .bulletin-content .bulletin-name{
    font-size:0.28rem;
    color:rgb(7,17,27);
  }
  .bulletin-supports .bulletin-content .bulletin-content{
    margin:0.16rem 0.24rem 0.32rem 0.24rem;
    font-size:0.24rem;
    font-weight:200;
    color:rgb(240,20,20);
    line-height:0.48rem;
  }
  .bulletin-supports .bulletin-content .supports-item{
    line-height:0.96rem;
    border-top:1px solid rgba(7,17,27,0.1);
  }
  .bulletin-supports .bulletin-content .supports-item i{
    width:0.32rem;
    height:0.32rem;
    background-size:100%;
    background-repeat: no-repeat;
    /*display:block;*/
    float:left;
    line-height:0.96rem;
    margin:0.33rem 0 0 0.24rem;
  }
  .bulletin-supports .bulletin-content .supports-item span{
    font-size:0.24rem;
    font-weight:200;
    color:rgb(7,17,27);
    margin:0 0.24rem 0 0.12rem;
  }
  .pics{
    margin-top:0.32rem;
    border-top:2px solid rgba(7,17,27,0.1);
    border-bottom:2px solid rgba(7,17,27,0.1);
    background-color:white;
    overflow:hidden;
  }
  .pics .pics-content{
    margin:0.36rem;
  }
  .pics .pics-content .imgs-scroll{
    width:100%;
  }
  .pics .pics-tit{
    font-size:0.28rem;
    color:rgb(7,17,27);
    margin-top:0.36rem;
  }
  .pics .imgs{
    margin-top:0.24rem;
    display:flex;
    width:150%;
  }
  .pics .imgs img{
    display:block;
    flex:1;
    width:1.8rem;
    height:1.8rem;
    margin-right:0.12rem;
  }
  .infos{
    margin-top:0.32rem;
    border-top:2px solid rgba(7,17,27,0.1);
    border-bottom:2px solid rgba(7,17,27,0.1);
    background-color:white;
  }
  .infos .infos-content{
    margin:0.36rem;
  }
  .infos .infos-tit{
    font-size:0.28rem;
    color:rgb(7,17,27);
    margin-top:0.36rem;
  }
  .infos .infos-list{
    margin-top:0.24rem;
  }
  .infos .infos-item {
    border-top:1px solid rgba(7,17,27,0.1);
    line-height:0.96rem;
    /*margin:0 0.24rem;*/
    color:rgb(7,17,27);
  }
  .infos .infos-item .info-text{
    margin:0 0.24rem;
    display:block;
  }
  .decrease{
    background-image:url("images/decrease_4@2x.png");
  }
  .discount{
    background-image:url("images/discount_4@2x.png");
  }
  .guarantee{
    background-image:url("images/special_4@2x.png");
  }
  .invoice{
    background-image:url("images/invoice_4@2x.png");
  }
  .special{
    background-image:url("images/guarantee_4@2x.png");
  }
</style>
