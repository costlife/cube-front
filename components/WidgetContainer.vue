<template>
  <div class="widget-container" :style="styles">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'widget-container',
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

<style>
  .widget-container {
    min-height: 100%;
    background-size: 100%;
  }
</style>