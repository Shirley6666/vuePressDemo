/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-17 18:29:21
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-06-21 10:45:24
 * @FilePath: \demo\docs\.vuepress\config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
    title: '前端技术部落',
    description: 'Just playing arount',
    repo: 'https://github.com/Shirley6666/vuePressDemo.git',
    configWebpack: {
        resolve: {
            alias: {
                '@vuepress': '/docs'
            }
        }
    },
    locales: {
        // '/en': {
        //     lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
        //     title: '',
        //     description: 'Vue-powered Static Site Generator'
        //   },
          '/': {
            lang: 'zh-CN',
            title: '',
            description: 'Vue 驱动的静态网站生成器'
          }
    },
    themeConfig: {
        locales: {
          '/': {
            selectText: 'Languages',
            label: 'English',
            ariaLabel: 'Languages',
            editLinkText: '请在github上编辑',
            serviceWorker: {
              updatePopup: {
                message: "无内容可用.",
                buttonText: "刷新"
              }
            },
            algolia: {},
            nav: [
              { text: '前端技术', 
                items: [
                  {text: 'Docker', link: '/tech/docker'},
                  {text: '常见问题及坑点', link: '/tech/question'}
                ]
              }, 
              {
                 text: '组件库', link: '/components/demo_1',
              },
              {
                  text: 'Element-UI', link: 'https://element.eleme.io/#/zh-CN'
              },
              {
                  text: '前端指引',
                  items: [
                    {text: '前端入职指引', link: '/direction/entryDirection'},
                    {text: '常用链接', link: '/direction/commonLink'}
                  ]
              }
            ],
            sidebar: {
              
              '/tech/': [
                {
                  title: '前端技术',
                  collapsable: false,
                  children: [
                    {title: 'Docker', path: '/tech/docker'},
                    {title: '常见问题及坑点', path: '/tech/question'}
                  ]
                }
              ],
              '/components': {
                title: '组件库',
                collapsable: false,
                children: [
                  {title: 'Demo_1', path: '/components/demo_1'}
                ]
              },
              '/direction': [{
                title: '前端指引',
                collapsable: false,
                children: [
                  {title: '前端入职指引', path: '/direction/entryDirection'},
                  {title: '常用链接', path: '/direction/commonLink'}
                ]

              }],
              '/': [/* ... */],
            }
          }
        }
      }
}