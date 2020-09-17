module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:4000",
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
