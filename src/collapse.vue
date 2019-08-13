<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name: 'GuluCollapse',
  props: {
    single: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Array
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
    this.eventBus.$emit('update:selected', this.selected)
    this.eventBus.$on('update:addSelected', name => {
      let nameCopy = JSON.parse(JSON.stringify(this.selected))
      if (this.single) {
        nameCopy = [name]
      } else {
        nameCopy.push(name)
      }
      this.eventBus.$emit('update:selected', nameCopy)
      this.$emit('update:selected', nameCopy)
    })
    this.eventBus.$on('update:removeSelected', name => {
      let nameCopy = JSON.parse(JSON.stringify(this.selected))
      let index = nameCopy.indexOf(name)
      nameCopy.splice(index, 1)
      this.eventBus.$emit('update:selected', nameCopy)
      this.$emit('update:selected', nameCopy)
    })
  }
}
</script>
<style lang="scss" scoped>
.collapse {
  $bor: #ddd;
  $border-radius: 4px;
  border: 1px solid $bor;
  border-radius: $border-radius;
}
</style>

