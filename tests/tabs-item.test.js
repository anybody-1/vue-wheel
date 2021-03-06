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

describe('TabsItem', () => {
  it('存在.', () => {
    expect(TabsItem).to.be.ok
  })
  it('可以接受 name props', () => {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        name: 'boddy'
      }
    }).$mount()
    expect(vm.$el.getAttribute('data-name')).to.eq('boddy')
  })
  it('可以接受 disabled', () => {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        disabled: true
      }
    }).$mount()
    expect(vm.$el.classList.contains('disabled')).to.be.true
    const callback = sinon.fake()
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.not.been.called
  })
})
