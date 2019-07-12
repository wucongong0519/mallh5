module.exports = {
    devServer: {
      open: true,
      host: 'localhost',
      port: 8080,
      https: false,
      hotOnly: false,
      // baseUrl:'./',
      proxy: {
        // 配置跨域
        '/validateCode': {
          target: 'http://47.96.151.73:30401/',
          pathRewrite: {'^/validateCode': '/validate'},
          changeOrigin: true,
        },
        '/api': {
          // target: 'http://localhost:8081',
          target: 'http://47.96.151.73:30402',
          changeOrigin: true,
        },
        '/oauth-api': {
          target: 'http://47.96.151.73:30401',
          pathRewrite: {'^/oauth-api': '/oauth'},
          changeOrigin: true,
        }
      },
      before: app => {}
    }
  };