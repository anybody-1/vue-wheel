<template>
  <div>
    <div style="margin-bottom: 20px;">
      <h3>click触发</h3>
      <g-popover>
        <template slot="content">
          <span>上边内容</span>
        </template>
        <g-button>上边</g-button>
      </g-popover>
      <g-popover position="bottom">
        <template slot="content">
          <span>下边内容</span>
        </template>
        <g-button>下边</g-button>
      </g-popover>
      <g-popover position="left">
        <template slot="content">
          <span>左边内容</span>
        </template>
        <g-button>左边</g-button>
      </g-popover>
      <g-popover position="right">
        <template slot="content">
          <span>右边内容</span>
        </template>
        <g-button>右边</g-button>
      </g-popover>
    </div>
    <h3>代码</h3>
    <pre><code>{{ clickContent }}</code></pre>
    <div>
      <h3>hover触发</h3>
      <g-popover trigger="hover">
        <template slot="content">
          <span>上边内容</span>
        </template>
        <g-button>上边</g-button>
      </g-popover>
      <g-popover position="bottom" trigger="hover">
        <template slot="content">
          <span>下边内容</span>
        </template>
        <g-button>下边</g-button>
      </g-popover>
      <g-popover position="left" trigger="hover">
        <template slot="content">
          <span>左边内容</span>
        </template>
        <g-button>左边</g-button>
      </g-popover>
      <g-popover position="right" trigger="hover">
        <template slot="content">
          <span>右边内容</span>
        </template>
        <g-button>右边</g-button>
      </g-popover>
    </div>
    <h3>代码</h3>
    <pre><code>{{ hoverContent }}</code></pre>
  </div>
</template>
<script>
import Vue from 'vue'
Vue.component('GPopover', () => import('../../../src/popover'))
Vue.component('GButton', () => import('../../../src/button'))
// import GPopover from '../../../src/popover'
// import GButton from '../../../src/button'
export default {
  // components: { GPopover, GButton },
  data() {
    return {
      clickContent: `
        <div style="margin-bottom: 20px;">
          <h2>click触发</h2>
          <g-popover>
            <template slot="content">
              <span>上边内容</span>
            </template>
            <g-button>上边</g-button>
          </g-popover>
          <g-popover position="bottom">
            <template slot="content">
              <span>下边内容</span>
            </template>
            <g-button>下边</g-button>
          </g-popover>
          <g-popover position="left">
            <template slot="content">
              <span>左边内容</span>
            </template>
            <g-button>左边</g-button>
          </g-popover>
          <g-popover position="right">
            <template slot="content">
              <span>右边内容</span>
            </template>
            <g-button>右边</g-button>
          </g-popover>
        </div>
      `
        .replace(/^ {8}/gm, '')
        .trim(),
      hoverContent: `
        <div>
          <h2>hover触发</h2>
          <g-popover trigger="hover">
            <template slot="content">
              <span>上边内容</span>
            </template>
            <g-button>上边</g-button>
          </g-popover>
          <g-popover position="bottom" trigger="hover">
            <template slot="content">
              <span>下边内容</span>
            </template>
            <g-button>下边</g-button>
          </g-popover>
          <g-popover position="left" trigger="hover">
            <template slot="content">
              <span>左边内容</span>
            </template>
            <g-button>左边</g-button>
          </g-popover>
          <g-popover position="right" trigger="hover">
            <template slot="content">
              <span>右边内容</span>
            </template>
            <g-button>右边</g-button>
          </g-popover>
        </div>
        `
        .replace(/^ {8}/gm, '')
        .trim()
    }
  }
}
</script>