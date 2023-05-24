const { defineConfig } = require('@vue/cli-service')
module.exports = {
  //api 서버 설정
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  outputDir: '../backend/public',
  
}