module.exports = {
  distDir: '../dist',
  exportPathMap: async function(defaultPathMap) {
    return {
      '/': { page: '/' },
    }
  },
}
