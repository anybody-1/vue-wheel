<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'GuluCollapse',
  props: {
    title: String,
    required: true
  }
}
</script>
<style lang="scss" scoped>
.collapse {
  $bor: #ddd;
  $border-radius: 4px;
  border: 1px solid $bor;
  border-radius: $border-radius;
}
</style>

