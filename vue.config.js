module.exports = {
  publicPath: "/server",
  devServer: {
    proxy: {
      "^/server/api": {
        target: "http://honnyaku-server.yumizsui.trap.show/"
      }
    },
    overlay: {
      warnings: true,
      errors: true
    }
  }
};
