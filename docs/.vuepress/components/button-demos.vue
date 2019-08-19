<template>
  <div>
    <h3>预览</h3>
    <g-button>默认按钮</g-button>
    <g-button icon="settings">Icon按钮</g-button>
    <g-button :loading="true">loading按钮</g-button>
    <g-button disabled>禁用按钮</g-button>
    <h4>代码</h4>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import Vue from 'vue'
Vue.component('GButton', () => import('../../../src/button'))
// import GButton from '../../../src/button'
export default {
  // components: { GButton },
  data() {
    return {
      content: `
        <g-button>默认按钮</g-button>
        <g-button icon="settings">Icon按钮</g-button>
        <g-button :loading="true">loading按钮</g-button>
        <g-button disabled>禁用按钮</g-button>
      `
        .replace(/\t+| {2,}/g, '')
        .trim()
    }
  }
}
</script>