<template>
  <div>
    <h3>常见页面布局</h3>
    <lv-layout>
      <lv-header>header</lv-header>
      <lv-content>content</lv-content>
      <lv-footer>footer</lv-footer>
    </lv-layout>
    <h4>代码</h4>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import Vue from 'vue'
import LvLayout from '../../../src/layout'
import LvSider from '../../../src/sider'
import LvHeader from '../../../src/header'
import LvContent from '../../../src/content'
import LvFooter from '../../../src/footer'
// Vue.component('LvLayout', () => import('../../../src/layout'))
// Vue.component('LvSider', () => import('../../../src/sider'))
// Vue.component('LvHeader', () => import('../../../src/header'))
// Vue.component('LvContent', () => import('../../../src/content'))
// Vue.component('LvFooter', () => import('../../../src/footer'))

export default {
  components: { LvLayout, LvSider, LvHeader, LvContent, LvFooter },
  data() {
    return {
      content: `
        <lv-layout>
          <lv-header class="header">header</lv-header>
          <lv-content class="content">content</lv-content>
          <lv-footer class="footer">footer</lv-footer>
        </lv-layout>
      `
        .replace(/^ {8}/gm, '')
        .trim()
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  height: 50px;
  background: #e3d0d0;
}
.content {
  height: 100px;
}
.footer {
  height: 50px;
  background: #eee;
}
.sider {
  width: 80px;
  background: #9ef6f6;
}
</style>