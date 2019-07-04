const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  distDir: '../dist',
  exportPathMap: async function(defaultPathMap) {
    return {
      '/': { page: '/' },
    }
  },
})
