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
Vue.component('g-button-group', ButtonGroup)
Vue.use(Plugin)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    message: '其他'
  },
  created() {
    // setTimeout(() => {
    //     let event = new Event('change')
    //     let inputElement = this.$el.querySelector('input')
    //     inputElement.dispatchEvent(event)
    // },3000)
    // this.$toast('我是Toast')
  },
  methods: {
    showToast() {
      this.$toast('我是toast')
    }
  }
})

// import chai from 'chai'
// import spies from 'chai-spies'
// chai.use(spies)
// const expect = chai.expect
// try {
//     //单元测试
// {
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData: {
//             icon: 'settings'
//         }
//     })
//     vm.$mount('#test')
//     let useElement = vm.$el.querySelector('use')
//     let href = useElement.getAttribute('xlink:href')
//     expect(href).to.eq('#i-settings')
//     vm.$el.remove()
//     vm.$destroy()
// }
// {
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData: {
//             icon: 'settings',
//             loading: true
//         }
//     })
//     vm.$mount()
//     let useElement = vm.$el.querySelector('use')
//     let href = useElement.getAttribute('xlink:href')
//     expect(href).to.eq('#i-loading')
//     vm.$el.remove()
//     vm.$destroy()
// }
// {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData: {
//             icon: 'settings'
//         }
//     })
//     vm.$mount(div)
//     let svg = vm.$el.querySelector('svg')
//     let {order} = window.getComputedStyle(svg)
//     expect(order).to.eq('1')
//     vm.$el.remove()
//     vm.$destroy()
// }
// {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData: {
//             icon: 'settings',
//             iconPosition: 'right'
//         }
//     })
//     vm.$mount(div)
//     let svg = vm.$el.querySelector('svg')
//     let {order} = window.getComputedStyle(svg)
//     expect(order).to.eq('2')
//     vm.$el.remove()
//     vm.$destroy()
// }
// {
//     //mock
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData: {
//             icon: 'settings'
//         }
//     })
//     vm.$mount()
//     let spy = chai.spy(function(){})
//     vm.$on('click', spy)
//     //希望这个函数被执行
//     let button = vm.$el
//     button.click()
//     expect(spy).to.have.been.called()
// }
// } catch (error) {
//     window.errors = [error]
// } finally {
//     window.errors&&window.errors.forEach(error => {
//         console.error(error.message)
//     })
// }
