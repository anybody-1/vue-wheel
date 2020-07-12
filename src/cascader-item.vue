<template>
    <div class="cascader-item" :style="{height:height}">
        <div class="left">
            <div class="label" v-for="(item,index) in items" :key="index" @click="onClickLabel(item)">
                <span class="name">{{ item.label}}</span>
                <span class="icons">
                   <lv-icon name="right" v-if="rightArrowVisible(item)"></lv-icon>
                </span>
            </div>
        </div>
        <div class="right" v-if="rightItems">
            <cascader-item :items="rightItems" :level="level+1" :load="load" :selected="selected"
                           @update:selected="updateSelected"></cascader-item>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CascaderItem",
        props: {
            items: {
                type: Array
            },
            height: {
                type: String
            },
            selected: {
                type: Array
            },
            level: {
                type: Number,
                default: 0
            },
            load: {
                type: Function
            }
        },
        data() {
            return {};
        },
        methods: {
            rightArrowVisible(item) {
                return item.load ? '' : item.children
            },
            updateSelected(newval) {
                console.log(newval)
                this.$emit('update:selected', newval)
            },
            onClickLabel(item) {
                let selected = JSON.parse(JSON.stringify(this.selected))
                selected[this.level] = item
                selected.splice(this.level + 1)
                this.$emit('update:selected', selected)
            }
        },
        computed: {

            rightItems() {
                if (this.selected[this.level]) {
                    let item = this.items.filter(e => e.label === this.selected[this.level].label)
                    if (item && item[0].children && item[0].children.length > 0) {
                        return item[0].children
                    }
                }
            }
        }
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
                padding: .5em 1em;
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
                    transform: scale(0.5);
                }
            }
        }

        .right {
            height: 100%;
            border-left: 1px solid $border-color-light;
        }
    }
</style>