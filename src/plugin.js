import Toast from './toast'
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function(message) {
      let constractor = Vue.extend(Toast)
      let toast = new constractor()
      toast.$slots.default = message
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}
