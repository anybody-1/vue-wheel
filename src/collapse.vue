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
    }
  },
  data() {
    return {
      eventBus: new Vue()
    }
  },
  provide() {
    if (this.single) {
      return {
        eventBus: this.eventBus
      }
    }
  },
  mounted() {
    console.log(this.singleOnly)
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

