<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="action-wrapper">
      <slot name="action"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GuluTabsHead',
  inject: ['eventBus'],
  created() {
    this.eventBus.$on('update:selected', (name, vm) => {
      console.log(name, vm)
    })
  }
}
</script>
<style lang="scss" scoped>
$head-height: 40px;
$line-color: blue;
.tabs-head {
  display: flex;
  justify-content: flex-start;
  height: $head-height;
  position: relative;
  > .action-wrapper {
    margin-left: auto;
  }
  > .line {
    position: absolute;
    border-bottom: 1px solid $line-color;
    width: 100px;
    bottom: 0;
  }
}
</style>

