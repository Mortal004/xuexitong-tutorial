import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '刷课教程',
  description: '基于 Python + Selenium 的学习通自动化辅助工具 · 完整中文使用文档',
  // ⚠️ 如果仓库名不是 xuexitong-tutorial，请改成 '/你的仓库名/'
  // 如果是 用户名.github.io 仓库，则写 '/'
  base: '/xuexitong-tutorial/',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#10a37f' }],
    ['meta', { name: 'author', content: 'Mortal004' }],
    [
      'meta',
      {
        name: 'keywords',
        content: '学习通,刷课脚本,使用教程,Python,Selenium,驱动安装,报错处理'
      }
    ],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: '刷课脚本使用教程' }],
    ['meta', { property: 'og:description', content: '从启动程序、配置驱动到报错排查，一份写给非技术用户的完整中文文档。' }],
    [
      'script',
      {
        async: true,
        src: '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
      }
    ]
  ],

  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true
    }
  },

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: '刷课教程',

    nav: [
      { text: '首页', link: '/' },
      {
        text: '指南',
        items: [
          { text: '一、前言', link: '/guide/preface' },
          { text: '二、使用教程', link: '/guide/usage' },
          { text: '三、驱动安装', link: '/guide/driver' },
          { text: '四、报错处理', link: '/guide/faq' },
          { text: '五、更新', link: '/guide/update' },
          { text: '六、结语', link: '/guide/conclusion' },
          { text: '七、声明', link: '/guide/statement' }
        ]
      },
      { text: '驱动安装', link: '/guide/driver' },
      { text: '报错处理', link: '/guide/faq' },
      {
        text: '下载脚本',
        link: '/#download',
        activeMatch: '^/$'
      }
    ],

    sidebar: [
      {
        text: '开始使用',
        collapsed: false,
        items: [
          { text: '一、前言', link: '/guide/preface' },
          { text: '二、使用教程', link: '/guide/usage' }
        ]
      },
      {
        text: '常见问题',
        collapsed: false,
        items: [
          { text: '三、如何安装正确的驱动', link: '/guide/driver' },
          { text: '四、报错了该怎么办', link: '/guide/faq' }
        ]
      },
      {
        text: '其他',
        collapsed: false,
        items: [
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
            noResultsText: '没有找到相关内容',
            resetButtonTitle: '清除查询条件',
            displayDetails: '显示详细列表',
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
        link: 'https://github.com/Mortal004/Xuexitong_shuake',
        ariaLabel: 'GitHub 开源仓库'
      }
    ],

    footer: {
      message: '本软件仅供个人学习交流使用，请遵守学校相关规定',
      copyright: 'Copyright © 2024 Mortal004 · 基于 VitePress 构建'
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
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    externalLinkIcon: true,

    notFound: {
      title: '页面未找到',
      quote: '这里没有你要找的内容，可能是链接失效了。',
      linkLabel: '返回首页',
      linkText: '回到首页'
    }
  }
})
