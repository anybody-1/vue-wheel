<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue'
Vue.prototype.$toast = function() {
  console.log('我是toast')
}
export default {
  name: 'GuluToast'
}
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  font-size: $font-size;
  height: $toast-height;
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
  padding: 0 10px;
}
</style>
