import Toast from './toast'

let currentToast
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function(message, toastbutton) {
      if (currentToast) {
        currentToast.close()
      }
      currentToast = createToast({
        Vue,
        message,
        propsData: toastbutton,
        clearCurrentToast: () => {
          currentToast = null
        }
      })
    }
  }
}

function createToast({ Vue, message, propsData, clearCurrentToast }) {
  let constractor = Vue.extend(Toast)
  let toast = new constractor({ propsData })
  toast.$slots.default = message
  toast.$mount()
  toast.$on('close', clearCurrentToast)
  document.body.appendChild(toast.$el)
  return toast
}
