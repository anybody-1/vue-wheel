<template>
  <div class="toast" ref="toast">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-html="$slots.default" v-else></div>
    </div>
    <div class="line" ref="line"></div>
    <span v-if="closeButton" class="close" @click="clickClose">{{ closeButton.text }}</span>
  </div>
</template>
<script>
export default {
  name: 'GuluToast',
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 10
    },
    closeButton: {
      type: Object,
      default: () => {
        return {
          text: '关闭信息',
          callback: undefined
        }
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
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
        }, this.autoCloseDelay * 1000)
      }
    },
    close() {
      this.$el.remove()
      this.$destroy()
    },
    log() {
      console.log('测试')
    },
    clickClose() {
      this.close()
      if (
        this.closeButton &&
        typeof (this.closeButton.callback === 'function')
      ) {
        this.closeButton.callback(this)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  font-size: $font-size;
  min-height: $toast-min-height;
  line-height: 1.8;
  position: fixed;
  left: 50%;
  display: flex;
  align-items: center;
  transform: translateX(-50%);
  top: 0;
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

