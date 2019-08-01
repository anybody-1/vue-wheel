const expect = chai.expect
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
  it('存在.', () => {
    expect(Toast).to.be.ok
  })
  describe('Props', () => {
    it('接受autoClose', done => {
      let div = document.createElement('div')
      document.body.appendChild(div)
      let Constractor = Vue.extend(Toast)
      let vm = new Constractor({
        propsData: {
          autoClose: 1
        }
      }).$mount(div)
      vm.$on('close', () => {
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
      })
    })
    it('接受closeButoon', () => {
      let callback = sinon.fake()
      let Constractor = Vue.extend(Toast)
      let vm = new Constractor({
        propsData: {
          closeButton: {
            text: '关闭',
            callback
          }
        }
      }).$mount()
      let closeButton = vm.$el.querySelector('.close')
      expect(closeButton.textContent.trim()).to.eq('关闭')
      closeButton.click()
      expect(callback).to.have.been.called
    })
    it('接受enableHtml', () => {
      let Constractor = Vue.extend(Toast)
      let vm = new Constractor({
        propsData: {
          enableHtml: true
        }
      })
      vm.$slots.default = '<strong id="testHtml">测试</strong>'
      vm.$mount()
      let strong = vm.$el.querySelector('#testHtml')
      expect(strong).to.exist
    })
    it('接受position', () => {
      let Constractor = Vue.extend(Toast)
      let vm = new Constractor({
        propsData: {
          position: 'bottom'
        }
      }).$mount()
      expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
    })
  })
})
