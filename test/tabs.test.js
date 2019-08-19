const expect = chai.expect
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsHead from '../src/tabs-head'
import TabsPane from '../src/tabs-pane'

Vue.component('lv-tabs', Tabs)
Vue.component('lv-tabs-body', TabsBody)
Vue.component('lv-tabs-head', TabsHead)
Vue.component('lv-tabs-pane', TabsPane)
Vue.component('lv-tabs-item', TabsItem)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
  it('存在.', () => {
    expect(Tabs).to.be.ok
  })
  it('设置 selected props', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <lv-tabs selected='finance'>
      <lv-tabs-head>
        <lv-tabs-item name='sport'>体育</lv-tabs-item>
        <lv-tabs-item name='finance'>财经</lv-tabs-item>
        <lv-tabs-item name='international'>国际</lv-tabs-item>
      </lv-tabs-head>
      <lv-tabs-body>
        <lv-tabs-pane name='sport'>体育资讯</lv-tabs-pane>
        <lv-tabs-pane name='finance'>财经资讯</lv-tabs-pane>
        <lv-tabs-pane name='international'>国际资讯</lv-tabs-pane>
      </lv-tabs-body>
    </lv-tabs>
    `
    const vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      let xx = vm.$el.querySelector('.tabs-item[data-name="finance"]')
      expect(xx.classList.contains('active')).to.be.true
    })
  })
  it('可以接受 direction', () => {})
})
