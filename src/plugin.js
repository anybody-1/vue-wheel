import Toast from './toast'
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function(message, toastbutton) {
      let constractor = Vue.extend(Toast)
      let toast = new constractor({
        propsData: toastbutton
      })
      toast.$slots.default = message
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}
