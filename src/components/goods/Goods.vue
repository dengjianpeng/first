<template>
    <div class="goods" v-if="goods!=null">
      <div class="left-box"  ref="menuScroll">
        <div class="left">
          <p v-for="good in goods">{{good.name}}</p>
        </div>
      </div>

      <div class="right-bigbox" ref="goodsScroll">
        <div class="right-box" >
          <div class="right" v-for="good in goods">
            <p class="name">{{good.name}}</p>
            <div class="goods-box">
              <div class="goods-content" v-for="food in good.foods">
                <div class="goods-pic"><img :src="food.icon"></div>
                <div class="goods-info">
                  <p class="goods-name">{{food.name}}</p>
                  <p class="goods-description">{{food.description}}</p>
                  <p>
                    <span class="sell-count">月售{{food.sellCount}}份</span>
                    <span class="rating">好评率{{food.rating}}%</span>
                  </p>
                  <div>
                    <span class="price"><em>￥</em>{{food.price}}</span>
                    <span class="old-price" v-if="food.oldPrice"><em>￥</em>{{food.oldPrice}}</span>
                    <div class="buy-count">
                      <!--加减组件-->
                      <cartopp :food="food" ></cartopp>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <!--详情页组件-->
            <xiangqing class="xiangqing"></xiangqing>
          </div>
        </div>
      </div>

      <!--购物车组件-->
      <shop-cart class="shop_cart" :selectFoods="selectFoods"></shop-cart>

    </div>
</template>

<script>
  import axios from "axios";
  import BetterScroll from "better-scroll";
  import Cartopp from "../cartopp/Cartopp.vue";
  import ShopCart from "../shopcart/ShopCart.vue";
  import Xiangqing from "../xiangqing/Xiangqing.vue";
  export default{
    data(){
      return {
        goods:null,
        menuScroll:null,
        goodsScroll:null,
        msg:null,
        info:"",
      }
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
    components:{
      Cartopp,
      ShopCart,
      Xiangqing,
    },
    created(){
      let that=this;
      let url="http://localhost:8080/static/data.json";
      axios.get(url).then((res)=>{
        console.log(res);
        that.goods=res.data.goods;
        console.log(that.goods);
        that.$nextTick(()=>{
          that.menuScroll=new BetterScroll(that.$refs.menuScroll,{});
          that.goodsScroll=new BetterScroll(that.$refs.goodsScroll,{
            click:true
          })
        })
      }).catch((err)=>{
        console.log(err);
      });
    },

  }

</script>

<style>
  .goods{
    background:#f3f5f7;
    overflow:hidden;
    position:absolute;
    /*height:100%;*/
    top:3.48rem;
    bottom:0;
    /*bottom:0.92rem;*/
  }
  .left-box{
    overflow:hidden;
    width:0.8rem;
    height:9rem;
    float:left;
  }
  .left{
    position:absolute;
    /*top:3.48rem;*/
    left:0;
    width:1.6rem;
  }
  .left p{
    font-size:0.24rem;
    color:rgb(77,85,93);
    font-weight:200;
    line-height:1.08rem;
    margin:0 0.24rem;
    border-bottom:1px solid rgba(7,17,27,0.1);
  }
  .right-bigbox{
    height:10rem;
  }

  .right{
    margin-left:1.6rem;
    width:100%;
  }
  .right .name{
    line-height:0.52rem;
    padding-left:0.28rem;
    border-left:2px solid #d9dde1;
    line-height:0.52rem;
  }
  .right .goods-box{
    background:white;
    overflow:hidden;
  }
  .right .goods-box .goods-content{
    margin:0.36rem;
    clear:both;
    border-bottom:1px solid rgba(7,17,27,0.1);
    height:1.8rem;
    position:relative;
  }
  .right .goods-box .goods-content .goods-pic{
    float:left;
  }
  .right .goods-box .goods-content .goods-pic img{
    width:1.04rem;
  }

  .right .goods-box .goods-content .goods-info{
    margin:0.04rem 0 0 0.2rem;
    float:left;
  }
  .right .goods-box .goods-content .goods-info .goods-name{
    font-size:0.28rem;
    color:rgb(7,17,27);
    line-height:0.28rem;
    margin-bottom:0.16rem;
  }
  .right .goods-box .goods-content .goods-info .goods-description{
    font-size:0.2rem;
    color:rgb(147,153,159);
    line-height:0.2rem;
    margin-bottom:0.16rem;
  }
  .right .goods-box .goods-content .goods-info .sell-count{
    font-size:0.2rem;
    color:rgb(147,153,159);
    line-height:0.2rem;
    margin-right:0.24rem;
  }
  .right .goods-box .goods-content .goods-info .rating{
    font-size:0.2rem;
    color:rgb(147,153,159);
    line-height:0.2rem;
  }
  .right .goods-box .goods-content .goods-info .price{
    font-size:0.28rem;
    color:rgb(240,20,20);
    line-height:0.48rem;
    font-weight:700;
  }
  .right .goods-box .goods-content .goods-info .price em{
    font-size:0.2rem;
    font-weight:normal;

  }
  .right .goods-box .goods-content .goods-info .old-price{
    font-size:0.2rem;
    color:rgb(147,153,159);
    font-weight:700;
    line-height:0.48rem;
    text-decoration-line:line-through ;
  }
  .right .goods-box .goods-content .goods-info .buy-count{
    position:absolute;
    bottom:0.18rem;
    left:3.8rem;
  }
  .right .goods-box .goods-content .goods-info .old-price em{
    font-weight:normal;
  }

  .shop_cart{
    position:absolute;
    bottom:0;
  }
</style>
