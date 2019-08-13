<template>
  <button
    :disabled="disabled"
    class="g-button"
    :class="[!iconPosition?'icon-left':`icon-${iconPosition}`]"
    @click="onClick"
  >
    <g-icon name="loading" class="loading icon" v-if="loading"></g-icon>
    <g-icon v-if="icon&&!loading" :name="icon" class="icon"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import Icon from './icon'
export default {
  name: 'GuluButton',
  components: {
    'g-icon': Icon
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        return value === 'left' || value === 'right'
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick() {
      if (!this.disabled && !this.loading) {
        this.$emit('click')
      } else {
        return
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$font-size: 14px;
$button-height: 32px;
$border-radius: 4px;
$border-color: #999;
$border-color-hover: #666;
$button-background: white;
$button-active-background: #eee;
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.g-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-background;

  &:hover {
    border-color: $border-color-hover;
  }

  &:active {
    background-color: $button-active-background;
  }

  &:focus {
    outline: none;
  }
  > .icon {
    order: 1;
    margin-right: 0.1em;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-left: 0.1em;
      margin-right: 0;
    }
    > .content {
      order: 1;
    }
  }
  .loading {
    animation: spin 1s infinite linear;
  }
  &[disabled] {
    border-color: #bbb;
    color: #bbb;
    background-color: $button-background;
    cursor: not-allowed;
  }
}
</style>
