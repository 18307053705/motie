const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/api/home', { 
      target: 'http://localhost:9000',
      secure: false,
      changeOrigin: true
    
    }));
    app.use(proxy('/motie', { 
      target: 'https://app2.motie.com',
      secure: false,
      changeOrigin: true,
      pathRewrite:{
        "^/motie":'/'
      }
    }));
};