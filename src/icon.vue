<template>
  <svg class="lv-icon">
    <use :xlink:href="`#i-${name}`" />
  </svg>
</template>
<script>
import './svg'
export default {
  name: 'GuluIcon',
  props: ['name']
}
</script>
<style lang="scss" scoped>
.lv-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
