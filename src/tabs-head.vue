<template>
  <div class="tabs-head" ref="head">
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
  mounted() {
    this.eventBus.$on('update:selected', (name, vm) => {
      let { width, left } = vm.$el.getBoundingClientRect()
      let { left: left1 } = this.$refs.head.getBoundingClientRect()
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${left - left1}px`
    })
  }
}
</script>
<style lang="scss" scoped>
$head-height: 40px;
$line-color: rgb(64, 158, 255);
$border-color: #ddd;
.tabs-head {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: $head-height;
  position: relative;
  border-bottom: 1px solid $border-color;
  > .action-wrapper {
    margin-left: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  > .line {
    position: absolute;
    border-bottom: 1px solid $line-color;
    bottom: 0;
    transition: all 350ms;
  }
}
</style>

