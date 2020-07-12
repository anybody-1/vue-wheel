<template>
    <div class="cascader" ref="cascader" v-click-outside="close">
        <div class="result" @click="toggle">{{ result }}</div>
        <div class="cascader-body" v-if="cascaderVisible">
            <cascader-item :items="source" :selected="selected" @update:selected="updateSelected"
                           :load="load"></cascader-item>
        </div>
    </div>
</template>

<script>
    import ClickOutside from "./click-outside";
    import CascaderItem from "./cascader-item";

    export default {
        name: "cascader",
        components: {CascaderItem},
        props: {
            source: {
                type: Array
            },
            selected: {
                type: Array,
                default: () => []
            },
            load: {
                type: Function
            }
        },
        data() {
            return {
                cascaderVisible: false,
                items: []
            };
        },
        directives: {
            ClickOutside
        },
        computed: {
            result() {
                return this.selected.map(e => e.label).join('/')
            }
        },
        methods: {
            updateSelected(newVal) {
                this.$emit('update:selected', newVal)
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
            }
        }
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
    }
</style>>