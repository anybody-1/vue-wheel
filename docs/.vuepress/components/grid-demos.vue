<template>
  <div>
    <h3>简单用法-网格分布</h3>
    <lv-row>
      <lv-col span="12">
        <div class="demo">12</div>
      </lv-col>
      <lv-col span="12">
        <div class="demo">12</div>
      </lv-col>
    </lv-row>
    <lv-row>
      <lv-col span="8">
        <div class="demo">8</div>
      </lv-col>
      <lv-col span="8">
        <div class="demo">8</div>
      </lv-col>
      <lv-col span="8">
        <div class="demo">8</div>
      </lv-col>
    </lv-row>
    <lv-row>
      <lv-col span="6">
        <div class="demo">6</div>
      </lv-col>
      <lv-col span="6">
        <div class="demo">6</div>
      </lv-col>
      <lv-col span="6">
        <div class="demo">6</div>
      </lv-col>
      <lv-col span="6">
        <div class="demo">6</div>
      </lv-col>
    </lv-row>
    <lv-row>
      <lv-col span="4">
        <div class="demo">4</div>
      </lv-col>
      <lv-col span="4">
        <div class="demo">4</div>
      </lv-col>
      <lv-col span="4">
        <div class="demo">4</div>
      </lv-col>
      <lv-col span="4">
        <div class="demo">4</div>
      </lv-col>
      <lv-col span="4">
        <div class="demo">4</div>
      </lv-col>
      <lv-col span="4">
        <div class="demo">4</div>
      </lv-col>
    </lv-row>
    <h3>代码</h3>
    <pre><code>{{simpleContent}}</code></pre>

    <h3>设置gutter</h3>
    <lv-row gutter="20">
      <lv-col span="12">
        <div class="demo">12</div>
      </lv-col>
      <lv-col span="12">
        <div class="demo">12</div>
      </lv-col>
    </lv-row>
    <lv-row gutter="20">
      <lv-col span="8">
        <div class="demo">8</div>
      </lv-col>
      <lv-col span="8">
        <div class="demo">8</div>
      </lv-col>
      <lv-col span="8">
        <div class="demo">8</div>
      </lv-col>
    </lv-row>
    <lv-row gutter="20">
      <lv-col span="6">
        <div class="demo">6</div>
      </lv-col>
      <lv-col span="6">
        <div class="demo">6</div>
      </lv-col>
      <lv-col span="6">
        <div class="demo">6</div>
      </lv-col>
      <lv-col span="6">
        <div class="demo">6</div>
      </lv-col>
    </lv-row>
    <h3>代码</h3>
    <pre><code>{{gutterHtml}}</code></pre>

    <h3>设置offset</h3>
    <lv-row gutter="20">
      <lv-col span="6" offset="6">
        <div class="demo">6</div>
      </lv-col>
      <lv-col span="12">
        <div class="demo">12</div>
      </lv-col>
    </lv-row>
    <lv-row gutter="20">
      <lv-col span="8">
        <div class="demo">8</div>
      </lv-col>
      <lv-col span="8" offset="8">
        <div class="demo">8</div>
      </lv-col>
    </lv-row>
    <lv-row gutter="20">
      <lv-col span="6">
        <div class="demo">6</div>
      </lv-col>
      <lv-col span="6" offset="6">
        <div class="demo">6</div>
      </lv-col>
      <lv-col span="6">
        <div class="demo">6</div>
      </lv-col>
    </lv-row>
    <h3>代码</h3>
    <pre><code>{{offsetHtml}}</code></pre>

    <h3>配置响应式-ipad、narrowPc、pc、widePc</h3>
    <lv-row>
      <lv-col span="23" offset="1" :narrow-pc="{span:12,offset:12}">
        <div class="demo">23</div>
      </lv-col>
    </lv-row>
    <lv-row>
      <lv-col span="12" :narrow-pc="{span:8}">
        <div class="demo">12</div>
      </lv-col>
      <lv-col span="12" :narrow-pc="{span:8}">
        <div class="demo">12</div>
      </lv-col>
      <lv-col span="12" :narrow-pc="{span:8}">
        <div class="demo">12</div>
      </lv-col>
    </lv-row>
    <lv-row>
      <lv-col span="12" :narrow-pc="{span:6}">
        <div class="demo">12</div>
      </lv-col>
      <lv-col span="12" :narrow-pc="{span:6}">
        <div class="demo">12</div>
      </lv-col>
      <lv-col span="12" :ipad="{span:6}">
        <div class="demo">12</div>
      </lv-col>
      <lv-col span="12" :ipad="{span:6}">
        <div class="demo">12</div>
      </lv-col>
    </lv-row>
    <h3>代码</h3>
    <pre><code>{{offsetHtml}}</code></pre>
  </div>
</template>
<script>
import Vue from 'vue'
Vue.component('LvRow', () => import('../../../src/row'))
Vue.component('LvCol', () => import('../../../src/col'))

export default {
  data() {
    return {
      simpleContent: `
        <lv-row>
          <lv-col span="12">
            <div class="demo">12</div>
          </lv-col>
          <lv-col span="12">
            <div class="demo">12</div>
          </lv-col>
        </lv-row>
        <lv-row>
          <lv-col span="8">
            <div class="demo">8</div>
          </lv-col>
          <lv-col span="8">
            <div class="demo">8</div>
          </lv-col>
          <lv-col span="8">
            <div class="demo">8</div>
          </lv-col>
        </lv-row>
        <lv-row>
          <lv-col span="6">
            <div class="demo">6</div>
          </lv-col>
          <lv-col span="6">
            <div class="demo">6</div>
          </lv-col>
          <lv-col span="6">
            <div class="demo">6</div>
          </lv-col>
          <lv-col span="6">
            <div class="demo">6</div>
          </lv-col>
        </lv-row>
        <lv-row>
          <lv-col span="4">
            <div class="demo">4</div>
          </lv-col>
          <lv-col span="4">
            <div class="demo">4</div>
          </lv-col>
          <lv-col span="4">
            <div class="demo">4</div>
          </lv-col>
          <lv-col span="4">
            <div class="demo">4</div>
          </lv-col>
          <lv-col span="4">
            <div class="demo">4</div>
          </lv-col>
          <lv-col span="4">
            <div class="demo">4</div>
          </lv-col>
        </lv-row>
      `
        .replace(/^ {8}/gm, '')
        .trim(),
      gutterHtml: `
        <lv-row gutter="20">
          <lv-col span="12">
            <div class="demo">12</div>
          </lv-col>
          <lv-col span="12">
            <div class="demo">12</div>
          </lv-col>
        </lv-row>
        <lv-row gutter="20">
          <lv-col span="8">
            <div class="demo">8</div>
          </lv-col>
          <lv-col span="8">
            <div class="demo">8</div>
          </lv-col>
          <lv-col span="8">
            <div class="demo">8</div>
          </lv-col>
        </lv-row>
        <lv-row gutter="20">
          <lv-col span="6">
            <div class="demo">6</div>
          </lv-col>
          <lv-col span="6">
            <div class="demo">6</div>
          </lv-col>
          <lv-col span="6">
            <div class="demo">6</div>
          </lv-col>
          <lv-col span="6">
            <div class="demo">6</div>
          </lv-col>
        </lv-row>
      `
        .replace(/^ {8}/gm, '')
        .trim(),
      offsetHtml: `
        <lv-row gutter="20">
          <lv-col span="6" offset="6">
            <div class="demo">6</div>
          </lv-col>
          <lv-col span="12">
            <div class="demo">12</div>
          </lv-col>
        </lv-row>
        <lv-row gutter="20">
          <lv-col span="8">
            <div class="demo">8</div>
          </lv-col>
          <lv-col span="8" offset="8">
            <div class="demo">8</div>
          </lv-col>
        </lv-row>
        <lv-row gutter="20">
          <lv-col span="6">
            <div class="demo">6</div>
          </lv-col>
          <lv-col span="6" offset="6">
            <div class="demo">6</div>
          </lv-col>
          <lv-col span="6">
            <div class="demo">6</div>
          </lv-col>
        </lv-row>
      `
        .replace(/^ {8}/gm, '')
        .trim(),
      responHtml: `
        <lv-row>
          <lv-col span="23" offset="1" :narrow-pc="{span:12,offset:12}">
            <div class="demo">23</div>
          </lv-col>
        </lv-row>
        <lv-row>
          <lv-col span="12" :narrow-pc="{span:8}">
            <div class="demo">12</div>
          </lv-col>
          <lv-col span="12" :narrow-pc="{span:8}">
            <div class="demo">12</div>
          </lv-col>
          <lv-col span="12" :narrow-pc="{span:8}">
            <div class="demo">12</div>
          </lv-col>
        </lv-row>
        <lv-row>
          <lv-col span="12" :narrow-pc="{span:6}">
            <div class="demo">12</div>
          </lv-col>
          <lv-col span="12" :narrow-pc="{span:6}">
            <div class="demo">12</div>
          </lv-col>
          <lv-col span="12" :ipad="{span:6}">
            <div class="demo">12</div>
          </lv-col>
          <lv-col span="12" :ipad="{span:6}">
            <div class="demo">12</div>
          </lv-col>
        </lv-row>
        `
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.demo {
  background-color: #eee;
  border: 1px solid #9696;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>