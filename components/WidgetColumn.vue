<template>
  <div class="widget-column" :class="['cols-' + data.cols]">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'widget-column',
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
  .full-row .widget-column {
    padding: 0;
  }
  .widget-column {
    display: inline-block;
    vertical-align: top;
    padding: 5px;
    &.cols-12 {
      width: 100%;
    }
    &.cols-11 {
      width: 91.66666667%;
    }
    &.cols-10 {
      width: 83.33333333%;
    }
    &.cols-9 {
      width: 75%;
    }
    &.cols-8 {
      width: 66.66666667%;
    }
    &.cols-7 {
      width: 58.33333333%;
    }
    &.cols-6 {
      width: 50%;
    }
    &.cols-5 {
      width: 41.66666667%;
    }
    &.cols-4 {
      width: 33.33333333%;
    }
    &.cols-3 {
      width: 25%;
    }
    &.cols-2 {
      width: 16.66666667%;
    }
    &.cols-1 {
      width: 8.33333333%;
    }
  }
</style>