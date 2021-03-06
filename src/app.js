import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Content from './content'
import Sider from './sider'
import Footer from './footer'
import Header from './header'
import Toast from './toast'
import Plugin from './plugin'
import Tabs from './tabs'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsHead from './tabs-head'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'

Vue.component('lv-button', Button)
Vue.component('lv-icon', Icon)
Vue.component('lv-row', Row)
Vue.component('lv-col', Col)
Vue.component('lv-input', Input)
Vue.component('lv-layout', Layout)
Vue.component('lv-content', Content)
Vue.component('lv-sider', Sider)
Vue.component('lv-footer', Footer)
Vue.component('lv-header', Header)
Vue.component('lv-toast', Toast)
Vue.component('lv-tabs', Tabs)
Vue.component('lv-tabs-body', TabsBody)
Vue.component('lv-tabs-head', TabsHead)
Vue.component('lv-tabs-pane', TabsPane)
Vue.component('lv-tabs-item', TabsItem)
Vue.component('lv-popover', Popover)
Vue.component('lv-collapse', Collapse)
Vue.component('lv-collapse-item', CollapseItem)
Vue.component('lv-button-group', ButtonGroup)
Vue.use(Plugin)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    message: 4,
    selectedKey: 'sport',
    selectLabel: ['3']
  },
  created() {},
  methods: {
    showToast(position) {
      this.$toast(`马上关闭: ${parseInt(Math.random() * 100)}`, {
        closeButton: {
          text: '关闭'
        },
        autoClose: false,
        position
      })
    }
  }
})
