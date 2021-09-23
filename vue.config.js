const { resolve } = require('path')

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: true,
  configureWebpack () {
    return {
      resolve: {
        alias: {
          '@': resolve('src'),
        }
      }
    }
  }
}