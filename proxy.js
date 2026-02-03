// proxy.js
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3000;
const targetUrl = 'https://www.saucedemo.com';

// Cookie-ul de sesiune pentru utilizatorul logat
const sessionCookie = 'session-username=standard_user';

app.use('/', createProxyMiddleware({
    target: targetUrl,
    changeOrigin: true,
    selfHandleResponse: false,
    onProxyReq: (proxyReq, req, res) => {
        // Injectează cookie-ul de sesiune
        proxyReq.setHeader('Cookie', sessionCookie);
    },
}));

app.listen(PORT, () => {
    console.log(`Proxy server running at http://localhost:${PORT}`);
});
