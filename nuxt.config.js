export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/bitbug_favicon.ico'
    }],
    script: [{
        src: '//libs.baidu.com/jquery/2.0.0/jquery.min.js'
      },
      {
        src: '//webapi.amap.com/maps?v=1.4.14&key=729ac4d779c7e625bc11bd5ba3ff3112'
      },
      {
        src: '//cdn.bootcdn.net/ajax/libs/bootstrap-slider/10.6.1/bootstrap-slider.min.js'
      },
      {
        src: '//ll.edefang.net/getIp.php'
      },
      {
        src: '/jQueryRotate.js'
      },
    ]
  },
  /*
   ** Global CSS
   */
  loading: {
    color: '#6ACCFF',
    height: '2px'
  },
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [{
      src: '~plugins/echarts',
      ssr: false
    },
    {
      src: '~plugins/cookies',
      ssr: false
    },
    {
      src: '~plugins/lazy',
      ssr: false
    },
    {
      src: '~plugins/toast',
      ssr: false
    },
    {
      src: '~plugins/map',
      ssr: false
    },
    {
      src: '~plugins/vant',
      ssr: true
    },
    {
      src: '~plugins/route',
      ssr: true
    },
    {
      src: '~plugins/axios',
      ssr: true
    },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  proxy: {
    '/jy': {
      target: 'http://39.98.227.114:9550/', // 你请求的第三方接口
      // changeOrigin: true, // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
      pathRewrite: { // 路径重写，
        '^/jy': '/jy', // 替换target中的请求地址
        changeOrigin: true
      }
    },
    '/front': {
      target: 'http://ll.edefang.net/', // 你请求的第三方接口
      // changeOrigin: true, // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
      pathRewrite: { // 路径重写，
        '^/front': '/front', // 替换target中的请求地址
        changeOrigin: true
      }
    },
    '/api': {
      target: 'http://ll.edefang.net/', // 你请求的第三方接口
      // changeOrigin: true, // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
      pathRewrite: { // 路径重写，
        '^/api': '/api', // 替换target中的请求地址
        changeOrigin: true
      }
    },
    '/flow': {
      target: 'http://39.98.227.114:9560/', // 你请求的第三方接口
      // changeOrigin: true, // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
      pathRewrite: { // 路径重写，
        '^/flow': '', // 替换target中的请求地址
        changeOrigin: true
      }
    },
  },
  axios: {
    proxy: true,
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    transpile: [/vant.*?less/],
    babel: {
      plugins: [
        ['import', {
          libraryName: 'vant',
          "style": (name) => {
            return `${name}/style/less.js`
          }
        }, 'vant']
      ],
    },
  },

}
