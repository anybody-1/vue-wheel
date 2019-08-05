<template>
  <div class="tabs-item" @click="selectItem" :class="classes">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'GuluTabsItem',
  inject: ['eventBus'],
  props: {
    name: {
      type: [String, Number],
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      active: false
    }
  },
  computed: {
    classes() {
      return { active: this.active }
    }
  },
  methods: {
    selectItem() {
      this.eventBus.$emit('update:selected', this.name, this)
    }
  },
  created() {
    this.eventBus.$on('update:selected', (name, vm) => {
      this.active = name === this.name
    })
  }
}
</script>
<style lang="scss" scoped>
$head-color: blue;
.tabs-item {
  margin: 0 1em;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  &.active {
    color: $head-color;
    font-weight: bold;
  }
}
</style>

