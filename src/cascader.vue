<template>
<div class="cascader" ref="cascader" v-click-outside="close">
  <div class="result" @click="toggle">{{ result }}</div>
  <div class="cascader-body" v-if="cascaderVisible">
    <cascader-item :items="source" :selected="selected" :height="popoverHeight" :loading-item="loadingItem" @update:selected="updateSelected" :load="load"></cascader-item>
  </div>
</div>
</template>

<script>
import ClickOutside from "./click-outside";
import CascaderItem from "./cascader-item";

export default {
  name: "cascader",
  components: {
    CascaderItem,
  },
  props: {
    source: {
      type: Array,
    },
    popoverHeight: {
      type: String,
    },
    selected: {
      type: Array,
      default: () => [],
    },
    load: {
      type: Function,
    },
  },
  data() {
    return {
      cascaderVisible: false,
      loadingItem: {},
    };
  },
  directives: {
    ClickOutside,
  },
  computed: {
    result() {
      return this.selected.map((e) => e.label).join("/");
    },
  },
  methods: {
    updateSelected(newVal) {
      this.$emit("update:selected", newVal);
      let lastItem = newVal[newVal.length - 1];
      let simplest = (children, id) => {
        return children.filter((item) => item.id === id)[0];
      };
      let complex = (children, id) => {
        let noChildren = [];
        let hasChildren = [];
        children.forEach((item) => {
          if (item.children) {
            hasChildren.push(item);
          } else {
            noChildren.push(item);
          }
        });
        let found = simplest(noChildren, id);
        if (found) {
          return found;
        } else {
          found = simplest(hasChildren, id);
          if (found) {
            return found;
          } else {
            for (let i = 0; i < hasChildren.length; i++) {
              found = complex(hasChildren[i].children, id);
              if (found) {
                return found;
              }
            }
            return undefined;
          }
        }
      };
      let updateSource = (result) => {
        this.loadingItem = {};
        let copy = JSON.parse(JSON.stringify(this.source));
        let toUpdate = complex(copy, lastItem.id);
        toUpdate.children = result;
        this.$emit("update:source", copy);
      };
      if (!lastItem.isLeaf && this.load) {
        this.load(lastItem, updateSource); // 回调:把别人传给我的函数调用一下
        // 调回调的时候传一个函数,这个函数理论应该被调用
        this.loadingItem = lastItem;
      }
    },
    close() {
      this.cascaderVisible = false;
    },
    open() {
      this.cascaderVisible = true;
    },
    toggle() {
      if (this.cascaderVisible === true) {
        this.close();
      } else {
        this.open();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "global";

.cascader {
  display: inline-block;
  position: relative;

  .result {
    min-width: 10em;
    height: $input-height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    display: inline-flex;
    align-items: center;
    padding: 0.1em 0.5em;
  }

  .cascader-body {
    position: absolute;
    background: white;
    margin-top: 5px;
    display: flex;
    z-index: 1;
    @extend .box-shadow;
  }
}</style
>>
