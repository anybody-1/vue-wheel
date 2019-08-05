<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name: 'GuluTabs',
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: 'transverse',
      validator(value) {
        return ['vertical', 'transverse'].indexOf(value) >= 0
      }
    }
  },
  data() {
    return {
      eventBus: new Vue()
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      if (vm.$options.name === 'GuluTabsHead') {
        vm.$children.forEach(child => {
          if (child.name === this.selected) {
            this.eventBus.$emit('update:selected', this.selected, child)
          }
        })
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.tabs {
}
</style>

