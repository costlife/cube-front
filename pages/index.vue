<template>
  <widget-container :data="MockData.data">
    <widget-row v-for="(row, index) in MockData.children" :key="index" :data="row.data">
      <widget-column v-for="(col, col_index) in row.children" :key="col_index" :data="col.data" >
        <component-proxy v-for="(widget, widget_index) in col.children" :key="widget_index" :name="widget.component" :props="widget.data" :styles="widget.styles"></component-proxy>
      </widget-column>
    </widget-row>
  </widget-container>
</template>

<script>
import MockData from '@/assets/mock/data.json'
import components from '@/components'
export default {
  components: {
  },
  data () {
    return {
      MockData
    }
  },
  mounted () {
    console.log(components)
  }
}
</script>

<style>
  .container {
    height: 500px;
  }
</style>
