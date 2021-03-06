module.exports = {
  base: '/vue-wheel/',
  title: '轮子UI',
  description: '一个好用的UI框架',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/install/' },
      { text: '交流', link: 'https://google.com' }
    ],
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children: ['/install/', '/get-start/']
      },
      {
        title: '组件',
        children: [
          '/components/button',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/popover',
          '/components/tabs',
          '/components/toast',
          '/components/collapse'
        ]
      }
    ]
  }
}
