<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'GuluTabsBody',
  inject: ['eventBus'],
  created() {
    this.eventBus.$on('update:selected', name => {
      // console.log(`body: ${name}`)
    })
  }
}
</script>
<style lang="scss" scoped>
.tabs-body {
}
</style>

