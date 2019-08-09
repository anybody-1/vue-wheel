<template>
  <div class="popover" ref="popover">
    <div
      ref="contentWrapper"
      v-if="visible"
      class="content-wrapper"
      :class="[`position-${position}`]"
    >
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
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'left', 'bottom', 'right'].indexOf(value) >= 0
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator(value) {
        return ['click', 'hover'].indexOf(value) >= 0
      }
    }
  },
  data() {
    return {
      visible: false
    }
  },
  computed: {
    openEvent() {
      if (this.trigger === 'click') {
        return 'click'
      } else {
        return 'mouseenter'
      }
    },
    closeEvent() {
      if (this.trigger === 'click') {
        return 'click'
      } else {
        return 'mouseleave'
      }
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
      const { contentWrapper, trigger } = this.$refs
      document.body.appendChild(contentWrapper)
      const {
        top,
        left,
        height,
        width,
        right
      } = trigger.getBoundingClientRect()
      const { height: height2 } = contentWrapper.getBoundingClientRect()
      let positions = {
        top: {
          top: top + window.scrollY,
          left: left + window.scrollX
        },
        left: {
          top: top + (height - height2) / 2 + window.scrollY,
          left: left + window.scrollX
        },
        right: {
          top: top + (height - height2) / 2 + window.scrollY,
          left: right + window.scrollX
        },
        bottom: {
          top: top + height + window.scrollY,
          left: left + window.scrollX
        }
      }
      contentWrapper.style.left = positions[this.position].left + 'px'
      contentWrapper.style.top = positions[this.position].top + 'px'
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
  },
  mounted() {
    if (this.trigger === 'click') {
      this.$refs.popover.addEventListener('click', this.showContent)
    } else {
      this.$refs.popover.addEventListener('mouseenter', this.onShow)
      this.$refs.popover.addEventListener('mouseleave', this.onClose)
    }
  },
  destroyed() {
    if (this.trigger === 'click') {
      this.$refs.popover.removeEventListener('click', this.showContent)
    } else {
      this.$refs.popover.removeEventListener('mouseenter', this.onShow)
      this.$refs.popover.removeEventListener('mouseleave', this.onClose)
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
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  padding: 0.5em 1em;
  max-width: 20em;
  background: white;
  word-break: break-all;
  &::before,
  &::after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    border: 10px solid transparent;
  }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before,
    &::after {
      left: 10px;
      border-bottom: none;
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
  &.position-bottom {
    margin-top: 10px;
    &::before,
    &::after {
      left: 10px;
      border-top: none;
    }
    &::before {
      border-bottom-color: black;
      bottom: 100%;
    }
    &::after {
      border-bottom-color: white;
      bottom: calc(100% - 1px);
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before,
    &::after {
      transform: translateY(-50%);
      top: 50%;
      border-right: none;
    }
    &::before {
      border-left-color: black;
      left: 100%;
    }
    &::after {
      border-left-color: white;
      left: calc(100% - 1px);
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before,
    &::after {
      transform: translateY(-50%);
      top: 50%;
      border-left: none;
    }
    &::before {
      border-right-color: black;
      right: 100%;
    }
    &::after {
      border-right-color: white;
      right: calc(100% - 1px);
    }
  }
}
</style>
