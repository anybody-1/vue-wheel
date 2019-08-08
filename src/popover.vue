<template>
  <div class="popover" @click="showContent" ref="popover">
    <div ref="contentWrapper" v-if="visible" class="content-wrapper">
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
    onClickDocument(e) {
      if (
        !this.$refs.popover ||
        !(
          this.$refs.popover.contains(e.target) ||
          this.$refs.popover === e.target
        )
      ) {
        this.onClose()
      }
    },
    positionContent() {
      document.body.appendChild(this.$refs.contentWrapper)
      let {
        top,
        left,
        height,
        width
      } = this.$refs.trigger.getBoundingClientRect()
      this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
      this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
    },
    onShow() {
      this.visible = true
      setTimeout(() => {
        this.positionContent()
        document.addEventListener('click', this.onClickDocument)
      }, 0)
    },
    onClose() {
      this.visible = false
      document.removeEventListener('click', this.onClickDocument)
      console.log('关闭')
    },
    showContent(e) {
      if (this.$refs.trigger.contains(e.target)) {
        if (this.visible === true) {
          this.onClose()
        } else {
          this.onShow()
        }
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
