<template>
  <div>
    <h3>简单用法</h3>
    <lv-collapse :selected.sync="selectLabel">
      <lv-collapse-item title="标题1" name="1">内容1</lv-collapse-item>
      <lv-collapse-item title="标题2" name="2">内容2</lv-collapse-item>
      <lv-collapse-item title="标题3" name="3">内容3</lv-collapse-item>
    </lv-collapse>
    {{ selectLabel }}
    <h3>代码</h3>
    <pre><code>{{simpleContent}}</code></pre>

    <h3>设置只展开一个-single</h3>
    <lv-collapse single :selected.sync="selectLabel1">
      <lv-collapse-item title="标题1" name="1">内容1</lv-collapse-item>
      <lv-collapse-item title="标题2" name="2">内容2</lv-collapse-item>
      <lv-collapse-item title="标题3" name="3">内容3</lv-collapse-item>
    </lv-collapse>
    {{ selectLabel1 }}
    <h3>代码</h3>
    <pre><code>{{singleHtml}}</code></pre>
  </div>
</template>
<script>
import Vue from 'vue'
Vue.component('LvCollapse', () => import('../../../src/collapse'))
Vue.component('LvCollapseItem', () => import('../../../src/collapse-item'))

export default {
  data() {
    return {
      simpleContent: `
        <lv-collapse-item title="标题1" name="1">内容1</lv-collapse-item>
        <lv-collapse-item title="标题2" name="2">内容2</lv-collapse-item>
        <lv-collapse-item title="标题3" name="3">内容3</lv-collapse-item>
      `
        .replace(/^ {8}/gm, '')
        .trim(),
      singleHtml: `
        <lv-collapse single :selected.sync='selectLabel1'>
          <lv-collapse-item title="标题1" name='1'>
            内容1
          </lv-collapse-item>
          <lv-collapse-item title="标题2" name='2'>
            内容2
          </lv-collapse-item>
          <lv-collapse-item title="标题3" name='3'>
            内容3
          </lv-collapse-item>
        </lv-collapse>
      `
        .replace(/^ {8}/gm, '')
        .trim(),
      selectLabel: ['1'],
      selectLabel1: ['1']
    }
  },
  methods: {
    changeE(value) {
      console.log(value)
    }
  }
}
</script>