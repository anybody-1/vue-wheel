<template>
  <div>
    <h3>简单用法-网格分布</h3>
    <g-row>
      <g-col span="12">
        <div class="demo">12</div>
      </g-col>
      <g-col span="12">
        <div class="demo">12</div>
      </g-col>
    </g-row>
    <g-row>
      <g-col span="8">
        <div class="demo">8</div>
      </g-col>
      <g-col span="8">
        <div class="demo">8</div>
      </g-col>
      <g-col span="8">
        <div class="demo">8</div>
      </g-col>
    </g-row>
    <g-row>
      <g-col span="6">
        <div class="demo">6</div>
      </g-col>
      <g-col span="6">
        <div class="demo">6</div>
      </g-col>
      <g-col span="6">
        <div class="demo">6</div>
      </g-col>
      <g-col span="6">
        <div class="demo">6</div>
      </g-col>
    </g-row>
    <g-row>
      <g-col span="4">
        <div class="demo">4</div>
      </g-col>
      <g-col span="4">
        <div class="demo">4</div>
      </g-col>
      <g-col span="4">
        <div class="demo">4</div>
      </g-col>
      <g-col span="4">
        <div class="demo">4</div>
      </g-col>
      <g-col span="4">
        <div class="demo">4</div>
      </g-col>
      <g-col span="4">
        <div class="demo">4</div>
      </g-col>
    </g-row>
    <h3>代码</h3>
    <pre><code>{{simpleContent}}</code></pre>

    <h3>设置gutter</h3>
    <g-row gutter="20">
      <g-col span="12">
        <div class="demo">12</div>
      </g-col>
      <g-col span="12">
        <div class="demo">12</div>
      </g-col>
    </g-row>
    <g-row gutter="20">
      <g-col span="8">
        <div class="demo">8</div>
      </g-col>
      <g-col span="8">
        <div class="demo">8</div>
      </g-col>
      <g-col span="8">
        <div class="demo">8</div>
      </g-col>
    </g-row>
    <g-row gutter="20">
      <g-col span="6">
        <div class="demo">6</div>
      </g-col>
      <g-col span="6">
        <div class="demo">6</div>
      </g-col>
      <g-col span="6">
        <div class="demo">6</div>
      </g-col>
      <g-col span="6">
        <div class="demo">6</div>
      </g-col>
    </g-row>
    <h3>代码</h3>
    <pre><code>{{gutterHtml}}</code></pre>

    <h3>设置offset</h3>
    <g-row gutter="20">
      <g-col span="6" offset="6">
        <div class="demo">6</div>
      </g-col>
      <g-col span="12">
        <div class="demo">12</div>
      </g-col>
    </g-row>
    <g-row gutter="20">
      <g-col span="8">
        <div class="demo">8</div>
      </g-col>
      <g-col span="8" offset="8">
        <div class="demo">8</div>
      </g-col>
    </g-row>
    <g-row gutter="20">
      <g-col span="6">
        <div class="demo">6</div>
      </g-col>
      <g-col span="6" offset="6">
        <div class="demo">6</div>
      </g-col>
      <g-col span="6">
        <div class="demo">6</div>
      </g-col>
    </g-row>
    <h3>代码</h3>
    <pre><code>{{offsetHtml}}</code></pre>

    <h3>配置响应式-ipad、narrowPc、pc、widePc</h3>
    <g-row>
      <g-col span="23" offset="1" :narrow-pc="{span:12,offset:12}">
        <div class="demo">23</div>
      </g-col>
    </g-row>
    <g-row>
      <g-col span="12" :narrow-pc="{span:8}">
        <div class="demo">12</div>
      </g-col>
      <g-col span="12" :narrow-pc="{span:8}">
        <div class="demo">12</div>
      </g-col>
      <g-col span="12" :narrow-pc="{span:8}">
        <div class="demo">12</div>
      </g-col>
    </g-row>
    <g-row>
      <g-col span="12" :narrow-pc="{span:6}">
        <div class="demo">12</div>
      </g-col>
      <g-col span="12" :narrow-pc="{span:6}">
        <div class="demo">12</div>
      </g-col>
      <g-col span="12" :ipad="{span:6}">
        <div class="demo">12</div>
      </g-col>
      <g-col span="12" :ipad="{span:6}">
        <div class="demo">12</div>
      </g-col>
    </g-row>
    <h3>代码</h3>
    <pre><code>{{offsetHtml}}</code></pre>
  </div>
</template>
<script>
import Vue from 'vue'
Vue.component('GRow', () => import('../../../src/row'))
Vue.component('GCol', () => import('../../../src/col'))

export default {
  data() {
    return {
      simpleContent: `
        <g-row>
          <g-col span="12">
            <div class="demo">12</div>
          </g-col>
          <g-col span="12">
            <div class="demo">12</div>
          </g-col>
        </g-row>
        <g-row>
          <g-col span="8">
            <div class="demo">8</div>
          </g-col>
          <g-col span="8">
            <div class="demo">8</div>
          </g-col>
          <g-col span="8">
            <div class="demo">8</div>
          </g-col>
        </g-row>
        <g-row>
          <g-col span="6">
            <div class="demo">6</div>
          </g-col>
          <g-col span="6">
            <div class="demo">6</div>
          </g-col>
          <g-col span="6">
            <div class="demo">6</div>
          </g-col>
          <g-col span="6">
            <div class="demo">6</div>
          </g-col>
        </g-row>
        <g-row>
          <g-col span="4">
            <div class="demo">4</div>
          </g-col>
          <g-col span="4">
            <div class="demo">4</div>
          </g-col>
          <g-col span="4">
            <div class="demo">4</div>
          </g-col>
          <g-col span="4">
            <div class="demo">4</div>
          </g-col>
          <g-col span="4">
            <div class="demo">4</div>
          </g-col>
          <g-col span="4">
            <div class="demo">4</div>
          </g-col>
        </g-row>
      `
        .replace(/^ {8}/gm, '')
        .trim(),
      gutterHtml: `
        <g-row gutter="20">
          <g-col span="12">
            <div class="demo">12</div>
          </g-col>
          <g-col span="12">
            <div class="demo">12</div>
          </g-col>
        </g-row>
        <g-row gutter="20">
          <g-col span="8">
            <div class="demo">8</div>
          </g-col>
          <g-col span="8">
            <div class="demo">8</div>
          </g-col>
          <g-col span="8">
            <div class="demo">8</div>
          </g-col>
        </g-row>
        <g-row gutter="20">
          <g-col span="6">
            <div class="demo">6</div>
          </g-col>
          <g-col span="6">
            <div class="demo">6</div>
          </g-col>
          <g-col span="6">
            <div class="demo">6</div>
          </g-col>
          <g-col span="6">
            <div class="demo">6</div>
          </g-col>
        </g-row>
      `
        .replace(/^ {8}/gm, '')
        .trim(),
      offsetHtml: `
        <g-row gutter="20">
          <g-col span="6" offset="6">
            <div class="demo">6</div>
          </g-col>
          <g-col span="12">
            <div class="demo">12</div>
          </g-col>
        </g-row>
        <g-row gutter="20">
          <g-col span="8">
            <div class="demo">8</div>
          </g-col>
          <g-col span="8" offset="8">
            <div class="demo">8</div>
          </g-col>
        </g-row>
        <g-row gutter="20">
          <g-col span="6">
            <div class="demo">6</div>
          </g-col>
          <g-col span="6" offset="6">
            <div class="demo">6</div>
          </g-col>
          <g-col span="6">
            <div class="demo">6</div>
          </g-col>
        </g-row>
      `
        .replace(/^ {8}/gm, '')
        .trim(),
      responHtml: `
        <g-row>
          <g-col span="23" offset="1" :narrow-pc="{span:12,offset:12}">
            <div class="demo">23</div>
          </g-col>
        </g-row>
        <g-row>
          <g-col span="12" :narrow-pc="{span:8}">
            <div class="demo">12</div>
          </g-col>
          <g-col span="12" :narrow-pc="{span:8}">
            <div class="demo">12</div>
          </g-col>
          <g-col span="12" :narrow-pc="{span:8}">
            <div class="demo">12</div>
          </g-col>
        </g-row>
        <g-row>
          <g-col span="12" :narrow-pc="{span:6}">
            <div class="demo">12</div>
          </g-col>
          <g-col span="12" :narrow-pc="{span:6}">
            <div class="demo">12</div>
          </g-col>
          <g-col span="12" :ipad="{span:6}">
            <div class="demo">12</div>
          </g-col>
          <g-col span="12" :ipad="{span:6}">
            <div class="demo">12</div>
          </g-col>
        </g-row>
        `
    }
  },
  methods: {}
}
</script>
<style lang="scss">
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