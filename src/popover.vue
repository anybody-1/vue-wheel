<template>
  <div class="popover" @click="showContent">
    <div v-if="visible" class="content-wrapper">
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
