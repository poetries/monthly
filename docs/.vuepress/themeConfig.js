const readFileList = require("../../scripts/build.js");

module.exports = {
  repo: 'poetries/monthly',
    lastUpdated: 'Last Updated',
    smoothScroll: true,
    docsBranch: 'master',
    docsDir: 'docs',
    editLinks: false,
    editLinkText: '帮助我们改善此页面！',
    algolia: {
      apiKey: '8c8a7cb8b23131c1282654084a8ca10f',
      indexName: 'Monthly',
      inputSelector: '',
      debug: false
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
}

function renderSiderBar() {
  return ([
    ["/articles/", "首页"],
    {
      title: "2020",
      collapsable: false,
      children: readFileList('2020'),
    },
    {
      title: "2019",
      collapsable: false,
      children: readFileList('2019'),
     },
])
}
