const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    createProxyMiddleware("/.netlify/functions/", {
      target: "https://lustrous-pavlova-95371e.netlify.app/",
      // target: "http://localhost:9000/",
      pathRewrite: {
        "^/\\.netlify/functions": "",
      },
    }),
  );
};