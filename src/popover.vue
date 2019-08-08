<template>
  <div class="popover" @click="showContent" ref="popover">
    <div ref="contentWrapper" v-if="visible" class="content-wrapper">
      <slot name="content"></slot>
    </div>
    <span ref="trigger" style="display: inline-block;">
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
          this.$refs.popover === e.target ||
          this.$refs.contentWrapper.contains(e.target)
        ) ||
        !this.$refs.contentWrapper.contains(e.target)
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
$border-color: #333;
$border-radius: 4px;
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  position: absolute;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  // box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  transform: translateY(-100%);
  padding: 0.5em 1em;
  margin-top: -10px;
  max-width: 20em;
  background: white;
  word-break: break-all;
  &::before,
  &::after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    position: absolute;
    left: 10px;
  }
  &::before {
    border-top-color: black;
    top: 100%;
  }
  &::after {
    border-top-color: white;
    top: calc(100% - 1px);
  }
}
</style>
