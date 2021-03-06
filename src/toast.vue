<template>
  <div class="wrapper" :class="toastClass">
    <div class="toast" ref="toast">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-html="$slots.default" v-else></div>
      </div>
      <div class="line" ref="line"></div>
      <span v-if="closeButton" class="close" @click="clickClose">{{ closeButton.text }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GuluToast',
  props: {
    autoClose: {
      type: [Boolean, Number],
      default: 3,
      validator(value) {
        return typeof value === 'number' || value === false
      }
    },
    // autoCloseDelay: {
    //   type: Number,
    //   default: 10
    // },
    closeButton: {
      type: Object,
      default: () => {
        return {
          text: '关闭',
          callback: undefined
        }
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'middle'].indexOf(value) >= 0
      }
    }
  },
  computed: {
    toastClass() {
      return [`position-${this.position}`]
    }
  },
  mounted() {
    this.setStyle()
    this.excuteClose()
  },
  methods: {
    setStyle() {
      this.$nextTick(() => {
        this.$refs.toast.style.height = getComputedStyle(
          this.$refs.toast,
          null
        ).height
      })
    },
    excuteClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoClose * 1000)
      }
    },
    close() {
      this.$el.remove()
      this.$emit('close')
      this.$destroy()
    },
    clickClose() {
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback(this)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
$animation-duration: 500ms;
.wrapper {
  left: 50%;
  position: fixed;
  transform: translateX(-50%);
  z-index: 30;
  &.position-top {
    top: 0;
    .toast {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      animation: slide-down $animation-duration;
    }
  }
  &.position-bottom {
    bottom: 0;
    .toast {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      animation: slide-up $animation-duration;
    }
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
    .toast {
      animation: fade $animation-duration;
    }
  }
}
.toast {
  font-size: $font-size;
  min-height: $toast-min-height;
  line-height: 1.8;
  display: flex;
  align-items: center;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  color: white;
  padding: 0 16px;
  .line {
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
  }
  .close {
    padding-left: 16px;
    cursor: pointer;
    flex-shrink: 0;
  }
  .message {
    padding: 6px 0;
  }
}
</style>

