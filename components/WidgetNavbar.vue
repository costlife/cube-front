<template>
  <div class="widget-navbar-wrapper">
    <nav :class="{'nav-fixed': isFixed}">
      <a href="javascript:void(0);" v-for="(nav, index) in data.items" :key="index" @click="scrollTo(nav.target)" :style="getItemStyle(index)">
        <div class="nav-text-wrapper">
          <div v-for="(txt, index) in nav.text" :key="index">
            {{txt}}
          </div>
        </div>
      </a>
    </nav>
  </div>
</template>
<script>
  export default {
    name: 'widget-navbar',
    props: {
      data: {
        active_styles: {},
        items: []
      },
      styles: {}
    },
    data () {
      return {
        isFixed: false,
        activeIndex: 0
      }
    },
    methods: {
      getItemStyle (index) {
        let result = [this.styles]
        if (index === this.activeIndex) {
          result.push(this.data.active_styles)
        }
        return result
      },
      getActiveIndex (scroll) {
        let items = this.data.items
        let index = 0
        for (var i = 0; i < items.length; i++) {
          if (scroll >= items[i].target && (i + 1 == items.length || scroll < items[i + 1].target)) {
            index = i
          }
        }
        return index
      },
      scrollTo (target) {
        document.documentElement.scrollTop = target
        document.body.scrollTop = target
      },
      onScroll () {
        let scroll = document.documentElement.scrollTop || document.body.scrollTop
        if (scroll >= this.$el.offsetTop) {
          this.isFixed = true
        } else {
          this.isFixed = false
        }
        this.activeIndex = this.getActiveIndex(scroll)
      }
    },
    mounted () {
      window.onscroll = this.onScroll
    }
  }
</script>
<style lang="less">
  .widget-navbar-wrapper {
    height: 45px;
    nav {
      background: #fff;
      font-size: 15px;
      font-weight: 600;
      display: flex;
      height: 45px;
      &.nav-fixed {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 3;
      }
      a {
        flex: 1;
        text-align: center;
        position: relative;
        .nav-text-wrapper {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
</style>
