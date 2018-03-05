<template>
  <div class="widget-image">
    <img :src="data.image_url" alt="">
  </div>
</template>
<script>
  export default {
    name: 'widget-image',
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
  .widget-image {
    img {
      display: block;
      max-width: 100%;
    }
  }
</style>