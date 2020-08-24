const expect = chai.expect;
 import Vue from 'vue'
 import Input from '../src/input'

 Vue.config.productionTip = false
 Vue.config.devtools = false

 describe('Input', () => {
     it('存在.', () => {
         expect(Input).to.be.ok
     })
     describe('props', () => { 
        const Constructor = Vue.extend(Input)
        let vm
         afterEach(() => {
            vm.$destroy()
         })
        it('接受 value.', () => {
            // const Constructor = Vue.extend(Input)
            vm = new Constructor({
            propsData: {
                value: '1234'
            }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('1234')
            // vm.$destroy()
         })
         it('接受 disabled.', () => {
            // const Constructor = Vue.extend(Input)
            vm = new Constructor({
            propsData: {
                disabled: true
            }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
            // vm.$destroy()
         })
         it('接受 readonly.', () => {
            // const Constructor = Vue.extend(Input)
            vm = new Constructor({
            propsData: {
                readonly: true
            }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)
            // vm.$destroy()
         })
         it('接受 error.', () => {
            // const Constructor = Vue.extend(Input)
            vm = new Constructor({
            propsData: {
                error: '你错了'
            }
            }).$mount()
            const errorMessage = vm.$el.querySelector('.errorMessage')
            expect(errorMessage.innerText).to.equal('你错了')
            const useElement = vm.$el.querySelector('use')
             expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            // vm.$destroy()
         })
     })
     describe('事件', () => {
        const Constructor = Vue.extend(Input)
        let vm
         afterEach(() => {
            vm.$destroy()
         })
         it('支持change/input/focus/blur事件', () => {
             ['change','input','focus','blur'].forEach(eName => {
                vm = new Constructor({}).$mount()
                const callback = sinon.fake();
                vm.$on(eName, callback)
                //触发input的change/input/focus/blur事件
                let event = new Event(eName)
                Object.defineProperty(event,'target', {value: {value: 'hi'}, enumerable: true})
                let inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                expect(callback).to.have.been.calledWith('hi')
             })
         })
     })
     
 })