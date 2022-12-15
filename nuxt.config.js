import { i18n } from './lang/i18n-nuxt-config'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  //router: {
  //  base: '/'
  //  base: 'starnovskiy97.github.io/My-portfolio-nuxt.js/'
  //},
  head: {
    title: 'portfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', sizes: '32x32', type: 'image/png', href: '/favicon.png' },
      { rel: 'icon', type: 'image/png', href: './static/icons/android-chrome-192x192.png' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', href: './static/icons/apple-touch-icon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;600;700&family=PT+Sans:ital,wght@0,400;0,700;1,400&display=swap' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "./plugins/vClickOutside", ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['nuxt-i18n', i18n],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
