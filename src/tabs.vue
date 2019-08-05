<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
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
  }
}
</script>
<style lang="scss" scoped>
.tabs {
}
</style>

