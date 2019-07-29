import Toast from './toast'

let currentToast
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function(message, toastbutton) {
      if (currentToast) {
        currentToast.close()
      }
      currentToast = createToast({ Vue, message, propsData: toastbutton })
    }
  }
}

function createToast({ Vue, message, propsData }) {
  let constractor = Vue.extend(Toast)
  let toast = new constractor({ propsData })
  toast.$slots.default = message
  toast.$mount()
  document.body.appendChild(toast.$el)
  return toast
}
