<template>
    <div class="row" :style="rowStyle">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'GuluRow',
    props: {
        gutter: {
            type: [String,Number]
        },
        align: {
            type:String,
            validator(value){
                return ['left','center','right'].includes(value)
            }
        }
    },
    computed: {
        rowStyle(){
            let {gutter} = this
            return {
                marginLeft: -gutter/2+'px',
                marginRight: -gutter/2+'px'
            }
        }
    },
    mounted() {
        this.$children.forEach(element => {
            element.gutter = this.gutter
        });
    },
}
</script>

<style lang="scss" scoped>
.row {
    display: flex;
}
</style>
