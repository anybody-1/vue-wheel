<template>
  <div id="app" style="padding: 100px;">
    <!-- <lv-collapse :selected.sync='selectLabel'>
      <lv-collapse-item title="标题1" name='1'>
        内容1
      </lv-collapse-item>
      <lv-collapse-item title="标题2" name='2'>
        内容2
      </lv-collapse-item>
      <lv-collapse-item title="标题3" name='3'>
        内容3
      </lv-collapse-item>
    </lv-collapse>
    {{ selectLabel }}


    <lv-collapse single :selected.sync='selectLabel'>
      <lv-collapse-item title="标题1" name='1'>
        内容1
      </lv-collapse-item>
      <lv-collapse-item title="标题2" name='2'>
        内容2
      </lv-collapse-item>
      <lv-collapse-item title="标题3" name='3'>
        内容3
      </lv-collapse-item>
    </lv-collapse>-->

    <div style="margin-bottom: 20px;">
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
    <lv-cascader
      :source.sync="source"
      popover-height="200px"
      :selected.sync="selected"
      :load="loadData"
    ></lv-cascader>

    <!-- <div>
      <lv-popover trigger='hover'>
        <template slot='content'>
          <span>上边内容</span>
        </template>
        <lv-button>上边</lv-button>
      </lv-popover>
      <lv-popover position='bottom' trigger='hover'>
        <template slot='content'>
          <span>下边内容</span>
        </template>
        <lv-button>下边</lv-button>
      </lv-popover>
      <lv-popover position='left' trigger='hover'>
        <template slot='content'>
          <span>左边内容</span>
        </template>
        <lv-button>左边</lv-button>
      </lv-popover>
      <lv-popover position='right' trigger='hover'>
        <template slot='content'>
          <span>右边内容</span>
        </template>
        <lv-button>右边</lv-button>
      </lv-popover>
    </div>-->

    <!-- <lv-tabs :selected.sync='selectedKey'>
      <lv-tabs-head>
        <template slot='action'>
          <lv-button>操作</lv-button>
        </template>
        <lv-tabs-item name='sport'>
          体育
        </lv-tabs-item>
        <lv-tabs-item name='finance' disabled>
          <lv-icon name='settings'></lv-icon>财经
        </lv-tabs-item>
        <lv-tabs-item name='international'>
          国际
        </lv-tabs-item>
      </lv-tabs-head>
      <lv-tabs-body>
        <lv-tabs-pane name='sport'>
          体育资讯
        </lv-tabs-pane>
        <lv-tabs-pane name='finance'>
          财经资讯
        </lv-tabs-pane>
        <lv-tabs-pane name='international'>
          国际资讯
        </lv-tabs-pane>
      </lv-tabs-body>
    </lv-tabs>-->
    <!-- <lv-button @click="showToast('top')">top</lv-button>
    <lv-button @click="showToast('bottom')">bottom</lv-button>
    <lv-button @click="showToast('middle')">middle</lv-button>
    <lv-layout style='height:100vh;'>
      <lv-sider>sider</lv-sider>
      <lv-layout>
        <lv-header>header</lv-header>
        <lv-content>content</lv-content>
        <lv-footer>footer</lv-footer>
      </lv-layout>

    </lv-layout>
    <lv-row>
      <lv-col span='23' offset='1' :narrow-pc='{span:12,offset:12}'>
    <div class="demo"></div>-->
    <!-- </lv-col>
      <lv-col span='24' :narrow-pc='{span:8}'>
        <div class="demo"></div>
      </lv-col>
      <lv-col span='24' :narrow-pc='{span:8}'>
        <div class="demo"></div>
      </lv-col>
      <lv-col span='24' :narrow-pc='{span:8}'>
        <div class="demo"></div>
      </lv-col>
      <lv-col span='24' :narrow-pc='{span:8}'>
        <div class="demo"></div>
      </lv-col>
      <lv-col span='24' :narrow-pc='{span:8}'>
        <div class="demo"></div>
    </lv-col>-->
    <!-- </lv-row> -->
    <!-- <lv-row gutter="20">
        <lv-col
          span="24"
          :ipad="{span:8}"
          :narrow-pc="{span:4}"
          :pc="{span:2}"
          :wide-pc="{span:1}"
          >1</lv-col
        >
        <lv-col
          span="24"
          :ipad="{span:16}"
          :narrow-pc="{span:20}"
          :pc="{span:22}"
          :wide-pc="{span:1}"
          >2</lv-col
        >
      </lv-row>
      <hr />
      <div style="margin-bottom: 20px;">
        <lv-button icon="settings">设置</lv-button>
        <lv-button icon="settings" icon-position="right">设置</lv-button>
        <lv-button icon="settings" :loading="true">设置</lv-button>
        <lv-button-group>
          <lv-button icon="left">上一页</lv-button>
          <lv-button>更多</lv-button>
          <lv-button icon="right" icon-position="right">下一页</lv-button>
        </lv-button-group>
    </div>-->
    <!-- <div class="box">
      <lv-input value="张三"></lv-input>
      <lv-input value="王五" disabled></lv-input>
      <lv-input value="赵六" readonly></lv-input>
    </div>
    <div class="box">
      <lv-input value="陈七" error="姓名书写错误" @change="changeE"></lv-input>
    </div>
    <div class="box">
      <lv-input v-model="message"></lv-input>
      <lv-button @click="message+=1">+1</lv-button>
    </div>-->
  </div>
</template>

<script>
import db from "./db.js";
function axios(parentId = 0) {
  return new Promise((success, fail) => {
    setTimeout(() => {
      let result = db.filter((item) => item.parent_id === parentId);
      result.forEach((node) => {
        node.isLeaf =
          db.filter((item) => item.parent_id === node.id).length <= 0;
      });
      success(result);
    }, 1000);
  });
}
export default {
  name: "demo",
  data() {
    return {
      loading1: false,
      message: 4,
      selectedKey: "sport",
      selected: [],
      selectLabel: ["3"],
      source: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致",
                },
                {
                  value: "fankui",
                  label: "反馈",
                },
                {
                  value: "xiaolv",
                  label: "效率",
                },
                {
                  value: "kekong",
                  label: "可控",
                },
              ],
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航",
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航",
                },
              ],
            },
          ],
        },
        {
          value: "zujian",
          label: "组件",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Layout 布局",
                },
                {
                  value: "color",
                  label: "Color 色彩",
                },
                {
                  value: "typography",
                  label: "Typography 字体",
                },
                {
                  value: "icon",
                  label: "Icon 图标",
                },
                {
                  value: "button",
                  label: "Button 按钮",
                },
              ],
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Radio 单选框",
                },
                {
                  value: "checkbox",
                  label: "Checkbox 多选框",
                },
                {
                  value: "input",
                  label: "Input 输入框",
                },
                {
                  value: "input-number",
                  label: "InputNumber 计数器",
                },
                {
                  value: "select",
                  label: "Select 选择器",
                },
                {
                  value: "cascader",
                  label: "Cascader 级联选择器",
                },
                {
                  value: "switch",
                  label: "Switch 开关",
                },
                {
                  value: "slider",
                  label: "Slider 滑块",
                },
                {
                  value: "time-picker",
                  label: "TimePicker 时间选择器",
                },
                {
                  value: "date-picker",
                  label: "DatePicker 日期选择器",
                },
                {
                  value: "datetime-picker",
                  label: "DateTimePicker 日期时间选择器",
                },
                {
                  value: "upload",
                  label: "Upload 上传",
                },
                {
                  value: "rate",
                  label: "Rate 评分",
                },
                {
                  value: "form",
                  label: "Form 表单",
                },
              ],
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Table 表格",
                },
                {
                  value: "tag",
                  label: "Tag 标签",
                },
                {
                  value: "progress",
                  label: "Progress 进度条",
                },
                {
                  value: "tree",
                  label: "Tree 树形控件",
                },
                {
                  value: "pagination",
                  label: "Pagination 分页",
                },
                {
                  value: "badge",
                  label: "Badge 标记",
                },
              ],
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert 警告",
                },
                {
                  value: "loading",
                  label: "Loading 加载",
                },
                {
                  value: "message",
                  label: "Message 消息提示",
                },
                {
                  value: "message-box",
                  label: "MessageBox 弹框",
                },
                {
                  value: "notification",
                  label: "Notification 通知",
                },
              ],
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "NavMenu 导航菜单",
                },
                {
                  value: "tabs",
                  label: "Tabs 标签页",
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb 面包屑",
                },
                {
                  value: "dropdown",
                  label: "Dropdown 下拉菜单",
                },
                {
                  value: "steps",
                  label: "Steps 步骤条",
                },
              ],
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog 对话框",
                },
                {
                  value: "tooltip",
                  label: "Tooltip 文字提示",
                },
                {
                  value: "popover",
                  label: "Popover 弹出框",
                },
                {
                  value: "card",
                  label: "Card 卡片",
                },
                {
                  value: "carousel",
                  label: "Carousel 走马灯",
                },
                {
                  value: "collapse",
                  label: "Collapse 折叠面板",
                },
              ],
            },
          ],
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components",
            },
            {
              value: "sketch",
              label: "Sketch Templates",
            },
            {
              value: "jiaohu",
              label: "组件交互文档",
            },
          ],
        },
      ],
    };
  },
  created() {
    axios(0).then((result) => {
      this.source = result;
    });
  },
  methods: {
    loadData({ id }, updateSource) {
      axios(id).then((res) => {
        updateSource(res);
      });
    },
    showToast(position) {
      this.$toast(`马上关闭: ${parseInt(Math.random() * 100)}`, {
        closeButton: {
          text: "关闭",
        },
        autoClose: false,
        position,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  --button-height: 32px;
  --font-size: 14px;
  --button-background: white;
  --button-active-background: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
}

body {
  font-size: var(--font-size);
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.sider {
  background: #333;
  width: 100px;
}

.header {
  background: #666;
  height: 80px;
}

.footer {
  background: #999;
  height: 50px;
}
</style>
