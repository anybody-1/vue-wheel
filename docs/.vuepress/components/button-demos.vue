<template>
  <div>
    <h3>预览</h3>
    <lv-button>默认按钮</lv-button>
    <lv-button icon="settings">Icon按钮</lv-button>
    <lv-button :loading="true">loading按钮</lv-button>
    <lv-button disabled>禁用按钮</lv-button>
    <h4>代码</h4>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import Vue from 'vue'
Vue.component('LvButton', () => import('../../../src/button'))
// import GButton from '../../../src/button'
export default {
  // components: { GButton },
  data() {
    return {
      content: `
        <lv-button>默认按钮</lv-button>
        <lv-button icon="settings">Icon按钮</lv-button>
        <lv-button :loading="true">loading按钮</lv-button>
        <lv-button disabled>禁用按钮</lv-button>
      `
        .replace(/\t+| {2,}/g, '')
        .trim()
    }
  }
}
</script>