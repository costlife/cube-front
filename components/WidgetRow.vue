<template>
  <div class="widget-row" :class="{'full-row': data['full-row']}">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'widget-row',
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
  .widget-row {
    padding: 5px;
    &.full-row {
      padding: 0;
    }
  }
</style>