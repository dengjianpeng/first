<template>
    <div class="xiangqing">
      <div class="food-pic">
        <img src="" class="big-img">
        <p class="food-name"></p>
        <span class="sell-count">月售份</span>
        <span class="good-rating">好评率</span>
        <p class="price">
          <span class="now-price"><em>￥</em></span>
          <span class="old-price"><em>￥</em></span>
          <span class="join-car">加入购物车</span>
        </p>
      </div>
      <!------------------food-info--------------------->
      <div class="food-info">
        <div class="info-content">
          <p class="info-tit">商品介绍</p>
          <p class="info-text"></p>
        </div>
      </div>
      <!----------------food-ratings----------------------------->
      <div class="food-ratings">
        <div class="ratings-header">
          <p class="rating-tit"></p>
          <p class="ratings-class">
            <span class="all-ratings">全部<em></em></span>
            <span class="good-ratings">推荐<em></em></span>
            <span class="bad-ratings">吐槽<em></em></span>
          </p>
          <p class="have-content">
            <i class="icon-check_circle"></i>
            <span>只看有内容的评价</span>
          </p>
        </div>

        <div class="ratings-content">
          <div class="custom-box">
            <div class="custom-rating">
              <p class="rate-time"></p>
              <p class="rating-text">
                <i class=""></i>
                <span class="text"></span>
              </p>
              <div class="custom-info">
                <span class="custom-name"></span>
                <img src="" class="custom-avatar">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
</script>

<style>
  .xiangqing{
    background-color:#f3f5f7;
  }
  .food-pic{
    background-color:white;
    border-bottom:2px solid rgba(7,17,27,0.1);
  }
  .food-pic .big-img{
    /*width:100%;*/
    height:7.5rem;
  }
  .food-pic .food-name{
    margin:0.36rem 0 0 0.36rem;
    font-size:0.28rem;
    font-weight:700;
    color:rgb(7,17,27);
  }
  .food-pic .sell-count,.food-pic .good-rating{
    margin:0.16rem 0 0 0.36rem;
    font-size:0.2rem;
    color:rgb(147,153,159);
  }
  .food-pic .good-rating{
    margin-left:0.24rem;
  }
  .food-pic .price {
    margin:0.36rem;
    line-height:0.48rem;
  }
  .food-pic .price .now-price{
    font-size:0.28rem;
    font-weight:700;
    color:rgb(240,20,20);
  }
  .food-pic .price .now-price em{
    font-size:0.2rem;
    font-weight:normal;
  }
  .food-pic .price .old-price{
    font-size:0.28rem;
    font-weight:700;
    color:rgb(240,20,20);
    margin-left:0.24rem;
  }
  .food-pic .price .old-price em{
    font-size:0.2rem;
    font-weight:normal;
    text-decoration:line-through;
  }
  .food-pic .price .join-car{
    display:block;
    float:right;
    font-size:0.2rem;
    color:rgb(255,255,255);
    width:1.48rem;
    text-align:center;
    border-radius:0.24rem;
    background-color:rgb(0,160,220);
  }
  /*********************food-info**********************/
  .food-info{
    margin-top:0.32rem;
    background-color:white;
    border-top:2px solid rgba(7,17,27,0.1);
    border-bottom:2px solid rgba(7,17,27,0.1);
  }
  .food-info .info-content{
    margin:0.36rem;
  }
  .food-info .info-content .info-tit{
    font-size:0.28rem;
    color:rgb(7,17,27);
  }
  .food-info .info-content .info-text{
    margin:0.12rem 0.16rem 0 0.16rem;
    font-size:0.24rem;
    font-weight:200;
    color:rgb(77,85,93);
    line-height:0.48rem;
  }
  /***********************food-ratings**************************/
  .food-ratings{
    backgrounf-color:white;
    border-top:2px solid rgba(7,17,27,0.1);
  }
  .food-ratings .ratings-header{
    margin:0.36rem;
  }
  .ratings-header .rating-tit{
    font-size:0.28rem;
    color:rgb(7,17,27);
  }
  .ratings-header .ratings-class{
    line-height:0.32rem;
  }
  .ratings-header .ratings-class .all-ratings{
    font-size:0.24rem;
    color:rgb(255,255,255);
    display:block;
    float:left;
    border-radius:2px;
    background-color:rgb(0,160,220);
  }
  .ratings-header .ratings-class .all-ratings em{
    font-size:0.16rem;
  }
  .ratings-header .ratings-class .good-ratings{
    margin-left:0.16rem;
    font-size:0.24rem;
    color:rgb(77,85,93);
    border-radius:2px;
    background-color:rgba(0,160,220,0.2);
  }
  .ratings-header .ratings-class .good-ratings em{
    font-size:0.16rem;
  }
  .ratings-header .ratings-class .bad-ratings{
    margin-left:0.16rem;
    border-radius:2px;
    background-color:rgba(77,85,93,0.2);
    font-size:0.24rem;
    color:rgb(77,85,93);
  }
  .ratings-header .ratings-class .bad-ratings em{
    font-size:0.16rem;
  }
  .ratings-header .have-content{
    line-height:0.96rem;
    border-top:1px solid rgba(7,17,28,0.1);
  }
  .ratings-header .have-content i{
    font-size:0.48rem;
    color:rgb(147,153,159);
  }
  .ratings-header .have-content span{
    font-size:0.24rem;
    color:rgb(147,153,159);
    margin-left:0.08rem;
  }
  .ratings-content{
    border-top:2px solid rgba(7,17,27,0.1);
  }
  .ratings-content .custom-box{
    margin:0 0.36rem;
  }
  .ratings-content .custom-box .custom-rating{
    margin:0.32rem 0;
    border-bottom:1px solid rgba(7,17,27,0.1);
    position:relative;
  }
  .custom-box .custom-rating .rate-time{
    font-size:0.2rem;
    color:rgb(147,153,159);
  }
  .custom-box .custom-rating .rating-text{
    margin-top:0.12rem;
  }
  .custom-box .custom-rating .rating-text i{
    font-size:0.24rem;
    line-height:0.48rem;
  }
  .custom-box .custom-rating .rating-text span{
    font-size:0.24rem;
    color:rgb(7,17,27);
    line-height:0.32rem;
  }
  .custom-box .custom-rating .custom-info{
    position:absolute;
    top:0;
    right:0;
    line-height:0.24rem;
  }
  .custom-box .custom-rating .custom-info .custom-name{
    font-size:0.2rem;
    color:rgb(147,153,159);
  }
  .custom-box .custom-rating .custom-info .custom-avatar{
    margin-left:0.12rem;
    width:0.24rem;
    height:0.24rem;
    border-radius:50%;
  }
</style>
