<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="action-wrapper"></div>
    <slot name="action"></slot>
  </div>
</template>
<script>
export default {
  name: 'GuluTabsHead',
  inject: ['eventBus'],
  created() {
    this.eventBus.$on('update:selected', name => {
      console.log(`head: ${name}`)
    })
  }
}
</script>
<style lang="scss" scoped>
.tabs-head {
  $head-height: 40px;
  display: flex;
  border: 1px solid red;
  justify-content: flex-start;
  align-items: center;
  height: $head-height;
  > .action-wrapper {
    margin-left: auto;
  }
}
</style>

