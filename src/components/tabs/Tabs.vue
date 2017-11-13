<template>
    <div>
      <div class="tabs">
        <div class="tabs-item">
          <router-link to="/goods">商品</router-link>
        </div>
        <div class="tabs-item">
          <router-link to="/ratings">评价</router-link>
        </div>
        <div class="tabs-item">
          <router-link to="/seller">商家</router-link>
        </div>
      </div>
    </div>
</template>

<script>
  export default{

  }


</script>

<style>
  .tabs{
    display:flex;
    height:0.8rem;
    /*border-bottom:1px solid rgba(7,17,27,0.1);*/
  }
  .tabs .tabs-item{
    flex:1;
    font-size:0.28rem;
    color:rgb(77,85,93);
    line-height:0.8rem;
    text-align:center;
    border-bottom:1px solid rgba(7,17,27,0.1);
  }
  .router-link-active{
    color:rgb(240,20,20);
  }

</style>
