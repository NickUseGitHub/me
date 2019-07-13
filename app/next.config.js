const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  distDir: '../dist',
  exportTrailingSlash: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/me' : '',
  exportPathMap: async function(defaultPathMap) {
    return {
      '/': { page: '/' },
      '/bio/education': { page: '/bio/[type]', query: { type: 'education' } },
    }
  },
})
