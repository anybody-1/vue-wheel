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

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-input', Input)
Vue.component('g-layout', Layout)
Vue.component('g-content', Content)
Vue.component('g-sider', Sider)
Vue.component('g-footer', Footer)
Vue.component('g-header', Header)
Vue.component('g-toast', Toast)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-popover', Popover)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)
Vue.component('g-button-group', ButtonGroup)
Vue.use(Plugin)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    message: '其他',
    selectedKey: 'sport',
    selectLabel: '3'
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
