<template>
  <div class="cascader-item" :style="{height:height}">
    <div class="left">
      <div class="label" v-for="(item,index) in items" :key="index" @click="onClickLabel(item)">
        <span class="name">{{ item.label}}</span>
        <span class="icons">
          <template v-if="item.label === loadingItem.label&&!item.children">
            <icon class="loading" name="loading"></icon>
          </template>
          <template v-else>
            <icon class="next" v-if="rightArrowVisible(item)" name="right"></icon>
          </template>
        </span>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <cascader-item
        ref="right"
        :items="rightItems"
        :level="level+1"
        :load="load"
        :loading-item="loadingItem"
        :selected="selected"
        :height="height"
        @update:selected="updateSelected"
      ></cascader-item>
    </div>
  </div>
</template>

<script>
import Icon from "./icon";
export default {
  name: "CascaderItem",
  components: { Icon },
  props: {
    items: {
      type: Array,
    },
    height: {
      type: String,
    },
    loadingItem: {
      type: Object,
      default: () => ({}),
    },
    selected: {
      type: Array,
    },
    level: {
      type: Number,
      default: 0,
    },
    load: {
      type: Function,
    },
  },
  methods: {
    upDateSource() {},
    rightArrowVisible(item) {
      return this.load ? !item.isLeaf : item.children;
    },
    updateSelected(newval) {
      this.$emit("update:selected", newval);
    },
    onClickLabel(item) {
      let selected = JSON.parse(JSON.stringify(this.selected));
      selected[this.level] = item;
      selected.splice(this.level + 1);
      this.$emit("update:selected", selected);
    },
  },
  computed: {
    rightItems() {
      if (this.selected[this.level]) {
        let item = this.items.filter(
          (e) => e.label === this.selected[this.level].label
        );
        if (item && item[0].children && item[0].children.length > 0) {
          return item[0].children;
        }
      }
    },
  },
  created() {
    console.log("查看数据");
    console.log(this.items);
  },
};
</script>

<style lang="scss" scoped>
@import "global";

.cascader-item {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 200px;
  overflow: auto;

  .left {
    height: 100%;
    overflow: auto;

    .label {
      padding: 0.5em 1em;
      display: flex;
      cursor: pointer;
      white-space: nowrap;

      &:hover {
        background-color: $grey;
      }

      .name {
        margin-right: 1em;
        user-select: none;
      }

      .icons {
        margin-left: auto;
        .next {
          transform: scale(0.5);
        }
        .loading {
          animation: spin 1s infinite linear;
        }
      }
    }
  }

  .right {
    height: 100%;
    border-left: 2px solid $border-color-light;
  }
}
</style>