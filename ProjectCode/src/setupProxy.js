const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(createProxyMiddleware('/chat', // replace with your endpoint
        { target: 'http://localhost:3001' } // replace with your target
    ));
}