<template>
  <div>
    <h3>预览</h3>
    <g-tabs :selected.sync="selectedKey">
      <g-tabs-head>
        <template slot="action">
          <g-button>操作</g-button>
        </template>
        <g-tabs-item name="sport">体育</g-tabs-item>
        <g-tabs-item name="finance">
          <g-icon name="finance"></g-icon>财经
        </g-tabs-item>
        <g-tabs-item name="international" disabled>国际</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="sport">体育资讯</g-tabs-pane>
        <g-tabs-pane name="finance">财经资讯</g-tabs-pane>
        <g-tabs-pane name="international">国际资讯</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
    <h4>代码</h4>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import Vue from 'vue'
Vue.component('GIcon', () => import('../../../src/icon'))
Vue.component('GTabs', () => import('../../../src/tabs'))
Vue.component('GButton', () => import('../../../src/button'))
Vue.component('GTabsBody', () => import('../../../src/tabs-body'))
Vue.component('GTabsHead', () => import('../../../src/tabs-head'))
Vue.component('GTabsItem', () => import('../../../src/tabs-item'))
Vue.component('GTabsPane', () => import('../../../src/tabs-pane'))
// import GIcon from '../../../src/icon'
// import GTabs from '../../../src/tabs'
// import GButton from '../../../src/button'
// import GTabsBody from '../../../src/tabs-body'
// import GTabsHead from '../../../src/tabs-head'
// import GTabsItem from '../../../src/tabs-item'
// import GTabsPane from '../../../src/tabs-pane'
export default {
  // components: {
  //   GTabs,
  //   GTabsBody,
  //   GTabsHead,
  //   GTabsItem,
  //   GTabsPane,
  //   GIcon,
  //   GButton
  // },
  data() {
    return {
      content: `
        data(){
          return {
            selectedKey: 'sport'
          }
        }

        <g-tabs :selected.sync="selectedKey">
          <g-tabs-head>
            <template slot="action">
              <g-button>操作</g-button>
            </template>
            <g-tabs-item name="sport">体育</g-tabs-item>
            <g-tabs-item name="finance">
              <g-icon name="finance"></g-icon>财经
            </g-tabs-item>
            <g-tabs-item name="international" disabled>国际</g-tabs-item>
          </g-tabs-head>
          <g-tabs-body>
            <g-tabs-pane name="sport">体育资讯</g-tabs-pane>
            <g-tabs-pane name="finance">财经资讯</g-tabs-pane>
            <g-tabs-pane name="international">国际资讯</g-tabs-pane>
          </g-tabs-body>
        </g-tabs>
      `
        .replace(/^ {8}/gm, '')
        .trim(),
      selectedKey: 'sport'
    }
  }
}
</script>