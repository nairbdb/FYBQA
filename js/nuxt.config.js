export default {
  target: 'static', // for static site generation
  ssr: true,        // or false if you want SPA
  head: {
    title: 'My Nuxt App',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  }
}
