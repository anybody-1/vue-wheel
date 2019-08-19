<template>
  <div>
    <h3>简单用法</h3>
    <lv-input value="张三"></lv-input>
    <lv-input value="王五" disabled></lv-input>
    <lv-input value="赵六" readonly></lv-input>
    <h3>代码</h3>
    <pre><code>{{simpleContent}}</code></pre>

    <h3>展示错误信息</h3>
    <lv-input value="陈七" error="姓名书写错误" @change="changeE"></lv-input>
    <h3>代码</h3>
    <pre><code>{{errorHtml}}</code></pre>

    <h3>双向绑定-v-model</h3>
    <lv-input v-model="message"></lv-input>
    <lv-button @click="message+=1">加1</lv-button>
    <div>{{ message }}</div>
    <h3>代码</h3>
    <pre><code>{{modelContentHtml}}</code></pre>
  </div>
</template>
<script>
import Vue from 'vue'
Vue.component('LvButton', () => import('../../../src/button'))
Vue.component('LvInput', () => import('../../../src/input'))

export default {
  data() {
    return {
      simpleContent: `
        <lv-input value="张三"></lv-input>
        <lv-input value="王五" disabled></lv-input>
        <lv-input value="赵六" readonly></lv-input>
      `
        .replace(/^ {8}/gm, '')
        .trim(),
      errorHtml: `
        <lv-input value="陈七" error="姓名书写错误" @change="changeE"></lv-input>
      `
        .replace(/^ {8}/gm, '')
        .trim(),
      modelContentHtml: `
        <lv-input v-model="message"></lv-input>
        <lv-button @click="message+=1">+1</lv-button>
        <div>{{ message }}</div>
      `
        .replace(/^ {8}/gm, '')
        .trim(),
      message: '测试'
    }
  },
  methods: {
    changeE(value) {
      console.log(value)
    }
  }
}
</script>