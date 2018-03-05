<template>
  <div class="widget-image" :style="styles">
    <img :src="data.image_url" alt="">
  </div>
</template>
<script>
  export default {
    name: 'widget-image',
    props: {
      data: {},
      styles: {}
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
  .widget-image {
    img {
      margin: auto;
      display: block;
      max-width: 100%;
    }
  }
</style>