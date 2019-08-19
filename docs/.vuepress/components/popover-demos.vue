<template>
  <div>
    <div style="margin-bottom: 20px;">
      <h3>click触发</h3>
      <lv-popover>
        <template slot="content">
          <span>上边内容</span>
        </template>
        <lv-button>上边</lv-button>
      </lv-popover>
      <lv-popover position="bottom">
        <template slot="content">
          <span>下边内容</span>
        </template>
        <lv-button>下边</lv-button>
      </lv-popover>
      <lv-popover position="left">
        <template slot="content">
          <span>左边内容</span>
        </template>
        <lv-button>左边</lv-button>
      </lv-popover>
      <lv-popover position="right">
        <template slot="content">
          <span>右边内容</span>
        </template>
        <lv-button>右边</lv-button>
      </lv-popover>
    </div>
    <h3>代码</h3>
    <pre><code>{{ clickContent }}</code></pre>
    <div>
      <h3>hover触发</h3>
      <lv-popover trigger="hover">
        <template slot="content">
          <span>上边内容</span>
        </template>
        <lv-button>上边</lv-button>
      </lv-popover>
      <lv-popover position="bottom" trigger="hover">
        <template slot="content">
          <span>下边内容</span>
        </template>
        <lv-button>下边</lv-button>
      </lv-popover>
      <lv-popover position="left" trigger="hover">
        <template slot="content">
          <span>左边内容</span>
        </template>
        <lv-button>左边</lv-button>
      </lv-popover>
      <lv-popover position="right" trigger="hover">
        <template slot="content">
          <span>右边内容</span>
        </template>
        <lv-button>右边</lv-button>
      </lv-popover>
    </div>
    <h3>代码</h3>
    <pre><code>{{ hoverContent }}</code></pre>
  </div>
</template>
<script>
import Vue from 'vue'
Vue.component('LvPopover', () => import('../../../src/popover'))
Vue.component('LvButton', () => import('../../../src/button'))
// import GPopover from '../../../src/popover'
// import GButton from '../../../src/button'
export default {
  // components: { GPopover, GButton },
  data() {
    return {
      clickContent: `
        <div style="margin-bottom: 20px;">
          <h2>click触发</h2>
          <lv-popover>
            <template slot="content">
              <span>上边内容</span>
            </template>
            <lv-button>上边</lv-button>
          </lv-popover>
          <lv-popover position="bottom">
            <template slot="content">
              <span>下边内容</span>
            </template>
            <lv-button>下边</lv-button>
          </lv-popover>
          <lv-popover position="left">
            <template slot="content">
              <span>左边内容</span>
            </template>
            <lv-button>左边</lv-button>
          </lv-popover>
          <lv-popover position="right">
            <template slot="content">
              <span>右边内容</span>
            </template>
            <lv-button>右边</lv-button>
          </lv-popover>
        </div>
      `
        .replace(/^ {8}/gm, '')
        .trim(),
      hoverContent: `
        <div>
          <h2>hover触发</h2>
          <lv-popover trigger="hover">
            <template slot="content">
              <span>上边内容</span>
            </template>
            <lv-button>上边</lv-button>
          </lv-popover>
          <lv-popover position="bottom" trigger="hover">
            <template slot="content">
              <span>下边内容</span>
            </template>
            <lv-button>下边</lv-button>
          </lv-popover>
          <lv-popover position="left" trigger="hover">
            <template slot="content">
              <span>左边内容</span>
            </template>
            <lv-button>左边</lv-button>
          </lv-popover>
          <lv-popover position="right" trigger="hover">
            <template slot="content">
              <span>右边内容</span>
            </template>
            <lv-button>右边</lv-button>
          </lv-popover>
        </div>
        `
        .replace(/^ {8}/gm, '')
        .trim()
    }
  }
}
</script>