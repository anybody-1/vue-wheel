<template>
  <div>
    <h3>简单用法</h3>
    <g-input value="张三"></g-input>
    <g-input value="王五" disabled></g-input>
    <g-input value="赵六" readonly></g-input>
    <h3>代码</h3>
    <pre><code>{{simpleContent}}</code></pre>

    <h3>展示错误信息</h3>
    <g-input value="陈七" error="姓名书写错误" @change="changeE"></g-input>
    <h3>代码</h3>
    <pre><code>{{errorHtml}}</code></pre>

    <h3>双向绑定`v-model`</h3>
    <g-input v-model="message"></g-input>
    <g-button @click="message+=1">+1</g-button>
    <div>{{ message }}</div>
    <h3>代码</h3>
    <pre><code>{{modelContentHtml}}</code></pre>
  </div>
</template>
<script>
import Vue from 'vue'
Vue.component('GButton', () => import('../../../src/button'))
Vue.component('GInput', () => import('../../../src/input'))

export default {
  data() {
    return {
      simpleContent: `
        <g-input value="张三"></g-input>
        <g-input value="王五" disabled></g-input>
        <g-input value="赵六" readonly></g-input>
      `
        .replace(/^ {8}/gm, '')
        .trim(),
      errorHtml: `
        <g-input value="陈七" error="姓名书写错误" @change="changeE"></g-input>
      `
        .replace(/^ {8}/gm, '')
        .trim(),
      modelContentHtml: `
        <g-input v-model="message"></g-input>
        <g-button @click="message+=1">+1</g-button>
        <div>{{ message }}</div>
      `
        .replace(/^ {8}/gm, '')
        .trim(),
      message: 1
    }
  },
  methods: {
    changeE(value) {
      console.log(value)
    }
  }
}
</script>