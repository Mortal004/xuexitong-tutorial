import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '用户须知',
  description: '刷课脚本使用教程 · 用户须知',
  // ⚠️ 如果仓库名不是 xuexitong-tutorial，请改成 '/你的仓库名/'
  // 如果是 用户名.github.io 仓库，则写 '/'
  base: '/xuexitong-tutorial/',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['meta', { name: 'theme-color', content: '#42b883' }]
  ],

  markdown: {
    lineNumbers: true
  },

  themeConfig: {
    logo: '/logo.png',
    siteTitle: '用户须知',

    nav: [
      { text: '首页', link: '/' },
      { text: '使用教程', link: '/guide/usage' },
      { text: '驱动安装', link: '/guide/driver' },
      { text: '报错处理', link: '/guide/faq' },
      { text: '更新', link: '/guide/update' },
      { text: '声明', link: '/guide/statement' }
    ],

    sidebar: [
      {
        text: '目录',
        items: [
          { text: '一、前言', link: '/guide/preface' },
          { text: '二、使用教程', link: '/guide/usage' },
          { text: '三、如何安装正确的驱动', link: '/guide/driver' },
          { text: '四、报错了该怎么办', link: '/guide/faq' },
          { text: '五、更新', link: '/guide/update' },
          { text: '六、结语', link: '/guide/conclusion' },
          { text: '七、声明', link: '/guide/statement' }
        ]
      }
    ],

    outline: {
      level: [2, 3],
      label: '本页目录'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Mortal004/Xuexitong_shuake'
      }
    ],

    footer: {
      message: '本软件仅供个人学习交流使用，请遵守学校相关规定',
      copyright: 'Copyright © 2024 Mortal004'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    notFound: {
      title: '页面未找到',
      quote: '这里没有你要找的内容，可能是链接失效了。',
      linkLabel: '返回首页',
      linkText: '回到首页'
    }
  }
})