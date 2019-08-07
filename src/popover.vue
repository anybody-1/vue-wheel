<template>
  <div class="popover" @click.stop="showContent">
    <div ref="contentWrapper" v-if="visible" class="content-wrapper" @click.stop>
      <slot name="content"></slot>
    </div>
    <span ref="trigger">
      <slot></slot>
    </span>
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
          document.body.appendChild(this.$refs.contentWrapper)
          let {
            top,
            left,
            height,
            width
          } = this.$refs.trigger.getBoundingClientRect()
          this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
          this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
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
}
.content-wrapper {
  position: absolute;
  border: 1px solid #ddd;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  transform: translateY(-100%);
}
</style>
