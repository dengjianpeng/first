<template>
    <div class="cartopp">
      <i class="icon-add_circle" @click="addCount"></i>
      <em class="count" v-show="food.count">{{food.count}}</em>
      <i class="icon-remove_circle_outline" v-show="food.count" @click="removeCount"></i>
    </div>
</template>

<script>
  import Vue from "vue";
  export default {
    props: ["food"],
    methods: {
      addCount() {
        if (!this.food.count) {
          Vue.set(this.food, "count", 1);
        } else {
          this.food.count++;
        };

      },
      removeCount(){
        this.food.count--;
      },

    },
  }
</script>

<style>
  .cartopp{
    width:1.44rem;
  }
  .cartopp .icon-add_circle{
    font-size:0.48rem;
    color:rgb(0,160,220);
    line-height:0.48rem;
    float:right;

  }
  .cartopp .count{
    float:right;
    width:0.48rem;
    line-height:0.48rem;
    text-align:center;
    font-size:0.2rem;
    color:rgb(147,153,159);
  }
  .cartopp .icon-remove_circle_outline{
    font-size:0.48rem;
    color:rgb(0,160,220);
    line-height:0.48rem;
    float:right;
  }
</style>
