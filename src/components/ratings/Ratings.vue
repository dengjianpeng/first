<template>
  <div>
    <div class="wrapper" ref="ratingScroll">
      <div class="ratings" v-if="ratings!=null">
        <div class="ratings-top">
          <div class="top-left">
            <p class="score">{{seller.score}}</p>
            <p class="score-text">综合评分</p>
            <p class="rankRate">高于周边商家{{seller.rankRate}}%</p>
          </div>
          <div class="top-right">
            <p class="server-score">
              <span class="text">服务态度</span>
              <!--星级组件-->
              <star :score="serviceScore" class="star" :aaaa="18"></star>
              <span class="num">{{seller.serviceScore}}</span>
            </p>
            <p class="food-score">
              <span class="text">食品评分</span>
              <!--星级组件-->
              <star :score="foodScore" class="star" :aaaa="18"></star>
              <span class="num">{{seller.foodScore}}</span>
            </p>
            <p class="send-time">
              <span class="text">送达时间</span>
              <span class="time-num">{{seller.deliveryTime}}分钟</span>
            </p>
          </div>
        </div>
        <div class="ratings-bottom">
          <div class="ratings-class">
            <div class="all">全部<span class="rating-num">{{ratings.length}}</span></div>
            <div class="satis">满意<span class="rating-num">{{showCount(0)}}</span></div>
            <div class="nosatis">不满意<span class="rating-num">{{showCount(1)}}</span></div>
          </div>
          <p class="have-content">
            <i class="icon-check_circle"></i>
            <span class="text">只看有内容的评价</span>
          </p>
          <div class="ratings-list" v-for="rating in ratings">
            <div class="rating-item">
              <img :src="rating.avatar" class="custom-avatar">
              <div class="custom-rating">
                <p class="custom-name">{{rating.username}}</p>
                <p class="rate-time">{{showRatetime(rating.rateTime)}}</p>
                <!--星级组件-->
                <star class="star" :aaaa="12" :score="rating.score"></star>
                <p class="delivery-time" v-show="rating.deliveryTime">{{rating.deliveryTime}}分钟送达</p>
                <div class="rating-text">{{rating.text}}</div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>

    <!--购物车组件-->
    <!--<shopcart class="shopcart" :selectFoods="selectFoods"></shopcart>-->
  </div>

</template>

<script>
  import axios from "axios";
  import Star from "../star/Star.vue";
  import Shopcart from "../shopcart/ShopCart.vue";
  import BetterScroll from "better-scroll";
  export default{
    data(){
      return {
        ratings:null,
        seller:null,
        serviceScore:null,
        foodScore:null,
        rateTime:null,
        goods:null,
        ratingScroll:null,
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
      star:Star,
      Shopcart,
    },
    methods:{
      showRatetime(time){
        let date=new Date();
        date.setTime(time);
        let year=date.getFullYear();
        let month=date.getMonth();
        let sun=date.getDate();
        let hours=date.getHours();
        let minutes=date.getMinutes();
        return year+"-"+month+"-"+sun+" "+hours+":"+minutes;
      },
      showCount(num){
        let res=0;
        for(let i in this.ratings){
          if(this.ratings[i].rateType==num){
            res++;
          }
        }
        return res;
      },
    },

    created(){
      let that=this;
      let url="http://localhost:8080/static/data.json";
      axios.get(url).then((res)=>{
        console.log(res);
        that.goods=res.data.goods;
        that.ratings=res.data.ratings;
        that.seller=res.data.seller;
        that.serviceScore=res.data.seller.serviceScore;
        that.foodScore=res.data.seller.foodScore;
        that.$nextTick(()=>{that.ratingScroll=new BetterScroll(that.$refs.ratingScroll,{
          click:true
        })});
      })
    }
  }
</script>

<style>
  .ratings{
    width:100%;
    background-color:#f3f5f7;
    position:absolute;
    z-index:-1;
    /*bottom:0.92rem;*/
    /*top:3.48rem;*/
  }
  .ratings-top{
    width:100%;
    height:2.12rem;
    background-color:white;
    overflow:hidden;
  }
  .ratings-top .top-left{
    margin:0.36rem 0 0.36rem 0.36rem;
    text-align:center;
    border-right:1px solid rgb(233,235,236);
    float:left;
    padding-right:0.36rem;
  }
  .ratings-top .top-left .score{
    font-size:0.48rem;
    color:rgb(255,153,0);
    margin-bottom:0.12rem;
  }

  .ratings-top .top-left .score-text{
    font-size:0.24rem;
    color:rgb(7,17,27);
    margin-bottom:0.16rem;
  }
  .ratings-top .top-left .rankRate{
    font-size:0.2rem;
    color:rgb(147,153,159);
    line-height:0.2rem;
  }
  .ratings-top .top-right{
    /*margin:0.36rem 0 0  0.48rem;*/
    float:left;
    margin-top:0.36rem;
    margin-left:0.36rem;
  }
  /**********综合得星****************/
  .ratings-top .top-right .star{
     float:left;
     /*width:2rem;*/
   }

  .ratings-top .top-right p{
    /*display:block;*/

  }
  .ratings-top .top-right .text{
    font-size: 0.24rem;
    color:rgb(7,17,27);
    float:left;

    margin-right:0.24rem;
    line-height:0.36rem;
  }
  .ratings-top .top-right .num{
    font-size:0.24rem;
    color:rgb(255,153,0);
    float:left;
    margin-left:0rem;
    line-height:0.36rem;margin-bottom:0.16rem;
  }
  .ratings-top .top-right .send-time .time-num{
    font-size:0.24rem;
    color:rgb(147,153,159);
    float:left;
    line-height:0.36rem;
  }

  /************顾客评论区******************/
  .ratings-bottom {
    margin-top:0.36rem;
    background-color:white;
    width:100%;
  }
  .ratings-bottom .ratings-class{
    margin:0.36rem 0.36rem 0 0.36rem;
    height:1.6rem;
    border-bottom:1px solid rgb(233,235,236);
  }
  .ratings-bottom .ratings-class .rating-num{
    margin-left:0.05rem;
  }
  .ratings-bottom .ratings-class .all{
    padding:0.3rem;
    background-color:rgb(0,160,220);
    float:left;
    margin-top:0.36rem;
    color:white;
  }
  .ratings-bottom .ratings-class .satis{
    padding:0.3rem;
    background-color:rgb(204,236,248);
    float:left;
    margin:0.36rem 0.2rem;
  }
  .ratings-bottom .ratings-class .nosatis{
    padding:0.3rem;
    background-color:rgb(233,235,236);
    float:left;
    margin-top:0.36rem;
  }
  .ratings-bottom .have-content{
    line-height:0.8rem;
    /*font-size:0.24rem;*/
    padding-left:0.36rem;
    color:rgb(147,153,159);
    clear:both;
    border-bottom:2px solid rgb(233,235,236);
  }
  .ratings-bottom .have-content i{
    font-size:0.36rem;
    float:left;
    line-height:0.8rem;
    margin-right:0.1rem;
  }

  .ratings-list{
    width:100%;
  }
  .ratings-list .rating-item{
    margin:0.36rem;
    padding-bottom:0.36rem;
    border-bottom:1px solid rgb(233,235,236);
    position:relative;
    /*background:green;*/
  }
  .ratings-list .rating-item .custom-avatar{
    width:0.56rem;
    height:0.56rem;
    border-radius:50%;
    position:absolute;
    top:0;
    left:0;
  }
  .ratings-list .rating-item .custom-rating{
    margin-left:0.8rem;
  }
  .custom-rating .custom-name{
    font-size:0.2rem;
    color:rgb(7,17,27);
    line-height:0.24rem;
    margin-bottom:0.08rem;
  }
  .custom-rating .rate-time{
    position:absolute;
    top:0;
    right:0;
    font-size:0.2rem;
    font-weight:200;
    color:rgb(147,153,159);
    line-height:0.24rem;
  }
  .custom-rating .star{
    float:left;
    margin:0 0.12rem 0.12rem 0;
  }
  .custom-rating .delivery-time{
    float:left;
    font-size:0.2rem;
    font-weight:200;
    color:rgb(147,153,159);
    line-height:0.24rem;
  }
  .custom-rating .rating-text{
    font-size:0.24rem;
    color:rgb(7,17,27);
    line-height:0.36rem;
    margin:0.12rem 0 0.16rem 0;
    clear:both;
  }

  .shopcart{
    /*position:absolute;*/
    /*bottom:0;*/
  }

  .wrapper{
    height:100%;
  }

</style>
