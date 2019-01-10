module.exports = {
    base: '/win-design/',
    title: 'Win-Design',
    description: '基于vue2.x的组件库',
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }],
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
      docsDir: 'docs',
      editLinks: true,
      editLinkText: '在 GitHub 上编辑此页',
      nav: [
        { text: '指南', link: '/' },
        { text: '组件', link: '/views/components/tag'},
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
                  title: '基础组件',
                  collapsable: false,
                  children: [
                      'alert',
                      'button',
                      'icon',
                      'tag'
                  ]
              },
              {
                title: '导航组件',
                collapsable: false,
                children: [
                    'nav'
                ]
              },
              {
                title: '表单组件',
                collapsable: false,
                children: [
                    'input'
                ]
              },
              {
                title: '其他',
                collapsable: false,
                children: []
              }, {
                title: 'Business',
                collapsable: false
            }
          ]
      },
      lastUpdated: '上次更新',
      serviceWorker: {
        updatePopup: { 
          message: '发现最新发布w.in-design！', 
          buttonText: '更新'
        }
      }
    }
  }