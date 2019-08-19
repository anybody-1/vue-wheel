<template>
  <div>
    <h3>简单用法-3秒自动关闭</h3>
    <lv-button @click="$toast('上边弹出',{position: 'top'})">top</lv-button>
    <lv-button @click="$toast('底部弹出',{position: 'bottom'})">bottom</lv-button>
    <lv-button @click="$toast('中间弹出',{position: 'middle'})">middle</lv-button>
    <h3>代码</h3>
    <pre><code>{{content}}</code></pre>

    <h3>展示HTML</h3>
    <lv-button @click="showToast">HTML</lv-button>
    <h3>代码</h3>
    <pre><code>{{contentHtml}}</code></pre>

    <h3>设置closeButton</h3>
    <lv-button @click="setCloseButton">设置关闭按钮</lv-button>
    <h3>代码</h3>
    <pre><code>{{closeContentHtml}}</code></pre>
  </div>
</template>
<script>
import Plugin from '../../../src/plugin'
// import GButton from '../../../src/button'
import Vue from 'vue'
Vue.component('LvButton', () => import('../../../src/button'))

Vue.use(Plugin)

export default {
  // components: { GButton },
  data() {
    return {
      content: `
        <lv-button @click="$toast('上边弹出',{position: 'top'})">top</lv-button>
        <lv-button @click="$toast('底部弹出',{position: 'bottom'})">bottom</lv-button>
        <lv-button @click="$toast('中间弹出',{position: 'middle'})">middle</lv-button>
      `
        .replace(/^ {8}/gm, '')
        .trim(),
      contentHtml: `
        <lv-button @click="showToast">HTML</lv-button>
        methods: {
          showToast() {
            this.$toast('<strong style="color: yellow;">正式通知你</strong>', {
              enableHtml: true
            })
          }
        }
      `
        .replace(/^ {8}/gm, '')
        .trim(),
      closeContentHtml: `
        <lv-button @click="setCloseButton">设置关闭按钮</lv-button>
        methods: {
          setCloseButton(position) {
            this.$toast('发工资了,兄弟', {
              closeButton: {
                text: '收到'
              },
              autoClose: false,
              position
            })
          }
        }
      `
        .replace(/^ {8}/gm, '')
        .trim()
    }
  },
  methods: {
    showToast() {
      this.$toast('<strong style="color: yellow;">正式通知你</strong>', {
        enableHtml: true
      })
    },
    setCloseButton(position) {
      this.$toast('发工资了,兄弟', {
        closeButton: {
          text: '收到'
        },
        autoClose: false,
        position
      })
    }
  }
}
</script>