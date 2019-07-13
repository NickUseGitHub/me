const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  distDir: '../dist',
  exportTrailingSlash: true,
  exportPathMap: async function(defaultPathMap) {
    return {
      '/': { page: '/' },
      '/bio/education': { page: '/bio/[type]', query: { type: 'education' } },
    }
  },
})
