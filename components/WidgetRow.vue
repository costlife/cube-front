<template>
  <div class="widget-row">
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