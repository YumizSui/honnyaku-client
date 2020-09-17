module.exports = {
  publicPath: "/honnyaku-server",
  devServer: {
    proxy: {
      "^/honnyaku-server/api": {
        target: "http://honnyaku-server.yumizsui.trap.show:4000"
      }
    },
    overlay: {
      warnings: true,
      errors: true
    }
  }
};
