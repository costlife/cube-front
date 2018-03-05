<template>
  <div class="widget-container" :style="{backgroundImage: 'url(' + data.image_url + ')'}">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'widget-container',
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

<style>
  .widget-container {
    min-height: 100%;
    background-size: 100%;
  }
</style>