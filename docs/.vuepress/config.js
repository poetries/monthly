const { fs, path } = require('@vuepress/shared-utils')
const readFileList = require("../../scripts/build.js");

module.exports = ctx => ({
  base:'/monthly/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '前端月报',
      description: '前端月报，当月回顾总结，记录当月看到的好文'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style',  }]
  ],
  themeConfig: {
    repo: 'poetries/monthly',
    lastUpdated: 'Last Updated',
    smoothScroll: true,
    docsBranch: 'master',
    docsDir: 'docs',
    editLinks: false,
    editLinkText: '帮助我们改善此页面！',
    algolia: {
      apiKey: '8c8a7cb8b23131c1282654084a8ca10f',
      indexName: 'Monthly'
    },
    locales: {
      '/': {
        editLinkText: '在 GitHub 上编辑此页',
        // nav: require('./nav/zh'),
        sidebar: {
          '/articles/': renderSiderBar()
        }
      }
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/medium-zoom', true],
    // ['@vuepress/google-analytics', {
    //   ga: 'UA-145821923-1'
    // }],
    // ['vuepress-plugin-baidu-google-analytics', {
    //   hm: '009a2f9b8cfc23cb5722f109462e450f',
    //   ignore_hash: false
    // }],
    ['container', {
      type: 'vue',
      before: '<pre class="vue-container"><code>',
      after: '</code></pre>',
    }],
    ['container', {
      type: 'upgrade',
      before: info => `<UpgradePath title="${info}">`,
      after: '</UpgradePath>',
    }],
  ],
  extraWatchFiles: [
    '.vuepress/nav/zh.js',
  ]
})

function renderSiderBar() {
  return ([
    ["/articles/", "首页"],
    {
      title: "2019",
      collapsable: false,
      children: readFileList('2019'),
    },
])
}
