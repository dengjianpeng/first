<template>
    <div class="shop-cart">
      <div class="cart" :class="{'new-cart':totalPrice}" @click="show">
        <i class="icon-shopping_cart"></i>
      </div>
      <span :class="{'total-price':!totalPrice,'new-price':totalPrice}">￥{{totalPrice}}</span>
      <span class="line"></span>
      <span class="send-price" >另需配送费￥4元</span>

      <div :class="{'min-price':totalPrice<20,'all-price':totalPrice>=20}" >
        <p v-if="!totalPrice">￥{{minPrice}}起送</p>
        <p v-if="totalPrice<20">还差￥{{20-totalPrice}}起送</p>
        <p v-if="totalPrice>=20">￥{{totalPrice}}结算</p>
      </div>
      <div class="number" v-if="totalNum">
        <em >{{totalNum}}</em>
      </div>

      <!--购物车弹出层-->
      <div class="back">
        <div class="cart-detail">
          <div class="car-top">
            <span class="car-name">购物车</span>
            <span class="empty" @click="empty">清空</span>
          </div>
          <div class="car-bottom" ref="selectFoodsScroll">
              <ul >
                <li class="food-item" v-for="food in selectFoods">
                  <span class="food-name">{{food.name}}</span>
                  <!--加减组件-->
                  <cartoop class="cart-oop" :food="food"></cartoop>
                  <span class="food-price"><em>￥</em>{{food.count*food.price}}</span>
                </li>
              </ul>
          </div>
        </div>
      </div>


    </div>
</template>

<script>
  import axios from "axios";
  import Cartoop from "../cartopp/Cartopp.vue";
  import BetterScroll from "better-scroll";

  export default{
    data(){
      return {
        minPrice:null,
        totalCount:null,
        flag:false,
        selectFoodsScroll:null,
      }
    },
    components:{
      Cartoop
    },
    props:["selectFoods"],
    created(){
      let that=this;
      let url="http://localhost:8080/static/data.json";
      axios.get(url).then(
        (res)=>{
          that.$nextTick(()=>{
            that.selectFoodsScroll=new BetterScroll(that.$refs.selectFoodsScroll,{
              click:true
            });
          })
        }
      ).catch(
        (err)=>{
          console.log(res.err);
        }
      )
    },
    methods:{
      empty(){
        this.selectFoods.forEach(food=>{
          food.count=0;
        })
      },
      show(){
         this.flag=!this.flag;
        if(this.flag){
          document.getElementsByClassName("back")[0].style.display="block";
        }else{
          document.getElementsByClassName("back")[0].style.display="none";
        }

      },
    },
    computed:{
      totalNum(){
        let count=0;
        this.selectFoods.forEach(b=>{
          count+=b.count;
        });
        return count;
      },
      totalPrice(){
        let res=0;
        this.selectFoods.forEach(c=>{
          res+=c.price*c.count;
        })
        return res;
      },
    }
  }
</script>

<style>
  .shop-cart{
    height:0.92rem;
    background:#141d27;
    width:100%;
    /*position:fixed;*/
    z-index:20;
  }
  .shop-cart .cart{
    width:0.88rem;
    height:0.88rem;
    background-color:#2b333b;
    border-radius:50%;
    border:0.12rem solid #141d27;
    position:absolute;
    left:0.24rem;
    bottom:0.04rem;
    text-align:center;
  }
  .shop-cart .new-cart{
    background-color:rgb(0,160,220);
  }
  .shop-cart .cart i{
    font-size:0.48rem;
    color:rgba(255,255,255,0.4);
    line-height:0.88rem;
  }
  .shop-cart .new-cart i{
    font-size:0.48rem;
    color:rgb(255,255,255);
    line-height:0.88rem;
  }
  .total-price{
    font-size:0.32rem;
    color:rgba(255,255,255,0.4);
    font-weight:700;
    line-height:0.48rem;
    margin-left:1.6rem;
  }
  .new-price{
    font-size:0.32rem;
    color:rgb(255,255,255);
    font-weight:700;
    line-height:0.48rem;
    margin-left:1.6rem;
  }
  .line{
    width:1px;
    height:0.48rem;
    border-left:1px solid rgba(255,255,255,0.1);
    margin:0 0.24rem;
  }
  .send-price{
    font-size:0.32rem;
    color:rgba(255,255,255,0.4);
    line-height:0.92rem;
  }
  .min-price{
    width:2.1rem;
    height:100%;
    background-color:#2b333b;
    float:right;
  }
  .all-price{
    width:1.6rem;
    height:100%;
    background-color:red;
    float:right;
  }
  .min-price p{
    font-size:0.24rem;
    color:rgba(255,255,255,0.4);
    font-weight:700;
    line-height:0.92rem;
    text-align:center;
  }
  .all-price p{
    font-size:0.24rem;
    color:rgb(255,255,255);
    font-weight:700;
    line-height:0.92rem;
    margin:0 0.16rem;
    text-align:center;
  }
  .number{
    width:0.48rem;
    height:0.32rem;
    background-color:rgb(240,20,20);
    box-shadow:0px 4px 8px 0px rgba(0,0,0,0.4);
    border-radius:0.16rem;
    position:absolute;
    left:0.88rem;
    top:-0.25rem;
    text-align:center;
    font-size:0.18rem;
    font-weight:700;
    color:rgb(255,255,255);
    line-height:0.32rem;
  }

  /*************购物车弹出层*********/
  .back{
    width:100%;
    /*height:100%;*/
    position:fixed;
    top:0;
    background-color:rgba(7,17,27,0.6);
    /*filter:blur(10px);*/
    display:none;
    z-index:-1;
    bottom:0.92rem;
  }
  .cart-detail{
    width:100%;
    height:6.11rem;
    background-color:rgb(255,255,255);
    position:absolute;
    bottom:0;
  }
  .cart-detail .car-top{
    line-height:0.8rem;
    background-color:#f3f5f7;
    border-bottom:1px solid rgba(7,17,27,0.1);
  }
  .cart-detail .car-top .car-name{
    font-size:0.28rem;
    font-weight:200;
    color:rgb(7,17,27);
    margin-left:0.36rem;
  }
  .cart-detail .car-top .empty{
    font-size:0.24rem;
    color:rgb(0,160,220);
    float:right;
    margin-right:0.36rem;
  }
  .car-bottom{
    height:5.31rem;
    margin:0 0.36rem;
  }
  .car-bottom .food-item{
    line-height:0.96rem;
    border-bottom:1px solid rgba(7,17,27,0.1);
  }
  .car-bottom .food-item .food-name{
    font-size:0.28rem;
    color:rgb(7,17,27);
  }
  .car-bottom .food-item .food-price{
    font-size:0.28rem;
    font-weight:700;
    color:rgb(240,20,20);
    float:right;
    margin:0 0.24rem 0 0.36rem;
  }
  .car-bottom .food-item .food-price em{
    font-size:0.2rem;
    font-weight:normal;
  }
  .car-bottom .food-item .cart-oop{
    float:right;
    /*line-height:0.96rem;*/
    margin-top:0.12rem;
  }
</style>
