<template>
  <div class="popover" @click.stop="showContent">
    <div v-if="visible" class="content-wrapper" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'GuluPopover',
  data() {
    return {
      visible: false
    }
  },
  methods: {
    showContent() {
      this.visible = !this.visible
      if (this.visible === true) {
        let eventHandle = () => {
          this.visible = false
          document.removeEventListener('click', eventHandle)
        }
        this.$nextTick(() => {
          document.addEventListener('click', eventHandle)
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
  .content-wrapper {
    position: absolute;
    bottom: 100%;
    border: 1px solid #ddd;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  }
}
</style>
