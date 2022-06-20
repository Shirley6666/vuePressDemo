/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-17 18:29:21
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-06-20 14:42:08
 * @FilePath: \demo\docs\.vuepress\config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
    title: 'Hello VuePress2',
    description: 'Just playing arount',
    configWebpack: {
        resolve: {
            alias: {
                '@': '/docs'
            }
        }
    },
    locales: {
        '/': {
            lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
            title: 'VuePress Englist',
            description: 'Vue-powered Static Site Generator'
          },
          '/zh/': {
            lang: 'zh-CN',
            title: 'VuePress 中文',
            description: 'Vue 驱动的静态网站生成器'
          }
    },
    themeConfig: {
        locales: {
          '/': {
            selectText: 'Languages',
            label: 'English',
            ariaLabel: 'Languages',
            editLinkText: 'Edit this page on GitHub',
            serviceWorker: {
              updatePopup: {
                message: "New content is available.",
                buttonText: "Refresh"
              }
            },
            algolia: {},
            nav: [
              { text: 'Nested1', link: '/nested/', ariaLabel: 'Nested' }
            ],
            sidebar: {
              '/': [/* ... */],
              '/nested/': [/* ... */]
            }
          },
          '/zh/': {
            // 多语言下拉菜单的标题
            selectText: '选择语言',
            // 该语言在下拉菜单中的标签
            label: '简体中文',
            // 编辑链接文字
            editLinkText: '在 GitHub 上编辑此页',
            // Service Worker 的配置
            serviceWorker: {
              updatePopup: {
                message: "发现新内容可用.",
                buttonText: "刷新"
              }
            },
            // 当前 locale 的 algolia docsearch 选项
            algolia: {},
            nav: [
              { text: '嵌套', link: '/zh/nested/' }
            ],
            sidebar: {
              '/zh/': [/* ... */],
              '/zh/nested/': [/* ... */]
            }
          }
        }
      }
}