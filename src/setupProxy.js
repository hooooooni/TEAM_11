const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware({
      target: "http://43.202.49.87:8080/",
      changeOrigin: true,
    })
  );
};
