import Vue from 'vue'
import ComponentList from '@/components'
for (let prop in ComponentList) {
  Vue.component(prop, ComponentList[prop])
}
Vue.component('component-proxy', {
  props: {
    name: {
      type: String,
      required: true
    },
    props: {
      type: Object,
      default: () => {}
    }
  },
  render(createElem) {
    return createElem(this.name, {
      props: {
        data: this.props
      }
    });
  }
});