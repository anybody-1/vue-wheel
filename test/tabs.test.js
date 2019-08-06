const expect = chai.expect
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsHead from '../src/tabs-head'
import TabsPane from '../src/tabs-pane'

Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-tabs-item', TabsItem)

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
    <g-tabs selected='finance'>
      <g-tabs-head>
        <g-tabs-item name='sport'>体育</g-tabs-item>
        <g-tabs-item name='finance'>财经</g-tabs-item>
        <g-tabs-item name='international'>国际</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name='sport'>体育资讯</g-tabs-pane>
        <g-tabs-pane name='finance'>财经资讯</g-tabs-pane>
        <g-tabs-pane name='international'>国际资讯</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
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
