<template>
  <div>
    <h3>预览</h3>
    <lv-tabs :selected.sync="selectedKey">
      <lv-tabs-head>
        <template slot="action">
          <lv-button>操作</lv-button>
        </template>
        <lv-tabs-item name="sport">体育</lv-tabs-item>
        <lv-tabs-item name="finance">
          <lv-icon name="finance"></lv-icon>财经
        </lv-tabs-item>
        <lv-tabs-item name="international" disabled>国际</lv-tabs-item>
      </lv-tabs-head>
      <lv-tabs-body>
        <lv-tabs-pane name="sport">体育资讯</lv-tabs-pane>
        <lv-tabs-pane name="finance">财经资讯</lv-tabs-pane>
        <lv-tabs-pane name="international">国际资讯</lv-tabs-pane>
      </lv-tabs-body>
    </lv-tabs>
    <h4>代码</h4>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import Vue from 'vue'
Vue.component('LvIcon', () => import('../../../src/icon'))
Vue.component('LvTabs', () => import('../../../src/tabs'))
Vue.component('LvButton', () => import('../../../src/button'))
Vue.component('LvTabsBody', () => import('../../../src/tabs-body'))
Vue.component('LvTabsHead', () => import('../../../src/tabs-head'))
Vue.component('LvTabsItem', () => import('../../../src/tabs-item'))
Vue.component('LvTabsPane', () => import('../../../src/tabs-pane'))
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

        <lv-tabs :selected.sync="selectedKey">
          <lv-tabs-head>
            <template slot="action">
              <lv-button>操作</lv-button>
            </template>
            <lv-tabs-item name="sport">体育</lv-tabs-item>
            <lv-tabs-item name="finance">
              <lv-icon name="finance"></lv-icon>财经
            </lv-tabs-item>
            <lv-tabs-item name="international" disabled>国际</lv-tabs-item>
          </lv-tabs-head>
          <lv-tabs-body>
            <lv-tabs-pane name="sport">体育资讯</lv-tabs-pane>
            <lv-tabs-pane name="finance">财经资讯</lv-tabs-pane>
            <lv-tabs-pane name="international">国际资讯</lv-tabs-pane>
          </lv-tabs-body>
        </lv-tabs>
      `
        .replace(/^ {8}/gm, '')
        .trim(),
      selectedKey: 'sport'
    }
  }
}
</script>