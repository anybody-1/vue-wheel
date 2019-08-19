<template>
  <div>
    <h3>简单用法</h3>
    <g-collapse :selected.sync="selectLabel">
      <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
      <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
      <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
    </g-collapse>
    {{ selectLabel }}
    <h3>代码</h3>
    <pre><code>{{simpleContent}}</code></pre>

    <h3>设置只展开一个-single</h3>
    <g-collapse single :selected.sync="selectLabel1">
      <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
      <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
      <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
    </g-collapse>
    {{ selectLabel1 }}
    <h3>代码</h3>
    <pre><code>{{singleHtml}}</code></pre>
  </div>
</template>
<script>
import Vue from 'vue'
Vue.component('GCollapse', () => import('../../../src/collapse'))
Vue.component('GCollapseItem', () => import('../../../src/collapse-item'))

export default {
  data() {
    return {
      simpleContent: `
        <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
        <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
        <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
      `
        .replace(/^ {8}/gm, '')
        .trim(),
      singleHtml: `
        <g-collapse single :selected.sync='selectLabel1'>
          <g-collapse-item title="标题1" name='1'>
            内容1
          </g-collapse-item>
          <g-collapse-item title="标题2" name='2'>
            内容2
          </g-collapse-item>
          <g-collapse-item title="标题3" name='3'>
            内容3
          </g-collapse-item>
        </g-collapse>
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