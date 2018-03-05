<template>
  <a href="https://m2.yaolaivip.com/restaurant/#/mealdetail/95a1d580ddd54d7785250a226f4a2b63" class="widget-product-item">
    <img src="https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2018/01/29/5e58f37b-1131-4018-837b-3c6237a54077.jpg" class="product-image"/>
    <div class="product-name">新国贸饭店</div>
    <div class="product-desc">年糕礼盒</div>
    <div class="product-info"><del>原价：238元</del></div>
    <div class="product-info">工行卡专享价：214元</div>
  </a>
</template>
<script>
  export default {
    name: 'widget-product-item',
    props: {
      data: {}
    },
    data () {
      return {
      }
    },
    methods: {
    },
    mounted () {
    }
  }
</script>
<style lang="less">
  .widget-product-item {
    text-align: center;
    display: block;
    background-color: #fff;
    .product-image {
      display: inline-block;
      width: 3rem;
      height: 3rem;
      background-color: #bfbfbf;
    }
    .product-name {
      padding-top: .2rem;
      padding-bottom: .1rem;
      font-weight: 700;
      font-size: .3rem;
    }
    .product-desc {
      font-weight: 700;
      font-size: .3rem;
    }
    .product-info {
      padding: .2rem 0 .18rem 0;
      font-size: .2rem;
      font-weight: 600;
      color: #9d9d9d;
    }
  }
</style>