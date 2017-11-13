<template>
    <div class="star">
      <span v-for="item in itemClass" :class="item" class="star-item" :style="size"></span>
    </div>
</template>

<script>
  import axios from "axios";
  const LENGTH=5;
  export default{
    props:["score","large","medium","small","aaaa"],
    data(){
      return{
        size:{}
      }
    },
    computed:{
      itemClass(){
        let result=[];
        let m=parseInt(this.score);
        for(let i=0;i<m;i++){
          result.push("on")
        };
        if(this.score-m>=0.5){
          result.push("half")
        };
        while(result.length<LENGTH){
          result.push("off")
        };
        return result;
      }
    },
    created(){
      //console.log(this.score)
      this.size={
        width:this.aaaa+'px',
        height:this.aaaa+"px",
        marginRight:this.aaaa/2-4+"px",
      }
    },
  };
</script>

<style>
  .star{
    font-size: 0;
    /*margin:0.32rem auto;*/
    text-align:center;
  }

  .star .star-item{
    display: inline-block;
    background-repeat: no-repeat;
    width: 24px;
    height: 24px;
    margin-right: 22px;
    background-size: 100%;
  }

  .star .star-item.large{
    display: inline-block;
    background-repeat: no-repeat;
    width: 24px;
    height: 24px;
    margin-right: 22px;
    background-size: 24px 24px;
  }

  .star .star-item.medium{
    display: inline-block;
    background-repeat: no-repeat;
    width: 18px;
    height: 18px;
    margin-right: 16px;
    background-size: 18px 18px;
  }

  .star .star-item.small{
    display: inline-block;
    background-repeat: no-repeat;
    width: 18px;
    height: 18px;
    margin-right: 16px;
    background-size: 18px 18px;
  }

  .star .star-item:last-child{
    margin-right: 0;
  }

  .star .star-item.on{
    background-image: url(images/star48_on@2x.png);
  }

  .star .star-item.half{
    background-image: url(images/star48_half@2x.png);
  }

  .star .star-item.off{
    background-image: url(images/star48_off@2x.png);
  }



</style>
