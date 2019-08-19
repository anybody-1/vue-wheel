<template>
  <div>
    <lv-layout>
      <lv-header>header</lv-header>
      <lv-layout>
        <lv-sider>sider</lv-sider>
        <lv-content>content</lv-content>
      </lv-layout>
      <lv-footer>footer</lv-footer>
    </lv-layout>
    <h4>代码</h4>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import Vue from 'vue'
Vue.component('LvFooter', () => import('../../../src/footer'))
Vue.component('LvHeader', () => import('../../../src/header'))
Vue.component('LvContent', () => import('../../../src/content'))
Vue.component('LvSider', () => import('../../../src/sider'))
Vue.component('LvLayout', () => import('../../../src/layout'))
export default {
  data() {
    return {
      content: `
        <lv-layout>
          <lv-header>header</lv-header>
          <lv-layout>
            <lv-sider>sider</lv-sider>
            <lv-content>content</lv-content>
          </lv-layout>
          <lv-footer>footer</lv-footer>
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