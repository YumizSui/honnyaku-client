module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "http://honnyaku-server.yumizsui.trap.show",
        pathRewrite: {
          "^/api/": "/"
        }
      }
    },
    overlay: {
      warnings: true,
      errors: true
    }
  }
};
