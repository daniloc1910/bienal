export default {
  ssr: false,

  target: 'static',

  head: {
    title: 'bienal',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: ['~/css/main.css'],

  plugins: [
    { src: '~/plugins/masonry.js', ssr: false },
    { src: '~/plugins/flickity.js', ssr: false },
   ],

  components: true,

  buildModules: [
  ],

  modules: [
  ],

  build: {
  }
}
