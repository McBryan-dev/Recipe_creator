const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: ['https://recipe-creator-v7cv.onrender.com'],
  },
})
