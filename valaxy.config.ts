import { defineValaxyConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: ['黎可', 'の','世界'],
      cloud: {
        enable: true,
      },
    },

    pages: [
      // {
      //   name: '我的小伙伴们',
      //   url: '/links/',
      //   icon: 'i-ri-genderless-line',
      //   color: 'dodgerblue',
      // },
      // {
      //   name: '喜欢的女孩子',
      //   url: '/girls/',
      //   icon: 'i-ri-women-line',
      //   color: 'hotpink',
      // },
    ],

    footer: {
      since: 2024,
      powered: false,
      icon: {
        // enable: true,
        name: 'i-ri-heart-line',
        animated: true,
        color: '#BB2155',
        url: 'javascript:void(0)',
        title: '爱你'
      },
      beian: {
        enable: false,
        icp: '苏ICP备17038157号',
      },
    },

    fireworks: {
      enable: true,
    },

    // outlineTitle: '',

    say: {
      enable: false,
      api: '',
      hitokoto: {
        enable: false,
        api: ''
      }
    },

    notice: {
      enable: true,
      hideInPages: false,
      content: '博客施工中ε-(´・｀)'
    },

    menu: {
      /**
       * @zh 最右侧的导航图标
       */
      custom: {
        title: '感谢',
        url: '/thanks',
        icon: 'i-ri-heart-line',
      }
    }

  },

  unocss: { safelist },


})
