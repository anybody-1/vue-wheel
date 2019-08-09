const expect = chai.expect
import Vue from 'vue'
import Popover from '../src/popover'

Vue.component('g-popover', Popover)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
  it('存在.', () => {
    expect(Popover).to.be.ok
  })
  it('可以设置position.', () => {
    let div = document.createElement('div')
    div.innerHTML = `
    <g-popover ref='test'>
      <template slot='content'>
        <span>上边内容</span>
      </template>
      <button>上边</button>
    </g-popover>
    `
    document.body.appendChild(div)
    let vm = new Vue({
      el: div
    })
    vm.$el.querySelector('button').click()
    vm.$nextTick(() => {
      let { contentWrapper } = vm.$refs.test.$refs
      expect(contentWrapper.classList.contains('position-top')).to.be.true
    })
  })
  xit('可以设置trigger', () => {
    let div = document.createElement('div')
    div.innerHTML = `
    <g-popover ref='test' trigger='hover'>
      <template slot='content'>
        <span>上边内容</span>
      </template>
      <button>上边</button>
    </g-popover>
    `
    document.body.appendChild(div)
    let vm = new Vue({
      el: div
    })
    const event = new Event('mouseenter', { bubbles: true })
    vm.$el.dispatchEvent(event)
    vm.$nextTick(() => {
      console.log(vm.$refs.test.$refs.contentWrapper)
      let { contentWrapper } = vm.$refs.test.$refs
      expect(contentWrapper).to.exist
    })
  })
})
