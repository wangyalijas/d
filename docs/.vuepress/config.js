module.exports = {
    configureWebpack: {
      module: {
        rules: []
      }
    },
    base: '/win-design/',
    title: 'Win-Design',
    description: '基于vue2.x的组件库',
    head: [
      ['link', { rel: 'icon', href: '/logo.png' }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['meta', { name: 'theme-color', content: '#3eaf7c' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
      ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
      ['meta', { name: 'msapplication-TileImage', content: `/icons/msapplication-icon-144x144.png` }],
      ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    serviceWorker: true,
    themeConfig: {
      logo: '/logo.png',
      docsDir: 'docs',
      editLinks: true,
      editLinkText: '在 GitHub 上编辑此页',
      nav: [
        { text: '指南', link: '/' },
        { text: '组件', link: '/views/components/introduce'},
        { text: 'ABOUT', link: 'http://www.wued.com.cn' }
      ],
      sidebar: {
          '/views/components/': [
              {
                  title: '开始',
                  collapsable: false,
                  children: [
                      'introduce',
                      'update-log'
                  ]
              },
              {
                  title: 'Basic',
                  collapsable: false
              },
              {
                  title: '通用',
                  collapsable: false,
                  children: [
                      'color',
                      'typography',
                      'button',
                      'icon',
                      'layout'
                  ]
              },
              {
                title: '导航',
                collapsable: false,
                children: [
                    'affix',
                    'breadcrumb',
                    'dropdown',
                    'menu',
                    'pagination',
                    'steps'
                ]
              },
              {
                title: '数据录入',
                collapsable: false,
                children: [
                    'radio',
                    'checkbox',
                    'input',
                    'date-picker',
                    'input-number',
                    'time-picker',
                    'form',
                    'transfer',
                    'cascader',
                    'select',
                    'switch'
                ]
              },
              {
                title: '数据展示',
                collapsable: false,
                children: [
                  'list',
                  'popover',
                  'tree',
                  'tooltip',
                  'timeline',
                  'tag',
                  'tabs',
                  'table'
                ]
              },
              {
                title: '反馈',
                collapsable: false,
                children: [
                    'alert',
                    'drawer',
                    'modal',
                    'message',
                    'loading',
                    'skeleton'
                ]
              },
              {
                title: '其他',
                collapsable: false,
                children: [
                    'anchor'
                ]
              }, {
                title: 'Business',
                collapsable: false
            }
          ]
      },
      lastUpdated: '上次更新',
      serviceWorker: {
        updatePopup: {
          message: '发现最新发布w.in-Design！',
          buttonText: '更新'
        }
      }
    }
  }
