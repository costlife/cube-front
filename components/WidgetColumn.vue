<template>
  <div class="widget-column">
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