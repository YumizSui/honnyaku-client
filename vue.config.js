module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "http://honnyaku-server.yumizsui.trap.show"
      }
    },
    overlay: {
      warnings: true,
      errors: true
    }
  },
  publicPath: '/'
};
